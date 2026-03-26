import type { Request, Response, NextFunction } from "express";
import type { ApiError } from "../types/constants.types.js";

export const unkownRouteHandler = (req: Request, res: Response<ApiError>, next: NextFunction) => {
  return res.json({ success: false, error: "404 not found" });
};
