"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = void 0;
const adminAuth = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    // Check if the key matches the one in your .env
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    next();
};
exports.adminAuth = adminAuth;
