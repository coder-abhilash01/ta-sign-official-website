const express = require("express");
const multer = require("multer");
const { getHero, updateHero } = require("../../controllers/admin/heroController");
const authMiddleware = require("../../middlewares/authMiddleware");



const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});

router.get("/",authMiddleware, getHero);

router.put(
    "/",
    authMiddleware,
    upload.single("image"),
    updateHero
);

module.exports = router;