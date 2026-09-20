const mongoose = require("mongoose");

const popupSchema = new mongoose.Schema(
  {
    isActive: {
      type: Boolean,
      default: true,
    },

    type: {
      type: String,
      enum: ["partner", "offer"],
      default: "partner",
      required: true,
    },

    cashback: {
      type: Number,
      default: 50,
      min: 0,
      max: 100,
    },

    offerImage: {
      url: {
        type: String,
        default: "",
      },
      fileId: {
        type: String,
        default: "",
      },
      filePath: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const popupModel = mongoose.model("Popup", popupSchema);

module.exports = { popupModel };