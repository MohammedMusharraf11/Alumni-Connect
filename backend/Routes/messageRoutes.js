// backend/routes/messageRoutes.js
const express = require("express");
const { sendMessage, getMessages } = require("../Controllers/MessageController");
const protectRoute = require("../Middlewares/ProtectRoute");

const router = express.Router();

// Route for sending a message to a user
router.post("/send/:id", protectRoute, sendMessage);

// Route for getting messages between two users
router.get("/:id", protectRoute,getMessages);

module.exports = router;
