import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./app/screens/HomeScreen";
import Courses from "./app/screens/Courses";
// import RegisterScreen from "./app/screens/RegisterScreen";
import VideoPage from "./app/screens/VideoPage";
import Xd from "./app/screens/Xd.js";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CourseList from "./app/screens/CourseList";
import Card from "./app/components/Card";
import CourseDetailed from "./app/screens/CourseDetailed";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import LoaderScreen from "./app/screens/LoaderScreen";
import SuccessScreen from "./app/screens/SuccessScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName='Start'>
          <Stack.Screen component={LoaderScreen} name='Start' />
        </Stack.Navigator>
      </NavigationContainer> */}
      {/* <SuccessScreen /> */}
      {/* {<Courses />} */}
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      <LoaderScreen />
      {/* <LoaderScreen /> */}
      {/* <VideoPage /> */}
      {/* <Xd /> */}
      {/* <HomeScreen /> */}
      {/* <CourseList /> */}
      {/* <CourseDetailed /> */}
      {/* <RegisterScreen /> */}
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
