import { z } from "zod";

export const createProjectSchema = z.object({
  projectName: z.string().max(300),
});

export const renameProjectSchema = z.object({
  projectName: z.string().max(300),
});

export const projectIdSchema = z.object({
  projectId: z.string(),
});

export type createProjectBody = z.infer<typeof createProjectSchema>;

export type renameProjectBody = z.infer<typeof renameProjectSchema>;
