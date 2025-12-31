import { GoogleGenAI } from "@google/genai";

// Initialize the client safely
// The build environment should inject process.env.API_KEY.
// We add a fallback to avoid runtime crashes if process is undefined in the browser without polyfills.
const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';
const ai = new GoogleGenAI({ apiKey: apiKey });

/**
 * Generates an image using the Gemini 2.5 Flash Image model (Nano Banana).
 * @param prompt The text description of the image to generate.
 * @returns A base64 data URL of the generated image, or null if failed.
 */
export async function generateImage(prompt: string): Promise<string | null> {
  if (!apiKey) {
    console.warn("API Key is missing. AI generation will be skipped.");
    return null;
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
    });

    // Extract the image from the response parts
    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("AI Generation Error:", error);
    return null;
  }
}