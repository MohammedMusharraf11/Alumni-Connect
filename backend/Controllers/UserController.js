const User = require('../Models/users'); // Ensure you are importing User correctly

const getUsersForSidebar = async (req, res) => {
    try {
        const currentUserId = req.user?._id; // Assume you have middleware that attaches the authenticated user to req.user

        // Fetch all users excluding the current user
        const users = await User.find(
            { _id: { $ne: currentUserId } }, // Exclude the current user
            '_id fullName profilePhoto'
        );

        res.status(200).json({ users });
    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Failed to retrieve users' });
        }
    }
};


module.exports = { getUsersForSidebar };
