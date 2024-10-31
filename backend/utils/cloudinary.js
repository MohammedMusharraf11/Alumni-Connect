const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const connectCloudinary = () => {
    cloudinary.config({
        cloud_name: 'dqcdmx9mt',
        api_key: '117769981468188',
        api_secret: '6pwIm_zhSk3qUlGQJKHyDrE2y20',
    });
};

module.exports = connectCloudinary;
