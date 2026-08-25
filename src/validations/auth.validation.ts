import { z } from "zod";

export const signupSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(30, "First name must be at most 30 characters"),

  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(30, "Last name must be at most 30 characters"),

  email: z.email("Please enter a valid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(15, "Password must be at most 15 characters"),
});

export const signinSchema = z.object({
  email: z.email("Please enter a valid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(15, "Password must be at most 15 characters"),
});

export type SignupSchemaType = z.infer<typeof signupSchema>;

export type SigninSchemaType = z.infer<typeof signinSchema>;
