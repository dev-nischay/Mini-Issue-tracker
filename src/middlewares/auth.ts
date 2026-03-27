import jwt, { type Jwt, type JwtPayload } from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";
import type { Request, Response, NextFunction } from "express";
import { httpStatus } from "../types/enums.js";
import type { jwtPayload } from "../types/jwtExtends.js";

const secret = process.env.JWT_SECRET;

if (!secret) {
  console.log("env variables are not set ");
  process.exitCode = 1;
  process.exit();
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.length > 0) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    if (token && token.length > 0) {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return next(new AppError("Unauthorized", httpStatus.Unauthorized));
        }

        if (decoded) {
          const payload = decoded as jwtPayload;
          req.userid = payload.userid;
          next();
        }
      });
    }
  }
};
