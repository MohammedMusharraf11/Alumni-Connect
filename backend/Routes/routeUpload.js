const express = require('express');
const router = express.Router();
const cloudinary = require('../utils/cloudinary');
const upload = require("../Middlewares/multer");

const handleUpload = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        res.status(200).json({
            success: true,
            message: "Uploaded!",
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error uploading image",
        });
    }
};

router.post('/student', upload.single('profilePhoto'), handleUpload);  
router.post('/alumni', upload.single('profilePhoto'), handleUpload);   

module.exports = router;
