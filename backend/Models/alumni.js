const { required } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumniSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    graduationYear: {
        type: Number,
        required: true,
    },
    collegeEmail: {
        type: String,
        required: true,
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    linkedin: {
        type: String,
        match: [/^https?:\/\/(www\.)?linkedin\.com\/.*$/, 'Please provide a valid LinkedIn profile URL'],
        trim: true,
    },
    degreeCertificate: {
        type: String,
        required:true,
         // Stores the file path or URL of the uploaded certificate
    },
    profilePhoto: {
        type: String, // Stores the file path or URL of the uploaded profile photo
        required: true,
    },
    verified: {
        type: Boolean,
        default: false, // Initially set to false when an alumni registers
    },
    role: {
        type: String,
        enum: ['alumni'], // Define roles specifically for alumni
        required: true,
    },

    // Array to track followers (only students can follow alumni)
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
});

// Change the model name to reflect that it represents alumni
const Alumni = mongoose.model('Alumni', alumniSchema);

module.exports = Alumni;
