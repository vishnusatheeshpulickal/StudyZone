import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import CourseDetailed from "./CourseDetailed";
import Course from "./Course";
import VideoPage from "./VideoPage";

const HomeScreenMain = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name='Home'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={CourseDetailed}
        name='Course Details'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Course}
        name='Course'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={VideoPage}
        name='Tutorial'
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenMain;
