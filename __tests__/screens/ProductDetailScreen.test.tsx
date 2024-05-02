import React from "react";
import { render, screen } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetProducts } from "../../src/hooks/useGetProducts";
import ProductDetailScreen from "../../src/screens/ProductDetail/ProductDetail";
import { Product } from "../../src/types/Product";

jest.mock("../../src/hooks/useGetProducts");

const mockUseGetProducts = jest.mocked(useGetProducts);

describe("Add products page", () => {
  it("should render loading screen", () => {
    const queryClient = new QueryClient();

    const navigation = jest.fn();
    const product: Product = {
      id: "123",
      logo: "logo",
      name: "nombre",
      description: "descripcion",
      date_release: new Date(),
      date_revision: new Date(),
    };
    const route = {
      params: {
        product,
      },
    };

    mockUseGetProducts.mockReturnValue({
      error: null,
      isError: false,
      refetch: jest.fn(),
      isPending: true,
      data: undefined,
    });

    render(
      <ProductDetailScreen route={route} navigation={navigation} />,
    );

    expect(screen.getByText(`ID: ${product.id}`)).toBeOnTheScreen();
    expect(screen.getByText(product.name)).toBeOnTheScreen();
    expect(screen.getByText(product.description)).toBeOnTheScreen();
    expect(screen.getByTestId("buttonContainer")).toBeOnTheScreen();
  });
});
