
const { popupModel } = require("../../models/popupModel");
const { uploadToImageKit } = require("../../services/storageService");

const getPopup = async (req, res) => {
    try {
        const popup = await popupModel.findOne();

        return res.status(200).json({
            success: true,
            data: popup
        });

    } catch (error) {
        console.error("Get popup error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to get popup"
        });
    }
};


const updatePopup = async (req, res) => {
    try {

        const { isActive, type, cashback } = req.body;
        
        if (!type || !["partner", "offer"].includes(type)) {
            return res.status(400).json({
                success: false,
                message: "Valid popup type is required"
            });
        }

        if (type === "partner" && (cashback === undefined || cashback === "")) {
            return res.status(400).json({
                success: false,
                message: "Cashback is required for partner popup"
            });
        }

        if (type === "offer" && !req.file) {
            const existingPopup = await popupModel.findOne();

            if (!existingPopup?.offerImage?.url) {
                return res.status(400).json({
                    success: false,
                    message: "Offer image is required"
                });
            }
        }

        let popup = await popupModel.findOne();

        if (!popup) {
            popup = new popupModel();
        }

        popup.isActive = isActive === true || isActive === "true";
        popup.type = type;

        if (type === "partner") {
            popup.cashback = Number(cashback);
        }

        if (type === "offer" && req.file) {

            const result = await uploadToImageKit(
                req.file,
                "popup"
            );

            popup.offerImage = {
                url: result.url,
                fileId: result.fileId,
                filePath: result.filePath
            };
        }

        await popup.save();

        return res.status(200).json({
            success: true,
            message: "Popup updated successfully",
            data: popup
        });

    } catch (error) {
        console.error("Update popup error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update popup"
        });
    }
};


module.exports = {
    getPopup,
    updatePopup
};