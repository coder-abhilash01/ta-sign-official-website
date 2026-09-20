
const { blogModel } = require("../../models/blogModel");
const {uploadToImageKit, deleteFromImageKit} = require("../../services/storageService");

const createBlog = async (req, res) => {
    try {

        const {
            title,
            slug,
            category,
            excerpt,
            content
        } = req.body;

        if (
            !title ||
            !slug ||
            !category ||
            !excerpt ||
            !content
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Cover image is required"
            });
        }

        const existingBlog = await blogModel.findOne({
            slug
        });

        if (existingBlog) {
            return res.status(409).json({
                success: false,
                message: "Blog with this slug already exists"
            });
        }

        const result = await uploadToImageKit(
            req.file,
            "blogs"
        );

        const blog = await blogModel.create({
            title,
            slug,
            category,
            excerpt,
            content,

            coverImage: {
                url: result.url,
                fileId: result.fileId,
                filePath: result.filePath
            }
        });

        return res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: blog
        });

    } catch (error) {

        console.error("Create blog error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to create blog"
        });
    }
};


const getBlogs = async (req, res) => {
    try {

        const blogs = await blogModel
            .find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: blogs
        });

    } catch (error) {

        console.error("Get blogs error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to get blogs"
        });
    }
};


const getBlog = async (req, res) => {
    try {

        const blog = await blogModel.findById(
            req.params.id
        );

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: blog
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Failed to get blog"
        });
    }
};


const updateBlog = async (req, res) => {
  const { id } = req.params;
  const title = req.body.title.trim();
  const slug = req.body.slug.trim();
  const category = req.body.category.trim();
  const excerpt = req.body.excerpt.trim();
  const content = req.body.content.trim();

  try {

    const blog = await blogModel.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    if (!title || !slug || !category || !excerpt || !content) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    blog.title = title;
    blog.slug = slug;
    blog.category = category;
    blog.excerpt = excerpt;
    blog.content = content;

    await blog.save();

    return res.status(200).json({
        success: true,
        message: "Blog updated successfully",
        data: blog
    });
  }catch (error) {
    console.error("Update blog error:", error);
return res.status(500).json({
        success: false,
        message: "Failed to update blog"
    });
  }

};


const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await blogModel.findById(id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        const fileId  = blog.coverImage.fileId;
     if (fileId) {
            await deleteFromImageKit(fileId);
        }

        await blogModel.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        });
    } catch (error) {
        console.error("Delete blog error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to delete blog"
        });
    }
};


module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
};