import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { Colors } from "../themes/Colors";


const Addbutton = (props) => {
  return (
    <View style={styles.addButtonView}>
      <TouchableOpacity style={styles.addButton} onPress={props.addElement}>
        <Text style={styles.addButtonText}>Add </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Addbutton;

const styles = StyleSheet.create({
  addButtonView: {
    width: "25%",
    height: 40,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor:Colors.primary,
    borderWidth: 0,
    cursor: "pointer",

    borderRadius: 10,
  },
  addButtonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
  },
});
