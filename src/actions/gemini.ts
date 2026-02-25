"use server"

import { GoogleGenAI } from "@google/genai";

// function searchCourses will initialize it internally checking for key presence

export async function searchCourses(query: string) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("GEMINI_API_KEY is not set");
        return [];
    }

    // Initialize the new GenAI client with strict type safety
    const genAI = new GoogleGenAI({ apiKey });

    try {
        // We use gemini-1.5-flash to ensure stability
        const modelId = "gemini-2.5-flash";

        const prompt = `
      You are an expert overseas education consultant AI for 'Uniguru'.
      User Query: "${query}"

      Your goal is to recommend the best 3-6 university courses based on the user's background, budget, and preferences.
      Focus on popular study destinations like Canada, UK, Australia, New Zealand, Ireland, USA, Germany, France, etc.

      Return strictly a VALID JSON array of objects. Do not include markdown code blocks (like \`\`\`json).
      
      Structure for each object:
      {
        "university": "University Name",
        "country": "Country Name",
        "course": "Full Degree Name (e.g. MSc Data Science)",
        "duration": "Duration (e.g. 1 Year, 2 Years)",
        "fees": "Approx Tuition Fee per year (with Currency) (e.g. CAD 25,000)",
        "match": "Match Percentage (e.g. 98%)",
        "description": "2-sentence explanation of why this fits the user.",
        "link": "University Homepage URL (e.g. https://www.utoronto.ca). Do NOT guess specific course paths."
      }

      Provide accurate real-world data. For the 'link', strictly provide the main university website to avoid 404 errors.
    `;

        const result = await genAI.models.generateContent({
            model: modelId,
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: prompt,
                        },
                    ],
                },
            ],
            config: {
                responseMimeType: "application/json",
            },
        });

        // The new SDK response structure might differ slightly, but typically:
        // result.response.candidates[0].content.parts[0].text
        // Or it might simplify text access.
        // Based on typings, result.text() is often available or we access data directly.
        // Let's assume standard object access if .text() helper isn't there, but usually it is.
        // Actually, for the new SDK, it often returns the response object deeply.
        // Let's check if we can get text directly.

        // Safely extract text (New SDK returns candidates directly on the result object)
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            console.error("No text generated", result);
            return [];
        }

        // Clean up potential markdown formatting just in case
        let cleanedText = text.trim();
        if (cleanedText.startsWith("```json")) {
            cleanedText = cleanedText.replace(/^```json/, "").replace(/```$/, "");
        } else if (cleanedText.startsWith("```")) {
            cleanedText = cleanedText.replace(/^```/, "").replace(/```$/, "");
        }

        try {
            const data = JSON.parse(cleanedText);
            return Array.isArray(data) ? data : [];
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError, "Raw Text:", text);
            return [];
        }

    } catch (error) {
        console.error("Gemini API Error:", error);
        return [];
    }
}
