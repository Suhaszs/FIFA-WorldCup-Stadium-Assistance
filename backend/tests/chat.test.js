const request = require("supertest");
const app = require("../src/app");

describe("Chat API Tests", () => {
  test("POST /api/chat should return response for valid message", async () => {
    const response = await request(app)
      .post("/api/chat")
      .send({
        message: "Where is the nearest restroom?",
        language: "en"
      });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("response");
    expect(typeof response.body.response).toBe("string");
  });

  test("POST /api/chat should return 400 for empty message", async () => {
    const response = await request(app)
      .post("/api/chat")
      .send({
        message: "",
        language: "en"
      });
    
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });

  test("GET /health should return status OK", async () => {
    const response = await request(app)
      .get("/health");
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "OK");
  });

  test("GET /api/chat/test should return working message", async () => {
    const response = await request(app)
      .get("/api/chat/test");
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toContain("working");
  });
});
