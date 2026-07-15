import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

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
