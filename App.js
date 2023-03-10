import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

import HomeScreen from "./app/screens/HomeScreen";
import Courses from "./app/screens/Courses";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import LoaderScreen from "./app/screens/LoaderScreen";
import MainScreen from "./app/screens/MainScreen";
import LogoutAlert from "./app/components/LogoutAlert";
import SuccessScreen from "./app/screens/SuccessScreen";

const instance = axios.create({
  baseURL: "",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Start'>
          <Stack.Screen
            component={LoaderScreen}
            name='Start'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={WelcomeScreen}
            name='Welcome'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            component={MainScreen}
            name='Main'
          />
          <Stack.Screen
            options={{ headerShown: false }}
            component={LoginScreen}
            name='Login'
          />
          <Stack.Screen
            options={{ headerShown: false }}
            component={RegisterScreen}
            name='Register'
          />

          <Stack.Screen
            options={{ headerShown: false }}
            component={SuccessScreen}
            name='Success'
          />

          <Stack.Screen
            options={{ headerShown: false }}
            component={LogoutAlert}
            name='Logout'
          />
        </Stack.Navigator>
      </NavigationContainer>
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
