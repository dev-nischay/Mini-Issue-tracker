import { createProjectService, getAllProjectsService, renameProjectService } from "../services/project.service.js";
export const createProject = async (req, res, next) => {
    const { projectName } = req.validatedBody;
    const user_id = req.userid;
    const project = await createProjectService({ project_name: projectName, user_id });
    return res.json({ success: true, data: project.result, message: project.message });
};
export const renameProject = async (req, res, next) => {
    const { projectName } = req.validatedBody;
    const { projectId } = req.validatedParams;
    const project = await renameProjectService(projectName, Number(projectId));
    return res.json({ success: true, data: project.result, message: project.message });
};
export const getAllProjects = async (req, res, next) => {
    const userid = req.userid;
    const allProjects = await getAllProjectsService(userid);
    return res.json({ success: true, data: allProjects.result, message: allProjects.message });
};
