import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../models/api/Product/Product";
// Models
import { Products } from "../models/api/Product/Products";
// Services
import * as productServices from "../services/Product/ProductService";
import { selectProductSlice, setAllProducts } from "../store/features/Product/ProductSlice";

const useProducts = () => {
  const dispatch = useDispatch<any>();
  const products: any = useSelector(selectProductSlice);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [isChange, setIsChange] = useState<boolean>(false);

  return {
    loading,
    isFiltered,
    isChange,
    products,
    filteredProducts,
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
    getFilteredProduct: (value: number, key: string) => {
      try {
        if (value && value !== 0) {
          const filteredProduct = products.filter((item: any) => Math.round(item[key]) === value);
          setFilteredProducts(filteredProduct);
        } else {
          setFilteredProducts(products);
        }
        setIsFiltered(!isFiltered);
        setIsChange(true);
      } catch (error) {
        console.log(error);
      } 
    }
  };
};

export default useProducts;
