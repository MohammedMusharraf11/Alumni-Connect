const mongoose = require('mongoose');
const Alumni = require('./alumni');
const User = require('./user');
const Schema = mongoose.Schema;

const followerSchema = new Schema({
   user:{
    type: Schema.Types.ObjectId,
    ref : "User"
   },
   alumni:{
    type: Schema.Types.ObjectId,
    ref : "Alumni"
   }
    
}, {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
});

// Change the model name to reflect that it represents alumni
const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;
