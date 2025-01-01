import { NextFunction, Request, Response } from "express";
import { feedbackSchema, FeedbackTypes } from "../types";
import { getAIFeedback } from "../services/feedback.service";
import Feedback from "../../model/feedback.model";

export async function getAllFeedback(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { limit, skip } = req.query;
    const data = await Feedback.find({})
      .skip(parseInt(skip as string))
      .limit(parseInt(limit as string));
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
}

export async function getFeedback(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const feedback: FeedbackTypes = req.body;

    // validate incoming feedback request
    const isValidBody = feedbackSchema.safeParse(feedback);
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
        ...feedback,
        feedback: aiFeedback,
      };
      await Feedback.create(data);
      res.status(200).json({
        success: true,
        message: "Feedback submitted successfully",
        data,
      });
    } else {
      await Feedback.create(feedback);
      res.status(200).json({
        success: true,
        message: "Feedback submitted successfully",
      });
    }
  } catch (error) {
    next(error);
  }
}
