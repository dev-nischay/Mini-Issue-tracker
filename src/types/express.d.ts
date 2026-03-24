declare namespace Express {
  export interface Request {
    user: {
      userid: import("./jwtExtends.ts").jwtPayload | string;
    };

    validatedBody: unknown;
    validatedParams: unknown;
    validatedQuery: unknown;
  }
}
