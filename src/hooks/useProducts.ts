import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Models
import { Products } from "../models/api/Product/Products";
// Services
import * as productServices from "../services/Product/ProductService";
import { selectProductSlice, setAllProducts } from "../store/features/Product/ProductSlice";

const useProducts = () => {
  const dispatch = useDispatch<any>();
  const products: any = useSelector(selectProductSlice);
  const [loading, setLoading] = useState<boolean>(false);

  return {
    loading,
    products,
    setLoading: (payload: boolean) => {
        setLoading(payload);
    },
    getProducts: async () => {
      try {
        setLoading(true);
        const data = await productServices.getAllProducts();
        if (data) {
          const productData: Products = new Products(data);
          dispatch(setAllProducts(productData.products));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 250);
      }
    },
    getFilteredProduct: (rate: number) => {
      try {
        const filteredProduct = products.filter((item: any) => Math.round(item.rating) === rate);
        dispatch(setAllProducts(filteredProduct));
      } catch (error) {
        console.log(error);
      } 
    }
  };
};

export default useProducts;
