import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  image: string;
};

function ProductImage({ image }: Props): React.JSX.Element {
  return <View style={styles.highContainer}>
    <Text style={styles.text}>Logo</Text>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    height: 50,
    width: 200,
    resizeMode: "contain",
  },
  text: {
    color: "lightslategray",
  },
  highContainer: {
    justifyContent: "flex-start",
    marginVertical: 10,
  },
});

export default ProductImage;
