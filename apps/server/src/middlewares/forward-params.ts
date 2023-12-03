import { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      allParams?: any;
    }
  }
}

export function forwardParams(req: Request, res: Response, next: NextFunction) {
  try {
    req.allParams = { ...req.allParams, ...req.params };
    next();
  } catch (error) {
    console.log("Error at forwardParams", error);
    return res.status(500).json(error);
  }
}
