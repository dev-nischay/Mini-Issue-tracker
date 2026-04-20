import { commentRepo } from "../repositories/comment.repo.js";
import { issueRepo } from "../repositories/issue.repo.js";

import type { Comment } from "../types/db.types.js";
import { httpStatus } from "../types/enums.js";
import { AppError } from "../utils/AppError.js";

export const createCommentService = async (comment: Comment) => {
  const { issue_id, ...rest } = comment;

  const issue = await issueRepo.findIssue(Number(issue_id));

  if (!issue) {
    throw new AppError("issue not found", httpStatus.BadRequest);
  }

  if (issue.status === "closed") {
    throw new AppError("issue must be opened to comment", httpStatus.Conflict);
  }

  await commentRepo.createComment({ ...rest, issue_id });

  return {
    message: `comment added for issue  ${issue.title} `,
  };
};

export const getAllCommentService = async (issueId: number) => {
  const issue = await issueRepo.findIssue(Number(issueId));

  if (!issue) {
    throw new AppError("issue not found", httpStatus.BadRequest);
  }

  const issues = await issueRepo.getCommentsByIssue(Number(issueId));

  return {
    message: `all comments of issue ${issue.title} `,
    issues: issues || [],
  };
};
