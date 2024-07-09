import { model, Schema } from "mongoose";
import TProduct from "../interface/product";

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

const productModel = model<TProduct>("Product", productSchema);

export default productModel;
