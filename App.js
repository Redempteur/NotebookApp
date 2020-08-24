import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "./components/header";
import Body from "./components/body";
import AddNote from "./components/addNote";

export default class App extends Component {
  // declaring the initial state of our app
  state = {
    notes: [ "Play Golf", "Hairdressing", "Go to party","Jogging"],
    showAddNote: false,
    newNote: "",
  };
  
  save() {
    // get current list of notes
    const listOfNotes = this.state.notes;
    const noteToAdd = this.state.newNote;

    // add the new note to the start of the array so that it appears first
    listOfNotes.unshift(noteToAdd);

    // update the state with the new list of notes
    // and set showAddNote to false to return to the list of notes
    this.setState({ notes: listOfNotes, showAddNote: false });
  }
  deleteItem=(key)=> {
    const filteredItems =  this.state.notes.filter((item, index)=>index 
    !== key) 
      this.setState({  
        notes:filteredItems
      });
 }


  render() {
    // when we press the add button we should be able to see the add Note component

    if (this.state.showAddNote) {
      return (
        <View style={styles.main}>
          <View style={{ flex: 1, backgroundColor: "#5F85F0", }}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.setState({ showAddNote: false })}
            >
              <Text style={styles.backArrow}>{`<`}</Text>
              
            </TouchableOpacity>
          </View>

          <AddNote
          onInputChange={(text) => this.setState({ newNote: text })}
            onSave={() => this.save()}
            
          />    
         </View>
      );
    }

    return (
      <View style={styles.main}>
        <Header />

        <Body notesList ={this.state.notes}
              onDelete={this.deleteItem}

        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.setState({ showAddNote: true })}
        >
          <Text style={styles.btnTxt}>+ </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  btn: {
    position: "absolute",
    bottom: 35,
    right: 30,
    backgroundColor: "#5F85F0",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  btnTxt: {
    fontSize: 45,
    alignSelf: "center",
    color: "#FFF",
  },
  backArrow: {
    fontSize: 28,
    color: "#FFF",
  },
  backBtn: {
    paddingTop: 35,
    paddingLeft: 10,
  },

  
});