import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError.js";
import { tokenHelper } from "../utils/tokenHelper.js";
import config from "../config/index.js";
import jwt from "jsonwebtoken";

const verifyPasswordActionToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.verificationToken;

    if (!token) {
      throw new AppError(
        401,
        "Please verify the OTP before changing your password.",
        {
          name: "Verification token not found",
        },
      );
    }

    const verifyToken = tokenHelper.verifyToken(
      token,
      config.passwordVerificationTokenSecret as string,
    );

    // Make sure this token is for password changing
    if (verifyToken?.purpose !== "CHANGE_PASSWORD") {
      throw new AppError(
        403,
        "This verification token cannot be used to change your password.",
      );
    }

    // Attach verified token data to request
    req.passwordVerification = verifyToken;

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return next(
        new AppError(
          401,
          "Password verification has expired. Please verify the OTP again.",
        ),
      );
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return next(
        new AppError(
          401,
          "Invalid password verification token. Please verify the OTP again.",
        ),
      );
    }

    next(error);
  }
};

export default verifyPasswordActionToken;
