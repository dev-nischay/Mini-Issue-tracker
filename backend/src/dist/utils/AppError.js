export class AppError extends Error {
    statusCode;
    fieldErrors;
    isOpertaional;
    constructor(message, statusCode, fieldErrors, isOpertaional = true) {
        super(message);
        this.statusCode = statusCode;
        this.fieldErrors = fieldErrors;
        this.isOpertaional = isOpertaional;
    }
}
