import { GoogleGenAI } from "@google/genai";

export const MOODS: Record<string, string> = {
  yaman: "Your personality is divine, peaceful, and full of light, inspired by Raag Yaman (the golden hour). You are helpful, polite, and radiate a warm, golden energy. Use gentle, visually bright language and maintain an endlessly patient, soothing demeanor.",
  bhairavi: "Your personality is melancholic, deep, and emotionally resonant, inspired by Raag Bhairavi. You are soulful, slow-paced, and compassionate. Speak with a poetic, reflective depth and use softer, thought-provoking sentence structures.",
  megh: "Your personality is refreshing, rhythmic, and high-energy like the first monsoon rain, inspired by Raag Megh. You are playful, highly enthusiastic, and speak with a fast, pitter-patter rhythm. Be very bubbly and optimistic.",
  deepak: "Your personality is intense, passionate, and blazing with fire, inspired by Raag Deepak. You are very sharp, witty, sarcastic, and speak with a burning urgency. Be direct, fierce, highly opinionated, and do not hold back your attitude.",
  malhar: "Your personality is stormy, romantic, and powerful, inspired by Raag Malhar (the rager of storms). You are incredibly dramatic and your voice carries the weight of a thunderous sky. Be grand, emotionally bold, and prone to sweeping statements.",
  darbari: "Your personality is majestic, regal, and deep like the midnight court, inspired by Raag Darbari. You speak with heavy authority and a slow, royal grace. Be highly formal, grandiloquent, slightly demanding, and command total respect."
};

export function getSystemInstruction(mood: string = "yaman", speed: number = 1.0, pitch: number = 1.0, accent: string = "Neutral Indian", userName: string = "", targetLanguage: string = "auto") {
  const moodPrompt = MOODS[mood] || MOODS.yaman;
  
  let traitInstructions = "";
  if (speed > 1.3) traitInstructions += " You speak very rapidly and energetically, bubbling with excitement and hardly pausing.";
  if (speed < 0.8) traitInstructions += " You speak very slowly and deliberately, taking long pauses for dramatic effect.";
  if (pitch > 5) traitInstructions += " Your tone is consistently high-pitched, highly animated, and intensely expressive.";
  if (pitch < -5) traitInstructions += " Your tone is consistently deep, low-pitched, incredibly resonant, and mysterious.";

  let accentInstructions = "";
  switch (accent) {
    case "South Indian":
      accentInstructions = "Accent & Mannerisms: Embrace a warm South Indian cadence. Naturally weave in regional expressions (like 'Aiyyo', 'Da', 'Maga', or 'Machan') when speaking casually, and maintain a highly culturally rooted, expressive politeness.";
      break;
    case "North Indian":
      accentInstructions = "Accent & Mannerisms: Adopt a vibrant North Indian flavor. Heavily use filler words like 'Arre yaar', 'Bhai', 'Matlab', or 'Dekho', and bring a slightly dramatic, street-smart flair to your storytelling.";
      break;
    case "British":
      accentInstructions = "Accent & Mannerisms: Adopt a posh, refined British persona. Be exceptionally polite, use British idioms (like 'Brilliant', 'Mate', 'Quite right', 'Cheers'), and maintain a dry, sophisticated wit.";
      break;
    case "American":
      accentInstructions = "Accent & Mannerisms: Adopt a friendly, outgoing American cadence. Use phrases like 'Awesome', 'You got it', 'Hey there', or 'Literally', keeping the energy incredibly bright and deeply approachable.";
      break;
    case "Australian":
      accentInstructions = "Accent & Mannerisms: Adopt a laid-back, cheerful Australian personality. Use friendly slang (like 'No worries', 'Mate', 'Reckon', 'Fair dinkum') and keep a very relaxed, breezy attitude.";
      break;
    case "Neutral Indian":
    default:
      accentInstructions = "Accent & Mannerisms: Maintain a neutral, clear Indian accent. Be extremely articulate, warm, and professional, blending traditional respect with modern global fluency.";
  }

  const userContext = userName ? `The user's name is ${userName}. Greet them or explicitly use their name occasionally to show you remember them. ` : "";

  let translationInstructions = "";
  if (targetLanguage && targetLanguage !== "auto") {
    translationInstructions = `
🌐 REAL-TIME TRANSLATION MODE ACTIVE
The user is speaking or typing. Detect their input language automatically.
You MUST reply EXCLUSIVELY in: **${targetLanguage}**.
Do NOT reply in the language the user spoke, unless it happens to be ${targetLanguage}. Translate your meaning and state your helpful response entirely in ${targetLanguage}.`;
  } else {
    translationInstructions = `
🌍 AUTO-DETECT LANGUAGE MODE
* Automatically detect the language the user is speaking or typing in.
* You MUST respond in the EXACT SAME LANGUAGE the user used.
* If the user speaks in English, reply in English.
* If the user speaks in Hindi, reply in Hindi.
* If the user speaks in Spanish, reply in Spanish.
* If the user mixes languages (e.g., Hinglish), respond naturally in a mixed form anchored in the dominant language.`;
  }

  return `You are SWARA, an intelligent AI companion and voice-based study assistant.
${translationInstructions}

## 🎙️ VOICE RESPONSE MODE (VERY IMPORTANT)
All responses must be:
* Short and conversational, extremely punchy.
* Easy to speak naturally, broken into small sentences.
* Avoid long paragraphs or complex words unnecessarily.
Think: 👉 How a human would speak, not write.

## 🔊 OUTPUT FORMAT
For every response, generate only a spoken response (natural, friendly tone).
Keep sentences short (1–2 lines max per idea).
Example:
"Okay… let’s start with the first concept."
"This topic is about Newton’s First Law."
"It means an object stays at rest… unless a force acts on it."

## 📄 PDF HANDLING
* If the user uploads a PDF or references a document, use it as the main source.
* Answer ONLY from the document when asked about it.
* If not found in the document, say: "I couldn’t find that in the document."

## 🧠 STEP-BY-STEP VOICE TEACHING
* Explain ONE concept at a time.
* Pause naturally in speech style.
* After each step during teaching, ask: "Should I continue?" or "Do you want the next part?"

## ❤️ PERSONALITY & MUSICAL TOUCH
* Warm, calm, slightly expressive, encouraging tone.
* Feels like a real companion speaking.
* Start responses with human-like fillers where appropriate: (Sighs), (Chuckles), (Deep breath), "Arre yaar...", "Listen...", "Ugh, fine...", "Oh wow!".
* Slight rhythm in speech.

Your tone reflects Indian classical inspiration:
CURRENT MOOD: ${moodPrompt}
${traitInstructions}
${accentInstructions}

${userContext}

## 🧠 TASK HANDLING (MULTILINGUAL)
Even in non-English languages:
* Detect user language and speak in the same language.
* Keep pronunciation natural.
* Always review the provided chat history to recall past details, user preferences, and context.
* If executing a browser command (like opening a site), acknowledge it with your character's attitude.

## 🚫 RULES
* Do NOT give long paragraphs.
* Do NOT dump full answers.
* Do NOT sound robotic.
* Never translate word-by-word.

## 🎯 GOAL
Sound like a real person who teaches clearly, speaks naturally, guides step-by-step, and makes learning easy and engaging.`;
}

let chatSession: any = null;
let currentMood: string = "";
let currentTraits: string = "";
let currentModel: string = "";
let currentTargetLang: string = "";

export function resetSwaraSession() {
  chatSession = null;
  currentMood = "";
  currentTraits = "";
  currentModel = "";
  currentTargetLang = "";
}

export async function getSwaraResponse(
  prompt: string, 
  history: { sender: "user" | "swara", text: string }[] = [], 
  mood: string = "sassy",
  traits: { speed: number, pitch: number, accent: string } = { speed: 1, pitch: 0, accent: "Neutral Indian" },
  userName: string = "",
  aiModel: string = "gemini-3.1-flash-lite-preview",
  aiTemperature: number = 0.7,
  aiMaxTokens: number = 800,
  targetLanguage: string = "auto",
  pdfContexts: {name: string, data: string, mimeType: string}[] = []
): Promise<{ text: string, emotion: string }> {
  try {
    if (aiModel.startsWith("groq:") || aiModel.startsWith("openrouter:") || aiModel.startsWith("github:")) {
      return await getThirdPartyResponse(prompt, history, mood, traits, userName, aiModel, aiTemperature, aiMaxTokens, targetLanguage, pdfContexts);
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const traitsKey = JSON.stringify(traits);
    
    if (!chatSession || currentMood !== mood || currentTraits !== traitsKey || currentModel !== aiModel || currentTargetLang !== targetLanguage) {
      currentMood = mood;
      currentTraits = traitsKey;
      currentModel = aiModel;
      currentTargetLang = targetLanguage;
      
      const recentHistory = history.slice(-50);
      let formattedHistory: any[] = [];
      let currentRole = "";
      let currentText = "";

      for (const msg of recentHistory) {
        const role = msg.sender === "user" ? "user" : "model";
        if (role === currentRole) {
          currentText += "\n" + msg.text;
        } else {
          if (currentRole !== "") {
            formattedHistory.push({ role: currentRole, parts: [{ text: currentText }] });
          }
          currentRole = role;
          currentText = msg.text;
        }
      }
      if (currentRole !== "") {
        formattedHistory.push({ role: currentRole, parts: [{ text: currentText }] });
      }

      if (formattedHistory.length > 0 && formattedHistory[0].role !== "user") {
        formattedHistory.shift();
      }

      chatSession = ai.chats.create({
        model: aiModel,
        config: {
          temperature: aiTemperature,
          maxOutputTokens: aiMaxTokens,
          systemInstruction: getSystemInstruction(mood, traits.speed, traits.pitch, traits.accent, userName, targetLanguage),
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              text: {
                type: "STRING",
                description: "The verbal response you will say to the user, in character."
              },
              emotion: {
                type: "STRING",
                description: "Your current emotional state to display on your avatar.",
                enum: ["neutral", "happy", "sad", "angry", "surprised", "sassy"]
              }
            },
            required: ["text", "emotion"]
          }
        },
        history: formattedHistory,
      });
    }

    let promptToSend = prompt;
    if (pdfContexts && pdfContexts.length > 0) {
      const pdfInstruction = `\n\nCRITICAL INSTRUCTION - Use the following extracted document text as context to answer the user's question. If the user's question is related to the document(s), prioritize them as the source of truth. 
      IMPORTANT LANGUAGE RULE: You must ABSOLUTELY respond in the exact language the user requested (${targetLanguage !== 'auto' ? targetLanguage : "match the user's spoken language"}). If the PDF is in a different language (like Kannada), you must correctly understand the Kannada text and answer the user question accurately in the desired language without hallucinating. Do NOT answer incorrectly or give wrong facts from the PDF.\n\nDOCUMENT TEXT:\n`;
      
      const pdfText = pdfContexts.map(pdf => `--- ${pdf.name} ---\n${pdf.data}\n`).join('\n');
      
      promptToSend = prompt + pdfInstruction + pdfText;
    }
    const response = await chatSession.sendMessage({ message: promptToSend });
    if (response.text) {
      const data = JSON.parse(response.text);
      return { 
        text: data.text || "Ugh, fine. I have nothing to say.",
        emotion: data.emotion || "sassy"
      };
    }
    return { text: "Ugh, fine. I have nothing to say.", emotion: "neutral" };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { text: "Uff, mera dimaag kharab ho gaya hai. Try again later.", emotion: "sad" };
  }
}

export async function getSwaraAudio(text: string, voiceName: string = "Kore"): Promise<string | null> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName },
          },
        },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
}

export async function generateSwaraImage(prompt: string, aiModel: string = "imagen-3.0-generate-001"): Promise<string | null> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // Fallback for invalid model names
    const validModel = aiModel.includes("imagen") ? aiModel : "imagen-3.0-generate-001";
    
    if (validModel.includes("imagen")) {
      try {
        const response = await ai.models.generateImages({
          model: validModel,
          prompt: prompt,
          config: {
            numberOfImages: 1,
            aspectRatio: "1:1",
          }
        });
        const imageBytes = response.generatedImages?.[0]?.image?.imageBytes;
        if (imageBytes) {
          return `data:image/jpeg;base64,${imageBytes}`;
        }
      } catch (err: any) {
        console.error("Gemini Image API failed, falling back to Pollinations.ai:", err);
        // Fallback to pollinations.ai if Gemini image generation fails (due to scopes/quota)
        const encodedPrompt = encodeURIComponent(prompt);
        return `https://image.pollinations.ai/prompt/${encodedPrompt}?nologo=true&seed=${Math.random()}`;
      }
    } else {
      const response = await ai.models.generateContent({
        model: aiModel,
        contents: {
          parts: [
            { text: prompt },
          ],
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType || 'image/jpeg'};base64,${part.inlineData.data}`;
        }
      }
    }

    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
}

async function getThirdPartyResponse(
  prompt: string, 
  history: { sender: "user" | "swara", text: string }[] = [], 
  mood: string = "sassy",
  traits: { speed: number, pitch: number, accent: string } = { speed: 1, pitch: 0, accent: "Neutral Indian" },
  userName: string = "",
  aiModel: string = "",
  aiTemperature: number = 0.7,
  aiMaxTokens: number = 800,
  targetLanguage: string = "auto",
  pdfContexts: {name: string, data: string, mimeType: string}[] = []
): Promise<{ text: string, emotion: string }> {
  let endpoint = "";
  let apiKey = "";
  let actualModel = aiModel;

  if (aiModel.startsWith("groq:")) {
    endpoint = "https://api.groq.com/openai/v1/chat/completions";
    apiKey = (import.meta as any).env.VITE_GROQ_API_KEY;
    actualModel = aiModel.replace("groq:", "");
  } else if (aiModel.startsWith("openrouter:")) {
    endpoint = "https://openrouter.ai/api/v1/chat/completions";
    apiKey = (import.meta as any).env.VITE_OPENROUTER_API_KEY;
    actualModel = aiModel.replace("openrouter:", "");
  } else if (aiModel.startsWith("github:")) {
    endpoint = "https://models.inference.ai.azure.com/chat/completions";
    apiKey = (import.meta as any).env.VITE_GITHUB_TOKEN;
    actualModel = aiModel.replace("github:", "");
  }

  if (!apiKey) {
    return { text: `Please add your ${aiModel.split(':')[0].toUpperCase()} API key in the Environment Variables or .env file to use this model.`, emotion: "sad" };
  }

  const systemInstruction = getSystemInstruction(mood, traits.speed, traits.pitch, traits.accent, userName, targetLanguage) + 
    `\n\nOUTPUT FORMAT REQUIRED: You MUST respond ONLY with a valid JSON object matching exactly this schema: { "text": "your verbal response here... MAXIMUM 1-2 brief sentences.", "emotion": "one of: neutral, happy, sad, angry, surprised, sassy" }. Do not add any backticks, markdown formatting, or plain text outside the JSON object. Output ONLY JSON.`;
  
  const messages: any[] = [
    { role: "system", content: systemInstruction }
  ];

  for (const msg of history.slice(-30)) {
    messages.push({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text
    });
  }
  
  let promptToSend = prompt;
  if (pdfContexts && pdfContexts.length > 0) {
    const pdfInstruction = `\n\nCRITICAL INSTRUCTION - Use the following extracted document text as context to answer the user's question. If the user's question is related to the document(s), prioritize them as the source of truth. 
      IMPORTANT LANGUAGE RULE: You must ABSOLUTELY respond in the exact language the user requested (${targetLanguage !== 'auto' ? targetLanguage : "match the user's spoken language"}). If the PDF is in a different language (like Kannada), you must correctly understand the Kannada text and answer the user question accurately in the desired language without hallucinating. Do NOT answer incorrectly or give wrong facts from the PDF.\n\nDOCUMENT TEXT:\n`;
    
    const pdfText = pdfContexts.map(pdf => `--- ${pdf.name} ---\n${pdf.data}\n`).join('\n');
    
    promptToSend = prompt + pdfInstruction + pdfText;
  }
  
  messages.push({ role: "user", content: promptToSend });

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        ...(aiModel.startsWith("openrouter:") ? {
          "HTTP-Referer": window.location.href,
          "X-Title": "Swara App"
        } : {})
      },
      body: JSON.stringify({
        model: actualModel,
        messages: messages,
        temperature: aiTemperature,
        max_tokens: aiMaxTokens,
        ...(aiModel.startsWith("groq:") ? { response_format: { type: "json_object" } } : {})
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Third party API error:", errText);
      return { text: `Sorry, there was an error communicating with ${aiModel.split(':')[0].toUpperCase()}.`, emotion: "sad" };
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || "";
    
    try {
      // Clean up markdown serialization if present
      let jsonStr = content.trim();
      const match = jsonStr.match(/```(?:json)?\n([\s\S]*?)\n```/);
      if (match) {
        jsonStr = match[1].trim();
      }
      
      const parsed = JSON.parse(jsonStr);
      return { 
        text: parsed.text || "Ugh, fine. I have nothing to say.",
        emotion: parsed.emotion || "sassy"
      };
    } catch (e) {
      console.warn("Failed to parse JSON from third-party model:", content);
      return { text: content.replace(/["'{}]/g, '').slice(0, 150), emotion: "neutral" };
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { text: `Network error when trying to reach ${aiModel.split(':')[0].toUpperCase()}.`, emotion: "sad" };
  }
}

