import React from "react";
import { render, screen } from "@testing-library/react-native";
import AddProductScreen from "../../src/screens/AddProduct/AddProductScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Add products page", () => {
  it("should render add products page", () => {
    const queryClient = new QueryClient();

    const navigation = jest.fn();
    const route = jest.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <AddProductScreen navigation={navigation} route={route} />,
      </QueryClientProvider>,
    );

    expect(screen.getByText("Formulario de Registro")).toBeOnTheScreen();
  });
});
