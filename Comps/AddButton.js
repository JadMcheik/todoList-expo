import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

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
    backgroundColor: "#1e90ff",
    borderWidth: 0,
    cursor: "pointer",

    borderRadius: 10,
  },
  addButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
});
