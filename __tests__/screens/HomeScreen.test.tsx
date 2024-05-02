import React from "react";
import { render, screen } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeScreen from "../../src/screens/Home/Home";
import { useGetProducts } from "../../src/hooks/useGetProducts";

jest.mock("../../src/hooks/useGetProducts");

const mockUseGetProducts = jest.mocked(useGetProducts);

describe("Add products page", () => {
  it("should render loading screen", () => {
    const queryClient = new QueryClient();

    const navigation = jest.fn();
    const route = jest.fn();

    mockUseGetProducts.mockReturnValue({
      error: null,
      isError: false,
      refetch: jest.fn(),
      isPending: true,
      data: undefined,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen navigation={navigation} route={route} />,
      </QueryClientProvider>,
    );

    expect(screen.getByText("loading...")).toBeOnTheScreen();
  });

  it("should render loading screen", () => {
    const queryClient = new QueryClient();

    const navigation = jest.fn();
    const route = jest.fn();

    mockUseGetProducts.mockReturnValue({
      error: null,
      isError: true,
      refetch: jest.fn(),
      isPending: false,
      data: undefined,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen navigation={navigation} route={route} />,
      </QueryClientProvider>,
    );

    expect(screen.getByText("Ha existido un error")).toBeOnTheScreen();
  });

  it("should render loading screen", () => {
    const queryClient = new QueryClient();

    const navigation = jest.fn();
    const route = jest.fn();

    mockUseGetProducts.mockReturnValue({
      error: null,
      isError: false,
      refetch: jest.fn(),
      isPending: false,
      data: [],
    });

    render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen navigation={navigation} route={route} />,
      </QueryClientProvider>,
    );

    expect(screen.getByText("Agregar")).toBeOnTheScreen();
  });
});
