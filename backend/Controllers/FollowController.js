const Alumni = require("../Models/alumni");
const User = require("../Models/users");


const followUser = async (req, res) => {
    const { UserId, followeeId } = req.params;
  
    try {
      // Add the followeeId to the User's followingUsers array
      await User.findByIdAndUpdate(UserId, {
        $addToSet: { followingUsers: followeeId }
      });
  
      // Add the UserId to the followee's followers array
      await User.findByIdAndUpdate(followeeId, {
        $addToSet: { followers: UserId }
      });
  
      res.status(200).json({ message: 'Successfully followed the User' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to follow the User' });
    }
  };

  const followAlumni =  async (req, res) => {
    const { UserId, alumniId } = req.params;
  
    try {
      // Add the alumniId to the User's followingAlumni array
      await User.findByIdAndUpdate(UserId, {
        $addToSet: { followingAlumni: alumniId }
      });
  
      // Add the UserId to the alumni's followers array
      await Alumni.findByIdAndUpdate(alumniId, {
        $addToSet: { followers: UserId }
      });
  
      res.status(200).json({ message: 'Successfully followed the alumni' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to follow the alumni' });
    }
  }

  const unfollowUser = async (req, res) => {
    const { UserId, followeeId } = req.params;
  
    try {
      // Remove the followeeId from the User's followingUsers array
      await User.findByIdAndUpdate(UserId, {
        $pull: { followingUsers: followeeId }
      });
  
      // Remove the UserId from the followee's followers array
      await User.findByIdAndUpdate(followeeId, {
        $pull: { followers: UserId }
      });
  
      res.status(200).json({ message: 'Successfully unfollowed the User' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to unfollow the User' });
    }
  }

  const unfollowAlumni = async (req, res) => {
    const { UserId, alumniId } = req.params;
  
    try {
      // Remove the alumniId from the User's followingAlumni array
      await User.findByIdAndUpdate(UserId, {
        $pull: { followingAlumni: alumniId }
      });
  
      // Remove the UserId from the alumni's followers array
      await Alumni.findByIdAndUpdate(alumniId, {
        $pull: { followers: UserId }
      });
  
      res.status(200).json({ message: 'Successfully unfollowed the alumni' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to unfollow the alumni' });
    }
  }

  module.exports = { followUser,followAlumni, unfollowUser, unfollowAlumni };