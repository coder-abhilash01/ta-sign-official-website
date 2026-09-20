const express = require("express");
const Router = express.Router();
const { getAllBlogs, getBlogBySlug } = require("../../controllers/public/blogController");

Router.get("/", getAllBlogs);
Router.get("/:slug", getBlogBySlug);

module.exports = Router;