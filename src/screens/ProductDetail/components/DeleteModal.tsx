import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../../components/Button";
import Divider from "../../../components/Divider";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

type DeleteModalProps = {
  visible: boolean;
  onClose: () => void;
  productName: string;
  onDelete: () => void;
};

function DeleteModal(
  { visible, onClose, productName, onDelete }: DeleteModalProps,
): React.JSX.Element {
  return <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={onClose}>
            <FontAwesomeIcon icon={faXmark} color="midnightblue" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Divider />
          <Text style={styles.text}>
            Estás seguro de eliminar el producto {productName}
          </Text>
          <Divider />
        </View>
        <CustomButton label="Confirmar" onPress={onDelete} />
        <CustomButton label="Cancelar" onPress={onClose} secondary />
      </View>
    </View>
  </Modal>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000080",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  insideContainer: {
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: "white",
    paddingVertical: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  text: {
    fontSize: 20,
    paddingVertical: 30,
    textAlign: "center",
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  closeContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    paddingHorizontal: 20,
    alignItems: "center",
  },
});

export default DeleteModal;
