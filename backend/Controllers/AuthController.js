const User = require('../Models/users'); // Ensure you are importing User correctly
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { loginValidation } = require('../Middlewares/AuthValidation');

const signup = async (req, res) => {
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ collegeEmail: req.body.collegeEmail });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Encrypt the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        const user = new User({
            fullName: req.body.fullName,
            graduationYear: req.body.graduationYear,
            collegeEmail: req.body.collegeEmail,
            course: req.body.course,
            usn: req.body.usn,
            fieldOfStudy: req.body.fieldOfStudy,
            linkedin: req.body.linkedin,
            github: req.body.github,
            password: hashedPassword
        });

        // Save the user in the database
        await user.save();
        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        return res.status(500).json({ message: error.message });
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
        res.status(200).json({ message: 'Login successful', token: jwtToken, success: true });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { signup, login };
