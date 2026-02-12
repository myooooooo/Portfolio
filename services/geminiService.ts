import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_INSTRUCTION } from '../constants';

export const sendMessageToGemini = async (history: string[], message: string): Promise<string> => {
  // Initialisation avec la clé API de l'environnement
  // Note: Vercel injecte process.env.API_KEY automatiquement
  const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");

  try {
    // Utilisation du modèle stable 'gemini-1.5-flash' compatible avec ce SDK
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION
    });

    // Construction de l'historique pour le SDK
    const historyParts = history.map((h) => {
      const isUser = h.startsWith('Utilisateur:');
      const prefix = isUser ? 'Utilisateur:' : 'Assistant:';
      const text = h.substring(prefix.length).trim();
      return {
        role: isUser ? 'user' : 'model',
        parts: [{ text }]
      };
    });

    const chatSession = model.startChat({
      history: historyParts,
      generationConfig: {
        temperature: 0.9,
        topP: 0.95,
        topK: 40,
      },
    });

    const result = await chatSession.sendMessage(message);
    const responseText = result.response.text();

    return responseText || "Désolé chouchou, mon cerveau rose a buggé... ✨";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    // Gestion basique des erreurs sans types spécifiques trop stricts
    return "Une petite erreur magique est survenue... 🪄 (Vérifiez la clé API)";
  }
};