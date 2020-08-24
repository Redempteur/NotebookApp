import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTxt}>All Notes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#5f85f0",
  },
  headerTxt: {
    fontSize: 24,
    paddingTop: 20,
    paddingLeft: 20,
    color: "#FFF",
  },
});