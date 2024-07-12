import TProduct from "../interface/product.interface";
import ProductModel from "../models/product.model";

const createProductBD = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

const getAllProductsDB = async () => {
  const result = await ProductModel.find();
  return result;
};

export { createProductBD, getAllProductsDB };
