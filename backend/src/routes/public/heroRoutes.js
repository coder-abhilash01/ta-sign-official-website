const express = require("express");
const router = express.Router();
const { getHeroContent } = require("../../controllers/public/heroController");

router.get("/", getHeroContent);

module.exports = router;