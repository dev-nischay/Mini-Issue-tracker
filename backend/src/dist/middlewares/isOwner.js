import { AppError } from "../utils/AppError.js";
import { projectRepo } from "../repositories/project.repo.js";
import { httpStatus } from "../types/enums.js";
export const isProjectOwner = async (req, res, next) => {
    const { projectId } = req.validatedParams;
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
