import { GoogleGenAI } from "@google/genai";

async function main() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: "Hello world" }] }],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Kore" },
          },
        },
      },
    });
    console.log(response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data ? "SUCCESS" : "FAIL");
  } catch (err) {
    console.error("ERROR", err);
  }
}

main();
