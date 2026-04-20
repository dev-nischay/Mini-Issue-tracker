import { Router } from "express";
import { validator } from "../middlewares/zod-validator.js";
import { createCommentSchema } from "../zod/comment.schema.js";
import { asyncHandler } from "../utils/asyncWrapper.js";
import { createComment, getAllComments } from "../controllers/comment.controller.js";
const commentRouter = Router();
commentRouter.post("/", validator(createCommentSchema), asyncHandler(createComment));
commentRouter.get("/", asyncHandler(getAllComments));
export default commentRouter;
