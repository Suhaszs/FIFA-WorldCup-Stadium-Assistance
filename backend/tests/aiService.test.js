const { aiService } = require("../src/services/aiService");

// Mock the Groq API for testing
jest.mock("groq-sdk", () => {
  return jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [
            {
              message: {
                content: "Mock response from AI"
              }
            }
          ]
        })
      }
    }
  }));
});

describe("AI Service Tests", () => {
  test("getResponse should return a string response", async () => {
    const response = await aiService.getResponse("Hello", "en");
    expect(typeof response).toBe("string");
  });

  test("getResponse should handle different languages", async () => {
    const responseES = await aiService.getResponse("Hola", "es");
    expect(typeof responseES).toBe("string");
  });

  test("getResponse should default to English if language not supported", async () => {
    const response = await aiService.getResponse("Hello", "xx");
    expect(typeof response).toBe("string");
  });
});
