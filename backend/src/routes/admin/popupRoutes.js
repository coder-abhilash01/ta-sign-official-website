
const express = require("express");
const multer = require("multer");
const authMiddleware = require("../../middlewares/authMiddleware");
const { getPopup,updatePopup } = require("../../controllers/admin/popupControler");
const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    }
})
router.get("/", authMiddleware, getPopup);
router.put("/", authMiddleware,upload.single("image"), updatePopup);
module.exports = router;