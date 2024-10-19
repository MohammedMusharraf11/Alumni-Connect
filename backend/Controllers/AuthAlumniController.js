const Alumni = require('../Models/alumni'); // Ensure you are importing the Alumni model correctly
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");

// Signup function for alumni
const signupAlumni = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { fullName, collegeEmail, password, confirmPassword, graduationYear, linkedin, degreeCertificate, profilePhoto } = req.body;

        // Check if an alumni with the given college email already exists
        const alumni = await Alumni.findOne({ collegeEmail });
        if (alumni) {
            return res.status(409).json({
                message: 'Alumni already exists, you can log in',
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

        // Create a new alumni model instance
        const alumniModel = new Alumni({
            fullName,
            collegeEmail,
            password: await bcrypt.hash(password, 10), // Hash the password
            graduationYear,
            linkedin,
            degreeCertificate,
            profilePhoto,
            verified: false, // Initially set to false when an alumni registers
            role: 'alumni', // Assign role as 'alumni'
        });

        // Save the new alumni to the database
        await alumniModel.save();

        // Respond with success message
        res.status(201).json({
            message: "Signup successful, awaiting verification",
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

// Login function for alumni
const loginAlumni = async (req, res) => {
    try {
        const { collegeEmail, password } = req.body;
        const alumni = await Alumni.findOne({ collegeEmail }); // Use 'Alumni' instead of 'User'
        const errorMessage = 'Invalid email or password';

        if (!alumni) return res.status(400).json({ message: errorMessage, success: false });

        const validPassword = await bcrypt.compare(password, alumni.password);
        if (!validPassword) return res.status(400).json({ message: errorMessage, success: false });

        // Check if the user is verified
        if (!alumni.verified) {
            return res.status(403).json({ message: 'Account not verified. Please Ask Admin to verify.', success: false });
        }

        const jwtToken = jwt.sign({ userId: alumni._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token: jwtToken, success: true, fullname: alumni.fullName });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


module.exports = { signupAlumni, loginAlumni };
