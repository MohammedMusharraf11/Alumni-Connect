const User = require('../Models/users'); // Ensure you are importing User correctly
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { loginValidation } = require('../Middlewares/AuthValidation');
const cloudinary = require('cloudinary').v2;
const { validationResult } = require("express-validator");


const signup = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { fullName, collegeEmail, password, confirmPassword, graduationYear, course, fieldOfStudy, github, linkedin, usn } = req.body;
        const profilePhoto = req.file;
        console.log({fullName, collegeEmail, password, confirmPassword, graduationYear, course, fieldOfStudy, github, linkedin, usn}, profilePhoto);
        
        // Check if a user with the given college email already exists
        const user = await User.findOne({ collegeEmail });
        if (user) {
            return res.status(409).json({
                message: 'User already exists, you can log in',
                success: false
            });
        }

        // Ensure passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match",
                success: false
            });
        }

        const result = await cloudinary.uploader.upload(profilePhoto.path, { resource_type: 'image' });
        const imageURL = result.secure_url;

        // Create a new user model instance
        const userModel = new User({
            fullName,
            collegeEmail,
            password: await bcrypt.hash(password, 10), // Hash the password
            graduationYear,
            course,
            profilePhoto: imageURL,
            fieldOfStudy,
            github,
            linkedin,
            usn
        });

        // Save the new user to the database
        await userModel.save();

        // Respond with success message
        res.status(201).json({
            message: "Signup successful",
            _id: userModel._id,
            success: true
        });
    } catch (err) {
        console.error(err); // Log any errors for debugging
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const login = async (req, res) => {
    try {
        const { collegeEmail, password } = req.body;
        const user = await User.findOne({ collegeEmail }); // Use 'User' instead of 'UserModel'
        const errorMessage = 'Invalid email or password';
        
        if (!user) return res.status(400).json({ message: errorMessage, success: false });
        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: errorMessage, success: false });

        const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        // Send the token in the response header
        res.setHeader('Authorization', `Bearer ${jwtToken}`);

        // Send a response body (optional) with user details
        res.status(200).json({
            message: 'Login successful',
            success: true,
            fullname: user.fullName,
            token: jwtToken,
            profilePhoto: user.profilePhoto,
            _id: user._id, // Ensure _id is included here
          });
          

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


module.exports = { signup, login };
