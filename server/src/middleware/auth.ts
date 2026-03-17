import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import type { IJWTPayload } from '../types';

declare global {
  namespace Express {
    interface Request {
      user?: IJWTPayload;
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // JWT verification middleware
  // Extract token from Authorization header
  // Verify token and attach user to request object
  next();
};

export const authorizeAdmin = (req: Request, res: Response, next: NextFunction) => {
  // Admin authorization middleware
  // Check if user role is 'admin'
  next();
};
