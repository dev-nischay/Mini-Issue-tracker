import type { Issue } from "../types/db.types.js";
import { httpStatus } from "../types/enums.js";
import { AppError } from "../utils/AppError.js";
import { issueRepo } from "../repositories/issue.repo.js";
import { projectRepo } from "../repositories/project.repo.js";

export const createIssueService = async (issue: Issue) => {
  const result = await issueRepo.createIssue(issue);

  return {
    message: "Issue raised",
    result,
  };
};

export const updateIssueStatusService = async (issueId: number, status: "open" | "in_progress" | "closed") => {
  const issue = await issueRepo.findIssue(issueId);

  if (!issue) {
    throw new AppError("issue not found", httpStatus.BadRequest);
  }

  const result = await issueRepo.updateIssueStatus(issueId, status);

  return {
    message: `issue status has been changed to ${result.status}`,
    result,
  };
};

export const getAllIssuesService = async (projectId: number) => {
  const result = await projectRepo.getIssueByProject(projectId);

  return {
    message: `all issues of project ${result?.project_name}}`,
    issues: result?.issues || [],
  };
};
