import axios from "axios";

// HARDCODED URL - DO NOT CHANGE
const API_URL = "https://fifa-worldcup-stadium-assistance-bj6q.onrender.com";

export const chatApi = {
  sendMessage: async (message, language = "en") => {
    const response = await axios.post(`${API_URL}/api/chat`, {
      message,
      language
    });
    return response.data;
  },

  testConnection: async () => {
    const response = await axios.get(`${API_URL}/api/chat/test`);
    return response.data;
  },

  healthCheck: async () => {
    const response = await axios.get(`${API_URL}/health`);
    return response.data;
  }
};