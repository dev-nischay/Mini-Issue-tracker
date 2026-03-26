import type { Request, Response, NextFunction } from "express";
import type { Project } from "../types/db.types.js";
import { createProjectService, getAllProjectsService, renameProjectService } from "../services/project.service.js";
import type { createProjectBody, renameProjectBody } from "../zod/project.schema.js";
import type { ApiResponse } from "../types/constants.types.js";

export const createProject = async (req: Request, res: Response<ApiResponse<Project>>, next: NextFunction) => {
  const { projectName } = req.validatedBody as createProjectBody;
  const user_id = req.userid;
  const project = await createProjectService({ project_name: projectName, user_id });

  return res.json({ success: true, data: project.result, message: project.message });
};

export const renameProject = async (
  req: Request,
  res: Response<ApiResponse<Pick<Project, "project_name">>>,
  next: NextFunction,
) => {
  const { projectId, projectName } = req.validatedBody as renameProjectBody;

  const project = await renameProjectService(projectName, Number(projectId));

  return res.json({ success: true, data: project.result, message: project.message });
};

export const getAllProjects = async (req: Request, res: Response<ApiResponse<Project[]>>, next: NextFunction) => {
  const userid = req.userid;

  const allProjects = await getAllProjectsService(userid);

  return res.json({ success: true, data: allProjects.result, message: allProjects.message });
};
