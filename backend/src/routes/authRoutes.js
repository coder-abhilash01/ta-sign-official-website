const express = require("express");
const router = express.Router();
const { loginAdmin, getAdminProfile } = require("../controllers/authControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const {adminLoginLimiter} = require("../middlewares/rateLimiters");


router.post("/login", adminLoginLimiter, loginAdmin);
router.get("/admin/me", authMiddleware, getAdminProfile);




module.exports = router;
