import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import HomeScreen from "./app/screens/HomeScreen";
import Courses from "./app/screens/Courses";
// import RegisterScreen from "./app/screens/RegisterScreen";
import VideoPage from "./app/screens/VideoPage";
import Xd from "./app/screens/Xd.js";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CourseList from "./app/screens/CourseList";
import Card from "./app/components/Card";
import CourseDetailed from "./app/screens/CourseDetailed";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* {<Courses />} */}
      {/* <RegisterScreen /> */}
      {/* <VideoPage /> */}
      {/* <Xd /> */}
      {/* <HomeScreen /> */}
      {/* <CourseList /> */}
      <CourseDetailed />
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
