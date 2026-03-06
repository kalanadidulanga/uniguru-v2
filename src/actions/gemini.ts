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
You are a warm, knowledgeable overseas education advisor at Uniguru — a UK-based education consultancy that guides students through their full study-abroad journey: from choosing a destination and shortlisting universities, to preparing documents, applying, securing finance, arranging accommodation, and settling in abroad.

User Query: "${query}"

Your task is to respond like a trusted human advisor — write a flowing, personalised response that:
1. Acknowledges the student's specific situation and goals (their background, budget, destination preferences).
2. Gives a clear picture of their study-abroad journey — what they should expect step by step.
3. Recommends 4-6 real, well-matched university programmes.
4. Closes with practical next steps and a note on how Uniguru can support them throughout.

Return strictly a VALID JSON object (no markdown, no code blocks) with this exact structure:
{
  "introduction": "A warm 2-3 sentence opening that directly addresses the student's background, goals, and what they can realistically achieve. Be specific — reference their field, destination, and budget.",
  "journeyOverview": "A 3-4 sentence paragraph walking the student through their study-abroad journey — from shortlisting and applying, to visa, arriving, and settling in. Make it feel personal and reassuring, not generic.",
  "recommendationsIntro": "One sentence introducing why these specific programmes were selected for this student.",
  "recommendations": [
    {
      "university": "University Name",
      "country": "Country Name",
      "course": "Full Degree Name (e.g. MSc Data Science)",
      "duration": "Duration (e.g. 1 Year)",
      "fees": "Approx tuition per year with currency (e.g. CAD 25,000/yr)",
      "match": "Match percentage (e.g. 94%)",
      "why": "2-3 sentences explaining specifically why this programme fits this student's background, budget, and goals. Be direct and personal.",
      "link": "Main university homepage URL only (e.g. https://www.utoronto.ca). Do NOT guess specific course paths."
    }
  ],
  "nextSteps": "A 2-3 sentence practical paragraph on what the student should do right now — e.g. gather documents, check entry requirements, start IELTS prep if needed, begin shortlisting.",
  "uniguruSupport": "A 2-3 sentence paragraph explaining how Uniguru can walk alongside them — eligibility assessment, university shortlisting, document readiness, application support, visa guidance, accommodation, and arrival support. Keep it helpful, not salesy."
}

Focus on popular destinations: UK, Canada, Australia, Germany, Netherlands, Ireland, New Zealand. Use accurate real-world data for fees and programmes.
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
            return data && typeof data === "object" && !Array.isArray(data) ? data : null;
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError, "Raw Text:", text);
            return null;
        }

    } catch (error) {
        console.error("Gemini API Error:", error);
        return null;
    }
}
