import { Router } from "express";
import { asyncHandler } from "../utils/asyncWrapper.js";
import { auth } from "../middlewares/auth.js";
import { validator } from "../middlewares/zod-validator.js";
const userRouter = Router();
import { createUser, loginUser, logoutUser } from "../controllers/user.controller.js";
import { signinSchema, signupSchema } from "../zod/user.schema.js";

userRouter.post("/signup", validator(signupSchema), asyncHandler(createUser));
userRouter.post("/signin", validator(signinSchema), asyncHandler(loginUser));

userRouter.delete("/signout", auth, asyncHandler(logoutUser));

export default userRouter;
