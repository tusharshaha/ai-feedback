import { z } from 'zod';

export const feedbackFormSchema = z.object({
  type: z.enum(['bug', 'idea', 'other']),
  subject: z
    .string()
    .min(10, {
      message: 'Subject must be at least 10 characters.'
    })
    .max(200, {
      message: 'Subject must not be longer than 200 characters.'
    }),
  feedback: z
    .string()
    .min(20, {
      message: 'Feedback must be at least 20 characters.'
    })
    .max(1000, {
      message: 'Feedback must not be longer than 1000 characters.'
    })
});

export type FormType = z.infer<typeof feedbackFormSchema>;