import axios from "axios";

// HARDCODED URL - THIS IS YOUR BACKEND
const API_URL = "https://fifa-worldcup-stadium-assistance-bj6q.onrender.com";

export const chatApi = {
  sendMessage: async (message, language = "en") => {
    try {
      const response = await axios.post(`${API_URL}/api/chat`, {
        message,
        language
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  healthCheck: async () => {
    try {
      const response = await axios.get(`${API_URL}/health`);
      return response.data;
    } catch (error) {
      console.error("Health check failed:", error);
      throw error;
    }
  }
};