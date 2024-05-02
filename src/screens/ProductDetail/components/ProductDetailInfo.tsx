import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
};

function ProductDetailInfo({ label, value }: Props): React.JSX.Element {
  return <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  label: {
    color: "lightslategray",
  },
  value: {
    color: "black",
  },
});

export default ProductDetailInfo;
