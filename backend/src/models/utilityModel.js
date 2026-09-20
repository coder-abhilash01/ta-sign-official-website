const mongoose = require("mongoose");

const utilitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "dsc_utility",
        "token_driver",
        "runtime_setup",
      ],
      required: true,
    },

    version: {
      type: String,
      required: true,
    },

    platform: {
      type: String,
      enum: [
        "Windows",
        "Mac",
        "Windows / Mac",
      ],
      required: true,
    },

    file: {
  fileKey: { type: String, required: true },
  originalName: { type: String },
  size: { type: Number },
  mimetype: { type: String }
},

    isActive: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
  }
);

const Utility = mongoose.model("Utility", utilitySchema);
module.exports = Utility 