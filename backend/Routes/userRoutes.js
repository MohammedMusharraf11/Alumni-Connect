const express = require('express');
const protectRoute = require('../Middlewares/ProtectRoute');
const { getUsersForSidebar } = require('../Controllers/UserController');
const { getUserProfile, updateUserProfile } = require('../Controllers/UserProfileController');

const router = express.Router();

router.get('/', protectRoute, getUsersForSidebar);


router.get('/:id', getUserProfile);

// Route to update user profile
router.put('/:id', updateUserProfile);

module.exports = router;
