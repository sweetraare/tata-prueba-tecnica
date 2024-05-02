import { ScrollView, StyleSheet, Text, View } from "react-native";
import FormInput from "../../components/FormInput";
import { useState } from "react";
import { Product } from "../../types/Product";
import { validateDate } from "../../utils/utils";
import CustomButton from "../../components/Button";
import { useAddProduct } from "../../hooks/useAddProduct";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Navigation";

enum Properties {
  id,
  name,
  description,
  logo,
  release_date,
  revision_date,
}

interface AddProductProps
  extends NativeStackScreenProps<RootStackParamList, "AddProduct"> { }

function AddProductScreen({ navigation }: AddProductProps): React.JSX.Element {
  const [id, setId] = useState<string>();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [logo, setLogo] = useState<string>();
  const [releaseDate, setReleaseDate] = useState<string>();
  const [revisionDate, setRevisionDate] = useState<string>();

  const { mutation } = useAddProduct();

  const handleReset = () => {
    setId(undefined);
    setName(undefined);
    setDescription(undefined);
    setLogo(undefined);
    setReleaseDate(undefined);
    setRevisionDate(undefined);
  };

  const handleSave = () => {
    const newProduct: Product = {
      id: id || "",
      name: name || "",
      logo: logo || "",
      description: description || "",
      date_release: releaseDate ? new Date(releaseDate) : new Date(),
      date_revision: revisionDate ? new Date(revisionDate) : new Date(),
    };

    mutation.mutate(newProduct, {
      onSuccess: () => {
        navigation.push("Home");
      },
    });
  };

  const checkErrors = (property: Properties, value: string | undefined) => {
    // THis could be addresed using a form library such as react-hook-form
    switch (property) {
      case Properties.id:
        if (value?.length === 0) return true;
        return false;
      case Properties.logo:
        if (value?.length === 0) return true;
        return false;
      case Properties.name:
        if (value?.length === 0) return true;
        return false;
      case Properties.description:
        if (value?.length === 0) return true;
        return false;
      case Properties.release_date:
        if (!!value) {
          return validateDate(value!);
        }

        return false;
      case Properties.revision_date:
        if (!!value) {
          return validateDate(value!);
        }

        return false;
    }
  };

  return <ScrollView testID="addProductsView">
    <Text style={styles.textTitle}>Formulario de Registro</Text>
    {mutation.isError &&
      <Text style={styles.textError}>{mutation.error.message}</Text>}

    <FormInput
      label="ID"
      value={id || ""}
      onChange={setId}
      isError={checkErrors(Properties.id, id)}
      errorMessage="ID no válido"
    />

    <FormInput
      label="Nombre"
      value={name || ""}
      onChange={setName}
      isError={checkErrors(Properties.name, name)}
      errorMessage="Nombre es un campo obligatorio"
    />

    <FormInput
      label="Descripción"
      value={description || ""}
      onChange={setDescription}
      isError={checkErrors(Properties.description, description)}
      errorMessage="Descripción es un campo obligatorio"
    />

    <FormInput
      label="Logo"
      value={logo || ""}
      onChange={setLogo}
      isError={checkErrors(Properties.logo, logo)}
      errorMessage="Logo es un campo obligatorio"
    />

    <FormInput
      label="Fecha liberación"
      value={releaseDate || ""}
      onChange={setReleaseDate}
      isError={checkErrors(Properties.release_date, releaseDate)}
      errorMessage="Formato YYYY/MM/DD"
    />

    <FormInput
      label="Fecha revisión"
      value={revisionDate || ""}
      onChange={setRevisionDate}
      isError={checkErrors(Properties.revision_date, revisionDate)}
      errorMessage="Formato YYYY/MM/DD"
    />
    <View style={styles.buttonContainer}>
      <CustomButton
        label="Enviar"
        onPress={handleSave}
        disabled={mutation.isPending}
      />
      <CustomButton
        label="Reiniciar"
        onPress={handleReset}
        secondary
        disabled={mutation.isPending}
      />
    </View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 25,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  textError: {
    fontSize: 25,
    color: "red",
  },
});

export default AddProductScreen;
