import type { Request, Response, NextFunction } from "express";
import type { signinBody, signupBody } from "../zod/user.schema.js";
import { createUserService, loginUserService, logoutUserService } from "../services/user.services.js";
import type { ApiResponse } from "../types/constants.types.js";
import type { User } from "../types/db.types.js";

export const createUser = async (req: Request, res: Response<ApiResponse<User>>, next: NextFunction) => {
  const data = req.validatedBody as signupBody;

  const { result, message } = await createUserService(data);

  return res.json({
    success: true,
    data: { username: result.username, password: result.password, email: result.email },
    message,
  });
};

export const loginUser = async (req: Request, res: Response<ApiResponse<string>>, next: NextFunction) => {
  const data = req.validatedBody as signinBody;

  const result = await loginUserService(data);

  return res.json({ success: true, message: result.message, data: result.token });
};

export const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
  const userid = req.userid;

  const result = await logoutUserService(Number(userid));

  return res.json({ success: true, message: result.message });
};
