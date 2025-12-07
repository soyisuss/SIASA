import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the Google GenAI client
// Using process.env.API_KEY as strictly required by the instructions
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chatSession: Chat | null = null;

/**
 * Initializes or retrieves the existing chat session.
 * Uses gemini-2.5-flash for fast, responsive chat interactions.
 */
const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are a helpful customer support assistant for SIASA (Tecnología de Seguridad), a wholesale distributor of security technology in Mexico. 
        
        Company Info:
        - Contact: 800.227.4272 / 55.5264.2272
        - Email: marketing@siasa.com
        - Focus: CCTV, Biometrics, Access Control, Time & Attendance, Turnstiles.
        
        Tone: Professional, helpful, and concise. 
        Language: Spanish (as the website is in Spanish).
        
        If asked about specific products, refer generally to security cameras, video doorbells (Remo+), and LG security solutions as seen on the homepage.`,
      },
    });
  }
  return chatSession;
};

/**
 * Sends a message to the Gemini model and returns the response text.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "Lo siento, no pude procesar tu respuesta en este momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocurrió un error al conectar con el asistente. Por favor intente más tarde.";
  }
};