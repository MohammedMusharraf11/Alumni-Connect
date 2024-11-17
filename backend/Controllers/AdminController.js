const Alumni = require('../Models/alumni'); // Assuming you have a model for alumni

// Controller to get all alumni (for admin)
const getAllAlumni = async (req, res) => {
    try {
        const alumni = await Alumni.find(); // Fetch all alumni
        res.status(200).json({ alumni });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch alumni list' });
    }
};

// Controller to verify alumni (by admin)
const verifyAlumni = async (req, res) => {
    try {
        const alumni = await Alumni.findByIdAndUpdate(
          req.params.id,
          { verified: true },  // Update the 'verified' field
          { new: true }
        );
        if (!alumni) {
          return res.status(404).json({ message: 'Alumni not found' });
        }
        res.json({ message: 'Alumni verified successfully', alumni });
      } catch (error) {
        res.status(500).json({ message: 'Error verifying alumni' });
      }
};

module.exports = { getAllAlumni, verifyAlumni };
