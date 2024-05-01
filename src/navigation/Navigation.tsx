import React from "react";
import HomeScreen from "../screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

function Navigation(): React.JSX.Element {
  return <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      // headerShown: false,
      header: Header,
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
    />
  </Stack.Navigator>;
}

export default Navigation;
