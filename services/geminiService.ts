import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_INSTRUCTION } from '../constants';

export const sendMessageToGemini = async (history: {role: string, parts: any[]}[], message: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });

    return response.text || "Désolée, mon cerveau rose a buggé... ✨";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Une erreur magique est survenue... 🪄 (Vérifiez la clé API)";
  }
};
