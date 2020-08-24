import React from "react";
import {  View,  Text,  TextInput,  StyleSheet,  TouchableOpacity,} from "react-native";
export default (props) => {
  return (
    <View style={styles.newNote}>
      <TextInput
     onChangeText={props.onDeleteChange}
      />
      <TouchableOpacity style={styles.saveBtn} onPress={props.onDeleteChange}>
        <Text style={styles.btnTxt}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newNote: {
    flex: 9,
    padding: 10,
  },
  input: {
    flex: 8,
    fontSize: 18,
  },
  saveBtn: {
    alignSelf: "center",
    marginBottom: 25,
    padding: 10,
    paddingHorizontal: 90,
    backgroundColor: "#007EF5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnTxt: {
    color: "white",
    fontSize: 24,
  },
});