import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View , SafeAreaView} from "react-native";
import Input from "./Comps/Input";
import Addbutton from "./Comps/AddButton";
import Header from "./Comps/Header";
import Tasks from "./Comps/Tasks";
import InnerContainer from "./Comps/InnerContainer";
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
    backgroundColor: "#1e90ff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },


});
