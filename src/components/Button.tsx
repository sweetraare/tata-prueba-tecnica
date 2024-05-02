import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  label: string;
  secondary?: boolean;
  onPress: () => void;
  disabled?: boolean;
  danger?: boolean;
};

function CustomButton(
  { label, secondary = false, onPress, disabled = false, danger }: ButtonProps,
): React.JSX.Element {
  const buttonStyle = () => {
    if (secondary) return styles.secondaryButton;
    if (danger) return styles.dangerButton;

    return styles.primaryButton;
  };

  const textStyle = () => {
    if (secondary) return styles.textSecondary;
    if (danger) return styles.textDanger;

    return styles.textPrimary;
  };

  return <TouchableOpacity
    testID="customButton"
    style={[styles.button, buttonStyle()]}
    disabled={disabled}
    onPress={onPress}
  >
    <Text style={textStyle()}>
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
    dangerButton: {
      backgroundColor: "red",
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
    textDanger: {
      color: "white",
    },
  },
);

export default CustomButton;
