import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  label: string;
  secondary?: boolean;
  onPress: () => void;
  disabled?: boolean;
};

function CustomButton(
  { label, secondary = false, onPress, disabled = false }: ButtonProps,
): React.JSX.Element {
  return <TouchableOpacity
    style={[
      styles.button,
      secondary ? styles.secondaryButton : styles.primaryButton,
    ]}
    disabled={disabled}
    onPress={onPress}
  >
    <Text style={secondary ? styles.textSecondary : styles.textPrimary}>
      {label}
    </Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create(
  {
    button: {
      paddingVertical: 10,
      marginHorizontal: 10,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },

    primaryButton: {
      backgroundColor: "gold",
    },
    secondaryButton: {
      backgroundColor: "lightgrey",
    },
    textPrimary: {
      color: "black",
    },
    textSecondary: {
      color: "darkblue",
    },
  },
);

export default CustomButton;
