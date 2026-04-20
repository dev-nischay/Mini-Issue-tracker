import { Router } from "express";
import { validator } from "../middlewares/zod-validator.js";
import { createProjectSchema, projectIdSchema, renameProjectSchema } from "../zod/project.schema.js";
import { auth } from "../middlewares/auth.js";
import { asyncHandler } from "../utils/asyncWrapper.js";
import { createProject, getAllProjects, renameProject } from "../controllers/project.controller.js";
import issueRouter from "./issue.routes.js";
const projectRouter = Router();

projectRouter.use(auth);

projectRouter.get("/", asyncHandler(getAllProjects));
projectRouter.post("/", validator(createProjectSchema), asyncHandler(createProject));
projectRouter.put(
  "/:projectId",
  validator(renameProjectSchema),
  validator(projectIdSchema, "params"),
  asyncHandler(renameProject),
);

projectRouter.use("/:projectId/issues/", validator(projectIdSchema, "params"), issueRouter);

export default projectRouter;
