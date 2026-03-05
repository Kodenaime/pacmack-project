import { Request, Response, NextFunction } from 'express';

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.header('x-api-key');
  
  // Check if the key matches the one in your .env
  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  
  next();
};