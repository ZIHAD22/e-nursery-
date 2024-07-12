import { RequestHandler } from "express";
import catchAsync from "../utils/catchAsync";
import { createProductBD, getAllProductsDB } from "../services/product.service";
import sendRes from "../utils/sendRes";

const createProduct = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = createProductBD(data);
  sendRes({
    res,
    success: true,
    statusCode: 201,
    message: "product create successfully",
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res, next) => {
  const result = await getAllProductsDB();
  sendRes({
    res,
    success: true,
    statusCode: 201,
    message: "product create successfully",
    data: result,
  });
});

export { createProduct, getAllProduct };
