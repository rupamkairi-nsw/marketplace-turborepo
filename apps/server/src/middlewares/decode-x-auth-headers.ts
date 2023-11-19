import { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      xauth?: any;
    }
  }
}

export function decodeXAuthHeaders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let xauth = req.cookies["X-Auth"] ?? req.header("X-Auth");
    if (!xauth) return res.status(401).json({});
    xauth = JSON.parse(xauth as string);

    req.xauth = xauth;

    return next();
  } catch (error) {
    console.log("Error at decodeAuthHeaders");
    return res.status(500).json(error);
  }
}
