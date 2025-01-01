import { NextFunction, Request, Response } from "express";
import { feedbackFormSchema, FeedbackTypes } from "../types";
import { getAIFeedback } from "../services/feedback.service";

export async function getFeedback(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const feedback: FeedbackTypes = req.body;

    // validate incoming feedback request
    const isValidBody = feedbackFormSchema.safeParse(feedback);
    if (!isValidBody.success) {
      res.status(400).json({
        success: false,
        message: "Provided feedback data is invalid.",
        error: isValidBody.error,
      });
      return;
    }
    const aiFeedback = await getAIFeedback(feedback);
    res.status(200).json({
      success: true,
      data: aiFeedback
    })
  } catch (error) {
    next(error);
  }
}
