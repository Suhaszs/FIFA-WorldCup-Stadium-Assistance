const express = require("express");
const { chatController } = require("../controllers/chatController");

const router = express.Router();

router.post("/", chatController.sendMessage);

router.get("/test", (req, res) => {
  res.json({ 
    message: "Chat API is working!",
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
