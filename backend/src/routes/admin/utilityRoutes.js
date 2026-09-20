const express = require("express");
const multer = require("multer");

const {
    addUtility,
    getUtilities,
    deleteUtility
} = require("../../controllers/admin/utilityController");
const authMiddleware = require("../../middlewares/authMiddleware");

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),

    limits: {
        fileSize: 90 * 1024 * 1024
    }
});

router.get("/",authMiddleware, getUtilities);

router.post(
    "/",authMiddleware,
    upload.single("file"),
    addUtility
);

router.delete(
    "/:id",
    authMiddleware,
    deleteUtility
);

module.exports = router;