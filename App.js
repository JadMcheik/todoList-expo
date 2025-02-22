import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Input from "./components/Input";
import Addbutton from "./components/AddButton";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import InnerContainer from "./components/InnerContainer";
import { Colors } from "./themes/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <InnerContainer />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures SafeAreaView takes up full height
    paddingTop: StatusBar.currentHeight,
    
  },
  outerContainer: {
    flexGrow: 1, // Ensures ScrollView content expands to fill available space
    backgroundColor:Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
