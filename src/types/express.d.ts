declare namespace Express {
  export interface Request {
    userid: number;

    validatedBody: unknown;
    validatedParams: unknown;
    validatedQuery: unknown;
  }
}
