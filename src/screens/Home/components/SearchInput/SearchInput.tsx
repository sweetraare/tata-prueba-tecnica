import React from "react";
import { StyleSheet, TextInput } from "react-native";

type SearchInputType = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

function SearchInput(
  { value, onChange, placeholder }: SearchInputType,
): React.JSX.Element {
  return <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={(value) => onChange(value)}
    style={styles.searchInput}
    placeholderTextColor="black"
  />;
}

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 2,
    borderColor: "lightgrey",
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});

export default SearchInput;
