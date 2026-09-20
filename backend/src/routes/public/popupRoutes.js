const { getPopup } = require("../../controllers/admin/popupControler");
const express = require("express");
const router = express.Router();
router.get("/", getPopup);

module.exports = router;