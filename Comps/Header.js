import Addbutton from "./AddButton";
import Input from "./Input";
import React, { forwardRef } from "react";
import { View, StyleSheet } from "react-native";

const Header = React.forwardRef((props, ref) => {
  return (
    <View style={styles.header}>
      <Input setInputValue={props.setInputValue} ref={ref} inputValue={props.inputValue}/>
      <Addbutton addElement={props.addElement} />
    </View>
  );
});

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 40,
  },
});
