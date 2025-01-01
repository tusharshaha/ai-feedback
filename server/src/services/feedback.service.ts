import generateFeedbackSoution from "../utils/generateFeedback"
import {  FeedbackTypes } from "../types"

export async function getAIFeedback(feedback: FeedbackTypes) {
  const generatedFeedback = await generateFeedbackSoution(feedback);
  return generatedFeedback;
}
