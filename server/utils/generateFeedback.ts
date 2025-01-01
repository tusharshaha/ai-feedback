import openai from "../src/configs/openai.config";

async function generateArticle({
  type,
  feedback,
}: {
  type: string;
  feedback: string;
}) {
  try {
    const prompt = `Generate a 140 words description about : ${type} and must be maximum of 100 characters for each sentence, please don't use "" inside the sentence.`;
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
