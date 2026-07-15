const dotenv = require("dotenv");

// Load environment variables FIRST
dotenv.config();

const app = require("./app");

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`🚀 StadiumAI Backend running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🔗 API URL: http://localhost:${PORT}/api/chat`);
  console.log(`✅ Health check: http://localhost:${PORT}/health`);
  console.log(`🔑 API Key present: ${process.env.GROQ_API_KEY ? "Yes ✅" : "No ❌"}`);
});

// Graceful shutdown
const shutdown = () => {
  console.log("🛑 Shutting down server...");
  server.close(() => {
    console.log("✅ Server shut down successfully");
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

module.exports = server;
