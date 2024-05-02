import { useMutation } from "@tanstack/react-query";
import { apiDelete } from "../api/api";
import { Product } from "../types/Product";

const POST_PRODUCTS_URI = "/bp/products";

export const useDeleteProduct = () => {
  const deleteProduct = async (value: Product) => {
    const url = `${POST_PRODUCTS_URI}?id=${value.id}`;

    const response = await apiDelete<string>(url);
    return response.data;
  };

  const mutation = useMutation({ mutationFn: deleteProduct });

  return {
    mutation,
  };
};
