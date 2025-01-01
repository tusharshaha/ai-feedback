import { NextFunction, Request, Response } from "express";
import { feedbackFormSchema } from "../types";

type Feedback = {
  type: string;
  subject: string;
  feedback: string;
};

export async function getFeedback(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const feedback: Feedback = req.body;

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
    console.log(feedback)
    res.status(200).json(feedback)
  } catch (error) {
    next(error);
  }
}
