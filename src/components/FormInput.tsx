import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isError: boolean;
  errorMessage: string;
};

function FormInput(
  { label, value, onChange, isError, errorMessage }: Props,
): React.JSX.Element {
  return <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={(value) => onChange(value)}
      style={[styles.input, isError && styles.inputError]}
    />
    <Text style={[styles.errorMessage]}>
      {isError ? errorMessage : ""}
    </Text>
  </View>;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "lightgrey",
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  inputError: {
    borderColor: "red",
  },
  label: {
    marginHorizontal: 20,
    marginBottom: 5,
  },
  errorMessage: {
    color: "red",
    marginHorizontal: 20,
    marginTop: 5,
  },
});

export default FormInput;
