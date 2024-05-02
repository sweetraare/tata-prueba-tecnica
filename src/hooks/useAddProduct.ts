import { useMutation } from "@tanstack/react-query";
import { post } from "../api/api";
import { Product } from "../types/Product";

const POST_PRODUCTS_URI = "/bp/products";

export const useAddProduct = () => {
  const addProduct = async (value: Product) => {
    const response = await post<Product>(POST_PRODUCTS_URI, value);
    return response.data;
  };

  const mutation = useMutation({ mutationFn: addProduct });

  return {
    mutation,
  };
};
