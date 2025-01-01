import { NextFunction, Request, Response } from "express";
import { feedbackFormSchema, FeedbackTypes } from "../types";
import { getAIFeedback } from "../services/feedback.service";
import Feedback from "../../model/feedback.model";

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

    if (feedback.type === "bug") {
      const aiFeedback = await getAIFeedback(feedback);
      const data = {
        type: feedback.type,
        subject: feedback.subject,
        solution: aiFeedback,
      }
      await Feedback.create(data);
      res.status(200).json({
        success: true,
        message: "Feedback submitted successfully",
        data,
      });
    }else {
      await Feedback.create(feedback);
      res.status(200).json({
        success: true,
        message: "Feedback submitted successfully"
      })
    }
  } catch (error) {
    next(error);
  }
}
