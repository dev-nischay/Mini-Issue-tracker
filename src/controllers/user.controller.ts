import type { Request, Response, NextFunction } from "express";
import type { signinBody, signupBody } from "../zod/user.schema.js";
import { createUserService, loginUserService, logoutUserService } from "../services/user.services.js";
import type { ApiResponse } from "../types/constants.types.js";
import type { User } from "../types/db.types.js";

export const createUser = async (req: Request, res: Response<ApiResponse<User>>, next: NextFunction) => {
  const data = req.validatedBody as signupBody;

  const user = await createUserService(data);

  return res.json({ success: true, data: user, message: "you are signed up" });
};

export const loginUser = async (req: Request, res: Response<ApiResponse<{ token: string }>>, next: NextFunction) => {
  const data = req.validatedBody as signinBody;

  const token = await loginUserService(data);

  return res.json({ success: true, message: "you are signed in ", data: { token } });
};

export const logoutUser = async (req: Request, res: Response<ApiResponse<{ userid: number }>>, next: NextFunction) => {
  const userid = req.userid;

  const user = await logoutUserService(Number(userid));

  return res.json({ success: true, message: "you are logged out", data: { userid: user.user_id } });
};
