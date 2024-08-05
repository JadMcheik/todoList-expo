import { Text, View, TextInput, StyleSheet } from "react-native";
import React, { forwardRef } from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.textInput}
        id="text-input"
        placeholder="Task to be done.."
        onChangeText={props.setInputValue}
        value={props.inputValue} 
        ref={ref}
      />
      <Text style={styles.inputSpan}>* you must enter a task *</Text>
    </View>
  );
});

export default Input;

const styles = StyleSheet.create({
  inputView: {
    width: "70%",
    height: 40,
  },
  textInput: {
    width: "97%",
    height: "87%",
    fontSize: 20,
    paddingTop: "auto",
    paddingBottom: "auto",
    margin: "auto",
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "solid",
  },
  inputSpan: {
    color: "red",
    fontWeight: "bold",
    display: "none",
  },
});
