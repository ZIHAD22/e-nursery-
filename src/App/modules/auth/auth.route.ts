import { authValidation } from "./auth.validation.js";
import { Router } from "express";
import { authController } from "./auth.controller.js";
import validateRequest from "../../middleware/validateRequest.js";
import auth from "../../middleware/auth.js";
import { Role } from "../../../type/index.js";
import verifyPasswordActionToken from "../../middleware/verifyPasswordActionToken.js";

const authRoute = Router();

authRoute.post(
  "/register",
  validateRequest(authValidation.registerUserSchema),
  authController.userRegistration,
);

authRoute.post(
  "/login",
  validateRequest(authValidation.loginUserSchema),
  authController.userLogin,
);

authRoute.patch(
  "/me/password",
  auth(Role.CUSTOMER, Role.ADMIN),
  verifyPasswordActionToken,
  authController.resetPassword,
);

authRoute.patch(
  "/forgot-password",
  verifyPasswordActionToken,
  authController.forgetPassword,
);

authRoute.post("/verify-otp", authController.otpVerification);

authRoute.post("/resend-otp", authController.reSendOtp);

authRoute.post(
  "/me/password/request-otp",
  auth(Role.CUSTOMER, Role.ADMIN),
  authController.sendResetPasswordOtp,
);

authRoute.post(
  "/forgot-password/send-otp",
  authController.sendForgotPasswordOtp,
);

export default authRoute;
