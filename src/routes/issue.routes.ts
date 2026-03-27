import { Router } from "express";
import { validator } from "../middlewares/zod-validator.js";
import { createIssueSchema, issueIdSchema, updateIssueStatusSchema } from "../zod/issue.schema.js";
import { asyncHandler } from "../utils/asyncWrapper.js";
import { isProjectOwner } from "../middlewares/isOwner.js";
import { createIssue, getAllIssues, updateIssueStatus } from "../controllers/issue.controller.js";
const issueRouter = Router();

issueRouter.get("/", asyncHandler(getAllIssues));
issueRouter.use(isProjectOwner);
issueRouter.post("/", validator(createIssueSchema), asyncHandler(createIssue));
issueRouter.put(
  "/:issueId",
  validator(updateIssueStatusSchema),
  validator(issueIdSchema, "params"),
  asyncHandler(updateIssueStatus),
);

export default issueRouter;
