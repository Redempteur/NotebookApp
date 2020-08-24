import React from "react";
import { View, Text, TouchableOpacity, slice} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';


export default (props) => {
  return (
    <View
      style={{
        padding: 20,
        borderBottomWidth: 0.7,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        flexDirection: 'row',
      }}
    >
    <Text style={{  fontSize: 18 ,flex:3 }}>{props.note}
    </Text>
    <TouchableOpacity  onPress={props.onDelete}>
    <Icon name="delete" size={30}/>
      </TouchableOpacity>
    
    </View>
   
  );
};

