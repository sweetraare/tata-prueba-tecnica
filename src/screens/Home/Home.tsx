import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useGetProducts } from "../../hooks/useGetProducts";

function HomeScreen(): React.JSX.Element {
  const { data, isError, isPending, error } = useGetProducts();

  console.log({ data, isPending });

  if (isError) {
    return <View>
      <Text>Ha existido un error {error?.message}</Text>
    </View>;
  }

  if (isPending) {
    return <View>
      <Text>loading...</Text>
    </View>;
  }

  return <View style={styles.mainView}>
    <Text>Home screen</Text>
  </View>;
}

const styles = StyleSheet.create(
  {
    mainView: {
      backgroundColor: "",
    },
  },
);

export default HomeScreen;
