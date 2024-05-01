import { useQuery } from "@tanstack/react-query";
import { get } from "../api/api";

const GET_PRODUCTS_URI = "/bp/products";

export const useGetProducts = () => {
  const getProducts = async () => {
    const response = await get(GET_PRODUCTS_URI);
    return response.data;
  };

  const { data, error, isError, isPending, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return {
    data,
    error,
    isError,
    isPending,
    refetch,
  };
};
