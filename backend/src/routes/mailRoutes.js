const express = require("express");

const router = express.Router();

const mailController = require("../controllers/tempMailController");

const { tempMailLimiter } = require("../middlewares/rateLimiters");


// Create temporary account
router.post("/accounts", tempMailLimiter, (req, res) => {
    req.params.splat = "accounts";
    mailController(req, res);
});


// Get domains
router.get("/domains", (req, res) => {
    req.params.splat = "domains";
    mailController(req, res);
});


// Get token
router.post("/token", (req, res) => {
    req.params.splat = "token";
    mailController(req, res);
});


// Get all messages
router.get("/messages", (req, res) => {
    req.params.splat = "messages";
    mailController(req, res);
});


// Get single message
router.get("/messages/:id", (req, res) => {
    req.params.splat = `messages/${req.params.id}`;
    mailController(req, res);
});


module.exports = router;