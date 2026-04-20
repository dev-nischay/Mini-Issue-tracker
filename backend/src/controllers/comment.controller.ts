import type { Request, Response, NextFunction } from "express";
import type { commentBody } from "../zod/comment.schema.js";
import { createCommentService, getAllCommentService } from "../services/comment.service.js";

export const createComment = async (req: Request, res: Response, next: NextFunction) => {
  const { comment } = req.validatedBody as commentBody;
  const userId = req.userid;
  const issueId = req.validatedParams.issueId;

  const result = await createCommentService({ comment, issue_id: Number(issueId), user_id: userId });

  return res.json({
    message: result.message,
  });
};

export const getAllComments = async (req: Request, res: Response, next: NextFunction) => {
  const issueId = req.validatedParams.issueId;
  const result = await getAllCommentService(issueId);

  return {
    message: result.message,
    issues: result.issues,
  };
};
