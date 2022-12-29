import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import HomeScreen from "./app/screens/HomeScreen";
import Courses from "./app/screens/Courses";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* {<Courses />} */}
      <RegisterScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
