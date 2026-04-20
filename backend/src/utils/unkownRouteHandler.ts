import type { Request, Response, NextFunction } from "express";
import type { ApiError } from "../types/constants.types.js";
import { httpStatus } from "../types/enums.js";

export const unkownRouteHandler = (req: Request, res: Response<ApiError>, next: NextFunction) => {
  return res.status(httpStatus.NotFound).json({ success: false, error: "404 not found" });
};
