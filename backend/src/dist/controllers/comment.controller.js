import { createCommentService, getAllCommentService } from "../services/comment.service.js";
export const createComment = async (req, res, next) => {
    const { comment } = req.validatedBody;
    const userId = req.userid;
    const issueId = req.validatedParams.issueId;
    const result = await createCommentService({ comment, issue_id: Number(issueId), user_id: userId });
    return res.json({
        message: result.message,
    });
};
export const getAllComments = async (req, res, next) => {
    const issueId = req.validatedParams.issueId;
    const result = await getAllCommentService(issueId);
    return {
        message: result.message,
        issues: result.issues,
    };
};
