import { Router } from "express";
import { validator } from "../middlewares/zod-validator.js";
import { createProjectSchema, renameProjectSchema } from "../zod/project.schema.js";
import { auth } from "../middlewares/auth.js";
import { asyncHandler } from "../utils/asyncWrapper.js";
import { createProject, getAllProjects, renameProject } from "../controllers/project.controller.js";
import issueRouter from "./issue.routes.js";
const projectRouter = Router();

projectRouter.use(auth);

projectRouter.get("/", asyncHandler(getAllProjects));
projectRouter.post("/", validator(createProjectSchema), asyncHandler(createProject));
projectRouter.put("/", validator(renameProjectSchema), asyncHandler(renameProject));

projectRouter.use("/issues/", issueRouter);

export default projectRouter;
