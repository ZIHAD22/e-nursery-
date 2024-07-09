import { Response } from "express";

type TSendRes<T> = {
  res: Response;
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
};

const sendRes = <T>(payload: TSendRes<T>) => {
  const { res, success, statusCode, message, data } = payload;
  return res.status(statusCode).json({
    success,
    statusCode,
    message,
    data,
  });
};

export default sendRes;
