import { OtpPurpose } from "../../../generated/prisma/enums.js";

const otpContent = {
  SIGN_UP: {
    title: "Verify Your Email",
    message:
      "Please use the following One-Time Password (OTP) to verify your email address and complete your registration.",
    label: "EMAIL VERIFICATION CODE",
    subject: "Verify Your Email - e-nursery 🌱",
  },

  LOGIN: {
    title: "Verify Your Login",
    message:
      "Please use the following One-Time Password (OTP) to securely verify your login.",
    label: "LOGIN VERIFICATION CODE",
    subject: "Login Verification - e-nursery 🌱",
  },

  RESET_PASSWORD: {
    title: "Confirm Password Change",
    message:
      "Please use the following One-Time Password (OTP) to confirm your password change.",
    label: "PASSWORD CHANGE CODE",
    subject: "Confirm Password Change - e-nursery 🌱",
  },

  FORGOT_PASSWORD: {
    title: "Reset Your Password",
    message:
      "Please use the following One-Time Password (OTP) to continue resetting your password.",
    label: "PASSWORD RESET CODE",
    subject: "Reset Your Password - e-nursery 🌱",
  },
};

export const getTitle = (type: OtpPurpose) => {
  const content = otpContent[type] || {
    title: "Verification Code",
    message:
      "Please use the following One-Time Password (OTP) to complete your verification.",
    label: "VERIFICATION CODE",
    subject: "Verification Code - e-nursery 🌱",
  };

  return content;
};
