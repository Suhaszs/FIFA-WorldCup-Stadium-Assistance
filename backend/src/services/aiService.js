const Groq = require("groq-sdk");

// Create Groq client with API key from environment
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const systemPrompts = {
  en: "You are StadiumAI, an intelligent assistant for FIFA World Cup 2026. Help users with stadium navigation, match schedules, amenities, emergency assistance, and general questions. Be helpful, concise, and friendly.",
  es: "Eres StadiumAI, un asistente inteligente para la Copa Mundial de la FIFA 2026. Ayuda a los usuarios con navegación en el estadio, horarios de partidos, servicios, asistencia de emergencia y preguntas generales. Sé útil, conciso y amable.",
  fr: "Vous êtes StadiumAI, un assistant intelligent pour la Coupe du Monde de la FIFA 2026. Aidez les utilisateurs avec la navigation dans le stade, les horaires des matchs, les services, l'assistance d'urgence et les questions générales. Soyez utile, concis et amical.",
  ar: "أنت StadiumAI، مساعد ذكي لكأس العالم FIFA 2026. ساعد المستخدمين في التنقل في الملعب، جداول المباريات، المرافق، المساعدة في حالات الطوارئ والأسئلة العامة. كن مفيداً وموجزاً وودوداً."
};

const aiService = {
  getResponse: async (message, language = "en") => {
    try {
      const systemPrompt = systemPrompts[language] || systemPrompts.en;

      // Log that we're using the key (without exposing it)
      console.log("API Key present:", process.env.GROQ_API_KEY ? "Yes (length: " + process.env.GROQ_API_KEY.length + ")" : "No");

      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        model: "llama-3.1-8b-instant",
        temperature: 0.7,
        max_tokens: 500,
      });

      return completion.choices[0]?.message?.content || "I couldn't process your request.";
    } catch (error) {
      console.error("Groq API error:", error.message);
      if (error.status) console.error("Status:", error.status);
      return "I'm having trouble connecting. Please try again.";
    }
  }
};

module.exports = { aiService };
