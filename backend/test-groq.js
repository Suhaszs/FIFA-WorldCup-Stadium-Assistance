const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function test() {
  try {
    console.log("Testing Groq API with key:", process.env.GROQ_API_KEY ? "Key present (length: " + process.env.GROQ_API_KEY.length + ")" : "No key");
    
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "user", content: "Say hello in 3 words" }
      ],
      model: "llama-3.1-8b-instant",
    });
    
    console.log("SUCCESS! Response:", completion.choices[0].message.content);
  } catch (error) {
    console.error("FAILED:", error.message);
    if (error.status) console.error("Status:", error.status);
    if (error.error) console.error("Error details:", error.error);
  }
}

test();
