
const { heroModel } = require("../../models/heroModel");
const {uploadToImageKit} = require("../../services/storageService");

const getHero = async (req, res) => {
    try {
        const hero = await heroModel.findOne();

        return res.status(200).json({
            success: true,
            data: hero
        });

    } catch (error) {
        console.error("Get hero error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to get hero"
        });
    }
};


const updateHero = async (req, res) => {
    try {

        const { title, subtitle } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        let hero = await heroModel.findOne();

        if (!hero) {
            hero = new heroModel();
        }

        hero.title = title;
        hero.subtitle = subtitle;

        if (req.file) {

            const result = await uploadToImageKit(
                req.file,
                "hero"
            );

            hero.image = {
                url: result.url,
                fileId: result.fileId,
                filePath: result.filePath
            };
        }

        await hero.save();

        return res.status(200).json({
            success: true,
            message: "Hero updated successfully",
            data: hero
        });

    } catch (error) {
        console.error("Update hero error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update hero"
        });
    }
};


module.exports = {
    getHero,
    updateHero
};