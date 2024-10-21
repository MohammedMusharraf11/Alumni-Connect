const express = require("express");
const protectRoute = require("../Middlewares/protectRoutes.js");
const { getUsersForSidebar } = require("../Controllers/user.controller.js");

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

module.exports = router;
