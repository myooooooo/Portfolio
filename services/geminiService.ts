import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_INSTRUCTION } from '../constants';

export const sendMessageToGemini = async (history: {role: string, parts: any[]}[], message: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
  if (!apiKey) {
    console.error("API key is missing");
    return "Configuration manquante... 🔑 (Vérifiez la clé API)";
  }

  const ai = new GoogleGenerativeAI(apiKey);
  
  try {
    const model = ai.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: 0.8,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text() || "Désolée, mon cerveau rose a buggé... ✨";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Une erreur magique est survenue... 🪄 (Vérifiez la clé API)";
  }
};
