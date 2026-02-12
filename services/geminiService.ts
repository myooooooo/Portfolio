import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

export const sendMessageToGemini = async (history: string[], message: string): Promise<string> => {
  // Always initialize right before use to ensure latest API key context from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Using gemini-3-flash-preview as recommended for basic text and chat tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        // Map history strings back to parts for multi-turn conversation
        ...history.map((h) => {
          const isUser = h.startsWith('Utilisateur:');
          const prefix = isUser ? 'Utilisateur:' : 'Assistant:';
          const text = h.substring(prefix.length).trim();
          return {
            role: isUser ? 'user' : 'model',
            parts: [{ text }]
          };
        }),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        // System instructions should be provided in the config
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9,
        topP: 0.95,
        topK: 40,
      }
    });

    // Accessing text output directly via the .text property as per SDK documentation
    return response.text || "Désolé chouchou, mon cerveau rose a buggé... ✨";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    if (error instanceof Error && error.message.includes("Requested entity was not found")) {
        return "Erreur de configuration API : Modèle ou clé introuvable. ✨";
    }
    return "Une petite erreur magique est survenue... 🪄";
  }
};
