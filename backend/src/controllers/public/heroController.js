const {heroModel} = require("../../models/heroModel");  

const getHeroContent = async (req, res) => {
    try {
        const heroContent = await heroModel.findOne();
        return res.status(200).json({
            success: true,
            data: heroContent
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get hero content"
        });
    }
};

module.exports = { getHeroContent };