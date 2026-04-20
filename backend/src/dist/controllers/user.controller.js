import { createUserService, loginUserService, logoutUserService } from "../services/user.services.js";
export const createUser = async (req, res, next) => {
    const data = req.validatedBody;
    const { result, message } = await createUserService(data);
    return res.json({
        success: true,
        data: { username: result.username, email: result.email },
        message,
    });
};
export const loginUser = async (req, res, next) => {
    const data = req.validatedBody;
    const result = await loginUserService(data);
    return res.json({ success: true, message: result.message, data: result.token });
};
export const logoutUser = async (req, res, next) => {
    const userid = req.userid;
    const result = await logoutUserService(Number(userid));
    return res.json({ success: true, message: result.message });
};
