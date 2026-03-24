export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public fieldErrors?: {},
    public isOpertaional = true,
  ) {
    super(message);
  }
}
