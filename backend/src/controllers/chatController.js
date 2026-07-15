const { aiService } = require("../services/aiService");

const chatController = {
  sendMessage: async (req, res) => {
    try {
      const { message, language = "en" } = req.body;

      if (!message || message.trim().length === 0) {
        return res.status(400).json({ 
          error: "Message is required" 
        });
      }

      const response = await aiService.getResponse(message, language);
      res.json({ response });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ 
        error: "Failed to get response",
        details: error.message 
      });
    }
  }
};

module.exports = { chatController };
