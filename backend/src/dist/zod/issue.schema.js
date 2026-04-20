import { z } from "zod";
export const createIssueSchema = z.object({
    title: z.string().max(300),
    description: z.string(),
});
export const updateIssueSchema = z
    .object({
    title: z.string().max(300).optional(),
    description: z.string().optional(),
})
    .refine((data) => Object.values(data).some((v) => v !== undefined), {
    error: "alteast one field is required to update",
});
export const updateIssueStatusSchema = z.object({
    status: z.union([z.literal("open"), z.literal("in_progress"), z.literal("closed")]),
});
export const issueIdSchema = z.object({
    issueId: z.string(),
});
