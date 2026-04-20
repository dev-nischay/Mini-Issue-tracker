import { userRepo } from "../repositories/user.repo.js";
import type { User } from "../types/db.types.js";
import { httpStatus } from "../types/enums.js";
import { AppError } from "../utils/AppError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

if (!secret) {
  process.exitCode = 1;
  process.exit();
}

export const createUserService = async (data: User) => {
  const { username, email } = data;
  const alreadyExists = await userRepo.findUserByEmail(data.email);

  if (alreadyExists) {
    throw new AppError(`user with email ${data.email} already exists`, httpStatus.Conflict);
  }

  const hashPassword = await bcrypt.hash(data.password, 10);

  const result = await userRepo.createUser({ username, email, password: hashPassword });
  return {
    message: "you are signed up",
    result,
  };
};

export const loginUserService = async (data: Omit<User, "username">) => {
  const isExists = await userRepo.findUserByEmail(data.email);

  if (!isExists) {
    throw new AppError("user not found signup to continue", httpStatus.BadRequest);
  }

  const comparePassword = await bcrypt.compare(data.password, isExists.password);

  if (!comparePassword) {
    throw new AppError("incorrect  password", httpStatus.BadRequest);
  }

  const token = jwt.sign(
    {
      userid: isExists.user_id,
    },
    secret,
  );

  return {
    message: "you are signed in ",
    token,
  };
};

export const logoutUserService = async (userid: number) => {
  const user = await userRepo.deleteUser(userid);

  if (!user) {
    throw new AppError("user not found", httpStatus.BadRequest);
  }

  return {
    message: "you are logged out",
  };
};
