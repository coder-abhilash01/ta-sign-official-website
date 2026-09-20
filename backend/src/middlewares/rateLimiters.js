const rateLimit = require("express-rate-limit");

// Admin Login Rate Limiter
const adminLoginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, 
    max: 5, 
    standardHeaders: true,
    legacyHeaders: false,

    message: {
        success: false,
        message: "Too many login attempts. Please try again after 5 minutes."
    }
});


const tempMailLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, 
    max: 5, // maximum 5 mail generations
    standardHeaders: true,
    legacyHeaders: false,

    message: {
        success: false,
        message: "Too many temporary mail requests. Please try again after 5 minutes."
    }
});


module.exports = {
    adminLoginLimiter,
    tempMailLimiter
};