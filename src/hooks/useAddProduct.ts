import { useMutation } from "@tanstack/react-query";
import { post } from "../api/api";
import { Product } from "../types/Product";

const POST_PRODUCTS_URI = "/bp/products";

type AddProductError = Partial<Product>;

export const useAddProduct = () => {
  const addProduct = async (value: Product) => {
    const response = await post<Product | AddProductError>(
      POST_PRODUCTS_URI,
      value,
    );

    if (response.status === 206) {
      throw response.data;
    }

    return response.data as Product;
  };

  const mutation = useMutation({ mutationFn: addProduct });

  return {
    mutation,
  };
};
