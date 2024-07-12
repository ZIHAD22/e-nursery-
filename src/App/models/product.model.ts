import { model, Schema } from "mongoose";
import TProduct from "../interface/product.interface";

const productSchema = new Schema<TProduct>({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const ProductModel = model<TProduct>("Product", productSchema);

export default ProductModel;
