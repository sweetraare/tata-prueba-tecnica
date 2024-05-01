import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
function Header(): React.JSX.Element {
  return <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text}>BANCO</Text>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: "white",
      paddingVertical: 10,
      display: "flex",
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: "lightgrey",
    },
    text: {
      color: "midnightblue",
    },
  },
);

export default Header;
