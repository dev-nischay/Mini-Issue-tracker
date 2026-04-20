import { createIssueService, getAllIssuesService, updateIssueStatusService } from "../services/issue.service.js";
export const createIssue = async (req, res, next) => {
    const issue = req.validatedBody;
    const projectId = req.validatedParams.projectId;
    const { result, message } = await createIssueService({ ...issue, project_id: Number(projectId) });
    return res.json({
        success: true,
        message: message,
        data: result,
    });
};
export const updateIssueStatus = async (req, res, next) => {
    const { status } = req.validatedBody;
    const issueId = req.validatedParams.issueId;
    const result = await updateIssueStatusService(Number(issueId), status);
    return res.json({
        success: true,
        message: result.message,
        data: result.result,
    });
};
export const getAllIssues = async (req, res, next) => {
    const projectId = req.validatedParams.projectId;
    const result = await getAllIssuesService(Number(projectId));
    return res.json({
        success: true,
        message: result.message,
        data: result.issues,
    });
};
