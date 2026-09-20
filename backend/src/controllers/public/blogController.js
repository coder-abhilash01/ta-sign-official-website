const { blogModel } = require("../../models/blogModel");



const getAllBlogs = async (req, res) => {
    const blogs = await blogModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
        success: true,
        data: blogs
    });

}


const getBlogBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const blog = await blogModel.findOne({ slug });
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        res.status(200).json({
            success: true,
            data: blog,
        });
    }
    catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch blog",
        });
    }
};


module.exports = { getAllBlogs, getBlogBySlug };
