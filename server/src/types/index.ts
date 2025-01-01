import { z } from "zod";

export const feedbackSchema = z.object({
  type: z.enum(["bug", "idea", "other"]),
  subject: z.string().min(10, {
    message: "Subject must be at least 10 characters.",
  }),
  feedback: z
    .string()
    .min(20, {
      message: "Feedback must be at least 20 characters.",
    })
    .max(500, {
      message: "Feedback must not be longer than 500 characters.",
    }),
});

export type FeedbackTypes = z.infer<typeof feedbackSchema>;
