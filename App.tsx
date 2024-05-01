import React from "react";
import Navigation from "./src/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
