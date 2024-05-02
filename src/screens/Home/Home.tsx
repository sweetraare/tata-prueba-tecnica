import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useGetProducts } from "../../hooks/useGetProducts";
import ProductItem from "./components/ProductItem/ProductItem";
import Divider from "../../components/Divider";
import CustomButton from "../../components/Button";
import SearchInput from "./components/SearchInput/SearchInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Navigation";

interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Home"> { }

function HomeScreen({ navigation, route }: HomeScreenProps): React.JSX.Element {
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

  const handleAddProduct = () => {
    navigation.navigate("AddProduct");
  };

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
      onPress={handleAddProduct}
    />
  </View>;
}

const styles = StyleSheet.create(
  {
    mainView: {
      display: "flex",
      marginTop: 20,
      gap: 20,
      flex: 1,
      marginBottom: 20,
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
