import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Navigation";
import { StyleSheet, Text, View } from "react-native";
import ProductDetailInfo from "./components/ProductDetailInfo";
import { dateReadable } from "../../utils/utils";
import ProductImage from "./components/ProductImage";
import CustomButton from "../../components/Button";

interface ProductDetailScreenProps
  extends NativeStackScreenProps<RootStackParamList, "ProductDetail"> { }

function ProductDetailScreen(
  { route }: ProductDetailScreenProps,
): React.JSX.Element {
  const { product } = route.params;
  return <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.textId}>ID: {product.id}</Text>
      <Text style={styles.textDescription}>Información extra</Text>
    </View>
    <View style={styles.infoContainer}>
      <ProductDetailInfo label="Nombre" value={product.name} />
      <ProductDetailInfo label="Descripción" value={product.description} />

      <ProductImage image={product.logo} />

      <ProductDetailInfo
        label="Fecha liberación"
        value={dateReadable(product.date_release)}
      />
      <ProductDetailInfo
        label="Fecha revisión"
        value={dateReadable(product.date_revision)}
      />
    </View>
    <View style={styles.buttonContainer}>
      <CustomButton label={"Editar"} onPress={() => { }} secondary />
      <CustomButton label={"Eliminar"} onPress={() => { }} danger />
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  headerContainer: {
    marginBottom: 40,
  },
  textId: {
    fontSize: 25,
    fontWeight: "500",
  },
  textDescription: {
    color: "lightslategray",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  infoContainer: {
    flex: 4,
  },
});

export default ProductDetailScreen;
