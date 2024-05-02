import React from "react";
import { Product } from "../../../../types/Product";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { Link } from "@react-navigation/native";

type ProductItemProps = {
  product: Product;
};

function ProductItem({ product }: ProductItemProps): React.JSX.Element {
  return <Link
    to={{ screen: "ProductDetail", params: { product } }}
  >
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{product.name}</Text>
        <Text style={styles.textId}>ID: {product.id}</Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} color="lightslategray" />
    </View>
  </Link>;
}

const styles = StyleSheet.create(
  {
    container: {
      padding: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,
      width: "100%",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
    },

    textName: {
      color: "black",
    },
    textId: {
      color: "lightslategray",
    },
  },
);

export default ProductItem;
