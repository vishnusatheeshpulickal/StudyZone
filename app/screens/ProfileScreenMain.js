import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import SupportScreen from "./SupportScreen";

const ProfileScreenMain = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen
        component={ProfileScreen}
        name='Profile'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SettingsScreen}
        name='Settings'
        options={{ headerShown: true }}
      />
      <Stack.Screen
        component={SupportScreen}
        name='Support'
        options={{ headerShown: true }}
      />
      {/* <Stack.Screen
        component={Course}
        name='Course'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={VideoPage}
        name='Tutorial'
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default ProfileScreenMain;
