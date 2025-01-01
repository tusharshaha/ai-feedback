import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.string(),
  DB_URI: z.string().url(),
  OPENAI_API_KEY: z.string(),
  FRONTEND_URL: z.string().url(),
});

export const { PORT, DB_URI, OPENAI_API_KEY, FRONTEND_URL } = envSchema.parse(
  process.env
);
