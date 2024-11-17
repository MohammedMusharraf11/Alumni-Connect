const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../uploads')); // Directory for uploaded files
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname); // Unique file name
    }
});

// Initialize multer with specific field rules
const upload = multer({ storage });

const uploadMultipleFiles = upload.fields([
    { name: 'profilePhoto', maxCount: 1 }, // Field for profile photo (only 1 file allowed)
    { name: 'degreeCertificate', maxCount: 1 }, // Field for degree certificate (only 1 file allowed)
]);

module.exports = uploadMultipleFiles;
