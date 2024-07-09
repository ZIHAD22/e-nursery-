import { Router } from "express";
import createProduct from "../controllers/createProducts";
import requestValidator from "../utils/requestValidator";
import { createProductValidation } from "../validations/productValidation";

const productRoutes = Router();

productRoutes.post(
  "/",
  requestValidator(createProductValidation),
  createProduct
);

export default productRoutes;
