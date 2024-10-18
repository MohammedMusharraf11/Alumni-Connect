const User = require('../Models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");
const {upload} = require('../Middlewares/multer');


const cloudinary = require('cloudinary').v2;

const signup = async (req, res) => {
    try {
        const { fullName, collegeEmail, password, confirmPassword, graduationYear, course, fieldOfStudy, github, linkedin, usn } = req.body;
        const imageFile = req.file;

        // Check if user already exists
        const user = await User.findOne({ collegeEmail });
        if (user) {
            return res.status(409).json({ message: 'User already exists, you can log in', success: false });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match", success: false });
        }

        // Upload image using Cloudinary's upload_stream
        const result = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { resource_type: "image" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            stream.end(imageFile.buffer); // Pass the buffer from multer's memory storage
        });

        const imageURL = result.secure_url;

        // Continue with password hashing and user creation...
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullName,
            collegeEmail,
            password: hashedPassword,
            graduationYear,
            course,
            fieldOfStudy,
            github,
            linkedin,
            usn,
            profilePhoto: imageURL
        });

        await newUser.save();
        res.status(201).json({ message: "Signup successful", success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};



module.exports = { signup };


const login = async (req, res) => {
    try {
        const { collegeEmail, password } = req.body;
        const user = await User.findOne({ collegeEmail }); // Use 'User' instead of 'UserModel'
        const errorMessage = 'Invalid email or password';
        
        if (!user) return res.status(400).json({ message: errorMessage, success: false });
        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: errorMessage, success: false });

        const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token: jwtToken, success: true, fullname: user.fullName });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { signup, login };
