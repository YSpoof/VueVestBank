import { z } from "zod";
import { messages } from "./messages";

export const loginValidator = z.object({
  email: z.string().email(messages.invalidEmail),
  password: z
    .string()
    .min(6, messages.passwordTooShort)
    .max(100, messages.passwordTooLong),
});

export const registerValidator = z.object({
  name: z.string().min(3, messages.nameTooShort).max(50, messages.nameTooLong),
  email: z.string().email(messages.invalidEmail),
  password: z
    .string()
    .min(3, messages.passwordTooShort)
    .max(100, messages.passwordTooLong),
});
