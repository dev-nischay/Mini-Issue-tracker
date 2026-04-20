import type { Request, Response, NextFunction } from "express";
import type { createIssueBody, updateStatusBody } from "../zod/issue.schema.js";
import type { ApiResponse } from "../types/constants.types.js";
import type { Issue } from "../types/db.types.js";
import { createIssueService, getAllIssuesService, updateIssueStatusService } from "../services/issue.service.js";

export const createIssue = async (req: Request, res: Response<ApiResponse<Issue>>, next: NextFunction) => {
  const issue = req.validatedBody as createIssueBody;
  const projectId = req.validatedParams.projectId;
  const { result, message } = await createIssueService({ ...issue, project_id: Number(projectId) });

  return res.json({
    success: true,
    message: message,
    data: result,
  });
};

export const updateIssueStatus = async (req: Request, res: Response<ApiResponse<Issue>>, next: NextFunction) => {
  const { status } = req.validatedBody as updateStatusBody;
  const issueId = req.validatedParams.issueId;
  const result = await updateIssueStatusService(Number(issueId), status);

  return res.json({
    success: true,
    message: result.message,
    data: result.result,
  });
};

export const getAllIssues = async (req: Request, res: Response<ApiResponse<Issue[]>>, next: NextFunction) => {
  const projectId = req.validatedParams.projectId;
  const result = await getAllIssuesService(Number(projectId));

  return res.json({
    success: true,
    message: result.message,
    data: result.issues,
  });
};
