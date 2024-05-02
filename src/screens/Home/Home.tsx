import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useGetProducts } from "../../hooks/useGetProducts";
import ProductItem from "./components/ProductItem/ProductItem";
import Divider from "../../components/Divider";
import CustomButton from "../../components/Button";
import SearchInput from "./components/SearchInput/SearchInput";

function HomeScreen(): React.JSX.Element {
  const { data, isError, isPending, error } = useGetProducts();
  const [searchValue, setSeachValue] = useState("");

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

  const filteredValues = data?.filter((product) =>
    product.name.toUpperCase().includes(searchValue.toUpperCase())
  );

  return <View style={styles.mainView}>
    <SearchInput
      value={searchValue}
      onChange={setSeachValue}
      placeholder="Search..."
    />

    <FlatList
      style={styles.flatList}
      data={filteredValues}
      renderItem={({ item }) => {
        return <ProductItem product={item} />;
      }}
      ItemSeparatorComponent={() => <Divider />}
      keyExtractor={(item) => item.id}
      extraData={{ data, isPending, isError }}
    />
    <CustomButton
      label={"Agregar"}
      onPress={() => { }}
    />
  </View>;
}

const styles = StyleSheet.create(
  {
    mainView: {
      display: "flex",
      marginTop: 20,
      gap: 20,
    },
    flatList: {
      marginHorizontal: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "lightgrey",
      paddingHorizontal: 2,
    },
  },
);

export default HomeScreen;
