import { projectRepo } from "../repositories/project.repo.js";
import { httpStatus } from "../types/enums.js";
import { AppError } from "../utils/AppError.js";
export const createProjectService = async (project) => {
    const result = await projectRepo.createProject(project);
    return {
        message: `project with name ${result.project_name} has been created`,
        result,
    };
};
export const renameProjectService = async (projectName, projectId) => {
    const projectExists = await projectRepo.findProject(projectId);
    if (!projectExists) {
        throw new AppError("project not found", httpStatus.BadRequest);
    }
    const result = await projectRepo.renameProject(projectName, projectId);
    return {
        message: `project renamed to ${result.project_name}`,
        result,
    };
};
export const getAllProjectsService = async (userid) => {
    const result = await projectRepo.getProjectsByuser(userid);
    return {
        message: `projects created by user with id ${userid}`,
        result,
    };
};
