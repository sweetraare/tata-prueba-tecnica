import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Navigation";
import { StyleSheet, Text, View } from "react-native";
import ProductDetailInfo from "./components/ProductDetailInfo";
import { dateReadable } from "../../utils/utils";
import ProductImage from "./components/ProductImage";
import CustomButton from "../../components/Button";
import DeleteModal from "./components/DeleteModal";
import { useState } from "react";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";

interface ProductDetailScreenProps
  extends NativeStackScreenProps<RootStackParamList, "ProductDetail"> { }

function ProductDetailScreen(
  { route, navigation }: ProductDetailScreenProps,
): React.JSX.Element {
  const { product } = route.params;

  const { mutation } = useDeleteProduct();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    mutation.mutate(product, {
      onSuccess: () => {
        setShowModal(false);
        navigation.push("Home");
      },
    });
  };

  return <View style={styles.container}>
    {mutation.isError &&
      <Text style={styles.textError}>{mutation.error.message}</Text>}

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
    <View testID="buttonContainer" style={styles.buttonContainer}>
      <CustomButton label={"Editar"} onPress={() => { }} secondary />
      <CustomButton
        label={"Eliminar"}
        onPress={() => setShowModal(true)}
        danger
      />
    </View>
    <DeleteModal
      visible={showModal}
      onClose={() => setShowModal(false)}
      productName={product.name}
      onDelete={handleDelete}
    />
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

  textError: {
    fontSize: 25,
    color: "red",
  },
});

export default ProductDetailScreen;
