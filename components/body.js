import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import Note from "./note";

export default (props) => {
  return (
    <View style={styles.list}>
      {props.notesList.map((note, i) => {
        return <Note key={i} note={i+". "+ note.length <=6 ? note : note.slice(0,6)+'...'} 
                             onDelete={()=>props.onDelete(i)} />;
      })}


    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 9,
  },
});