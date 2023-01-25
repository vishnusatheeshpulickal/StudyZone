import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import CourseDetailed from "./CourseDetailed";
import EnrolledCoursesScreen from "./EnrolledCoursesScreen";

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
        name='Course'
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenMain;
