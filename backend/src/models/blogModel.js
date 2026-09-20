const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "DSC",
        "Trademark",
        "ISO",
        "Taxes",
      ],
      required: true,
    },

    excerpt: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    coverImage: {
      url: String,
      fileId: String,
      filePath: String,
    },

    published: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
  }
);

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = { blogModel };