const jwt = require("jsonwebtoken");
const User = require("../Models/users");

const protectRoute = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        req.user = user; // Attach user object to the request
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid token or user not found." });
    }
};

module.exports = protectRoute;
