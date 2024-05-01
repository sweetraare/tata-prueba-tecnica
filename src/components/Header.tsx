import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { faMoneyBills } from "@fortawesome/free-solid-svg-icons/faMoneyBills";

function Header(): React.JSX.Element {
  return <SafeAreaView>
    <View style={styles.container}>
      <FontAwesomeIcon icon={faMoneyBills} color="midnightblue" />
      <Text style={styles.text}>BANCO</Text>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create(
  {
    container: {
      paddingVertical: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderColor: "lightgrey",
    },
    text: {
      color: "midnightblue",
      paddingHorizontal: 5,
    },
  },
);

export default Header;
