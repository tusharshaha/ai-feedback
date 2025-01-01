import 'dotenv/config'
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string(),
  DB_URI: z.string().url(),
});

export const { PORT, DB_URI } = envSchema.parse(process.env);