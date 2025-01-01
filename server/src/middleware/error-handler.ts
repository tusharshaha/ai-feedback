import { NextFunction, Request, Response } from "express";

export default function handleError(
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  let validationErrors = "";
  if (error.name === "ValidationError") {
    for (const field in error.errors) {
      if (error.errors.hasOwnProperty(field)) {
        validationErrors = error.errors[field].message;
      }
    }
  }
  if (error.message.includes("E11000 duplicate")) {
    validationErrors = "Email already exists please login.";
  }
  res.status(500).json({
    success: false,
    message: validationErrors || error.message,
  });
}
