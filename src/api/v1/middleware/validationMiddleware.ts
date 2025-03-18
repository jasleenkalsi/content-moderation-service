import { Request, Response, NextFunction } from "express";

const validFlagReasons = ["Spam", "Hate Speech", "Harassment", "Inappropriate Content"];

export const validateFlagging = (req: Request, res: Response, next: NextFunction): void => {
    if (!req.body.reason || !validFlagReasons.includes(req.body.reason)) {
        res.status(400).json({ message: "Invalid reason for flagging" });
        return;
    }
    next();
};
