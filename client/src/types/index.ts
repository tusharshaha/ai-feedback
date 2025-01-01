import { z } from 'zod';

export const feedbackFormSchema = z.object({
  type: z.enum(['bug', 'idea', 'other']),
  subject: z.string(),
  feedback: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.'
    })
    .max(500, {
      message: 'Bio must not be longer than 500 characters.'
    })
});
