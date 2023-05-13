import axios from "../../helpers/axiosInstance";
// Models
import { Product } from "../../models/api/Product/Product";
// Helpers
import productServiceConfig from "./ProductConfig";

// GET - /products
export async function getAllProducts(): Promise<Product[]> {
  try {
    let { data } = await axios.get(
      `/${productServiceConfig.getAllProduct}`
    );
    return data;
  } catch (error: any) {
    return error.response;
  }
}
