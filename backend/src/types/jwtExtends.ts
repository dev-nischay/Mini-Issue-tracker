import type { JwtPayload } from "jsonwebtoken";

export interface jwtPayload extends JwtPayload {
  userid: number;
}
