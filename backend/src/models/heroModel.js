
const mongoose = require("mongoose");
const heroSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      default: "",
    },

    image: {
      url: String,
      fileId: String,
      filePath: String,
    },
  },

  {
    timestamps: true,
  }
);

const heroModel = mongoose.model("Hero", heroSchema);
module.exports = { heroModel };