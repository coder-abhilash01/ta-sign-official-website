const Utility = require("../../models/utilityModel");
const { getB2DownloadUrl } = require("../../services/b2CloudStorage");

const getAllUtilities = async (req, res) => {
    const utilities = await Utility.find().sort({ createdAt: -1 });
    return res.status(200).json({
        success: true,
        data: utilities
    });
}

const downloadUtility = async (req, res) => {
  try {
    const { id } = req.params;

    // Find utility in MongoDB
    const utility = await Utility.findById(id);

    if (!utility) {
      return res.status(404).json({
        success: false,
        message: "Utility not found",
      });
    }

    if (!utility.file.fileKey) {
      return res.status(404).json({
        success: false,
        message: "Utility file not found",
      });
    }
    

    const downloadUrl = await getB2DownloadUrl(utility.file.fileKey);
  

    return res.status(200).json({
      success: true,
      downloadUrl,
    });
  } catch (error) {
    console.error("Download utility error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate download link",
    });
  }
};

module.exports = { getAllUtilities, downloadUtility };