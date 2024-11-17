const express = require('express');
const { getAllAlumni, verifyAlumni } = require('../Controllers/AdminController');
const router = express.Router();

// Route to get all alumni
router.get('/alumni', getAllAlumni);

// Route to verify alumni
router.put('/alumni/:id/verify', verifyAlumni);

module.exports = router;
