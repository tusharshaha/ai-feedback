import openai from "../src/configs/openai.config";
import { FeedbackTypes } from "../src/types";

export default async function generateFeedbackSoution({
  type,
  subject,
  feedback,
}: FeedbackTypes) {
  try {
    const prompt = `Provide a solution for the following feedback. Type: ${type}. Subject: ${subject}. Feedback: ${feedback}. Keep the response concise and clear. Ensure each sentence is no longer than 100 characters and avoid using quotation marks within sentences.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "assistant",
          content: prompt,
        },
      ],
    });
    return completion.choices[0]?.message.content;
  } catch (error) {
    console.error("Error generating article:", error);
    throw error;
  }
}
