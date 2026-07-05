import { z } from "zod";

export const emailSchema = z.string().trim().email().max(254);

export const uuidSchema = z.string().uuid();

export type Email = z.infer<typeof emailSchema>;
