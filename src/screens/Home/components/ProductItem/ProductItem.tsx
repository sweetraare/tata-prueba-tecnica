import React from "react";
import { Product } from "../../../../types/Product";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

type ProductItemProps = {
  product: Product;
};

function ProductItem({ product }: ProductItemProps): React.JSX.Element {
  console.log("prroo", product);

  return <View style={styles.container}>
    <View>
      <Text style={styles.textName}>{product.name}</Text>
      <Text style={styles.textId}>ID: {product.id}</Text>
    </View>
    <FontAwesomeIcon icon={faChevronRight} color="lightslategray" />
  </View>;
}

const styles = StyleSheet.create(
  {
    container: {
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
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
