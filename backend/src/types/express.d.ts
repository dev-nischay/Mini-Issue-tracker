declare namespace Express {
  export interface Request {
    userid: number;

    validatedBody: unknown;
    validatedParams: { projectId: number; issueId: number };
    validatedQuery: unknown;
  }
}
