import { z } from "zod";

export const createCommentSchema = z.object({
  comment: z.string("comment is requried").max(500),
});

export type CommentBody = z.infer<typeof createCommentSchema>;
