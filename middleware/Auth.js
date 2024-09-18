const jwt = require ("jsonwebtoken")
require('dotenv').config

// Middleware to validate JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('authorization')

    // Check if token is provided in the request header. If not, return an error message and stop the function execution.
    if (!token) {
        res.status(401).json({
            status: 401,
            success: false,
            message: "Access denied. No token provided."
        })
        return next()  // Stop the function execution here if token is not provided.
    }

    try {
        const VerifyToken = jwt.verify(token,process.env.SECRET_KEY )
        req.user = VerifyToken

        next()

    } catch (error) {
        res.status(403).json({
            status: 403,
            success: false,
            message: "Invalid token. Please login again."
        })
    }
}
module.exports = verifyToken