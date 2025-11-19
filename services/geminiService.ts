import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize API client
// Note: In a real production app, you would handle the key more securely or via backend proxy.
// For this demo, we assume process.env.API_KEY is set.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (history: string[], message: string): Promise<string> => {
  if (!apiKey) {
    return "Erreur: Clé API non configurée.";
  }

  try {
    // We construct a prompt that includes context
    const model = 'gemini-2.5-flash';
    
    // Simple chat history formatting
    const chatContext = history.join('\n');
    const fullPrompt = `
      ${SYSTEM_INSTRUCTION}
      
      Historique de la conversation:
      ${chatContext}
      
      Utilisateur: ${message}
      Assistant:
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant.";
  }
};