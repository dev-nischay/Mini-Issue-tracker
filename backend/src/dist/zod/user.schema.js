import { z } from "zod";
export const signupSchema = z.object({
    username: z.string("username is required").max(300, "username cannot be more than 300 characters"),
    email: z.email("email is required"),
    password: z.string("password is required").max(16, "password cannot be more than 16 characters"),
});
export const signinSchema = z.object({
    email: z.email("email is required"),
    password: z.string("password is required").max(16, "password cannot be more than 16 characters"),
});
