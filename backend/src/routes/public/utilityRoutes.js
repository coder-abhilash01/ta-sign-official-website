const express = require("express");
const router = express.Router();
const { getAllUtilities, downloadUtility } = require("../../controllers/public/utilityController");


router.get("/", getAllUtilities);
router.get("/download/:id", downloadUtility);


module.exports = router;