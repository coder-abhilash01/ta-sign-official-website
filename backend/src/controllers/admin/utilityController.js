const Utility = require("../../models/utilityModel");
const { uploadToB2, deleteFromB2, getB2DownloadUrl } = require("../../services/b2CloudStorage");

const addUtility = async (req, res) => {
  try {
    const name = req.body.name?.trim();
    const category = req.body.category?.trim();
    const version = req.body.version?.trim();
    const platform = req.body.platform?.trim();

    if (!name || !category || !version || !platform) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Utility file is required"
      });
    }

    const allowedExtensions = [".exe", ".zip", ".msi"];
    const fileName = req.file.originalname.toLowerCase();
    const validExtension = allowedExtensions.some(ext => fileName.endsWith(ext));

    if (!validExtension) {
      return res.status(400).json({
        success: false,
        message: "Only EXE, ZIP and MSI files are allowed"
      });
    }

    // 1. Upload to Backblaze B2
    const b2Result = await uploadToB2(req.file, "utilities");

    // 2. Save in Database
    const utility = await Utility.create({
      name,
      category,
      version,
      platform,
      file: {
        fileKey: b2Result.fileKey,
        originalName: b2Result.originalName,
        size: b2Result.size,
        mimetype: b2Result.mimetype
      }
    });

    return res.status(201).json({
      success: true,
      message: "Utility uploaded successfully",
      data: utility
    });

  } catch (error) {
    console.error("Utility upload error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload utility"
    });
  }
};

const getUtilities = async (req, res) => {
  try {
    const utilities = await Utility.find({ isActive: true }).sort({ createdAt: -1 });

    // Generate dynamic download URLs for each utility
    const utilitiesWithUrls = await Promise.all(
      utilities.map(async (doc) => {
        const utility = doc.toObject();
        if (utility.file?.fileKey) {
          utility.file.downloadUrl = await getB2DownloadUrl(utility.file.fileKey);
        }
        return utility;
      })
    );

    return res.status(200).json({
      success: true,
      data: utilitiesWithUrls
    });

  } catch (error) {
    console.error("Get utilities error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get utilities"
    });
  }
};

const deleteUtility = async (req, res) => {
  try {
    const { id } = req.params;
    const utility = await Utility.findById(id);

    if (!utility) {
      return res.status(404).json({
        success: false,
        message: "Utility not found"
      });
    }

    // Delete file from Backblaze B2
    if (utility.file?.fileKey) {
      await deleteFromB2(utility.file.fileKey);
    }

    // Delete record from Database
    await Utility.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Utility deleted successfully"
    });

  } catch (error) {
    console.error("Delete utility error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete utility"
    });
  }
};

module.exports = {
  addUtility,
  getUtilities,
  deleteUtility
};