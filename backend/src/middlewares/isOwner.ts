import { AppError } from "../utils/AppError.js";
import type { Request, Response, NextFunction } from "express";
import { projectRepo } from "../repositories/project.repo.js";
import { httpStatus } from "../types/enums.js";
import type { createIssueBody } from "../zod/issue.schema.js";

export const isProjectOwner = async (req: Request, res: Response, next: NextFunction) => {
  const { projectId } = req.validatedParams as unknown as { projectId: number };
  const userid = req.userid;

  const project = await projectRepo.findProject(Number(projectId));

  if (!project) {
    return next(new AppError("project not found", httpStatus.BadRequest));
  }

  if (project.user_id !== userid) {
    return next(new AppError("only project admin can raise issues", httpStatus.Forbidden));
  }

  next();
};
