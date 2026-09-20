const express = require("express");
const multer = require("multer");
const {  createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog } = require("../../controllers/admin/blogController");
const authMiddleware = require("../../middlewares/authMiddleware");



const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});

router.get("/",authMiddleware, getBlogs);

router.get("/:id",authMiddleware, getBlog);

router.post(
    "/create",authMiddleware,
    upload.single("coverImage"),
    createBlog
);

router.put(
    "/:id",authMiddleware,
    upload.single("coverImage"),
    updateBlog
);

router.delete(
    "/:id", authMiddleware,
    deleteBlog
);

module.exports = router;