import openai from "../src/configs/openai.config";
import { FeedbackTypes } from "../src/types";

export default async function generateFeedbackSoution({
  type,
  subject,
  feedback,
}: FeedbackTypes) {
  try {
    const prompt = `Provide a solution for the following feedback. Type: ${type}. Subject: ${subject}. Feedback: ${feedback}. Keep the response concise and clear. Ensure each sentence is no longer than 100 characters and avoid using quotation marks within sentences. dont use any text formatting.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a highly skilled software assistant specializing in analyzing bug reports and providing effective, concise solutions.",
        },
        { role: "user", content: prompt },
      ],
    });
    return completion.choices[0]?.message.content;
  } catch (error) {
    console.error("Error generating article:", error);
    throw error;
  }
}
