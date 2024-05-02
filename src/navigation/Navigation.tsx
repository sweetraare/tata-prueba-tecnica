import React from "react";
import HomeScreen from "../screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import ProductDetailScreen from "../screens/ProductDetail/ProductDetail";
import { Product } from "../types/Product";

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation(): React.JSX.Element {
  return <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      header: Header,
      contentStyle: {
        backgroundColor: "white",
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
    />
  </Stack.Navigator>;
}

export default Navigation;
