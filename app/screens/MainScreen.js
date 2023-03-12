import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreenMain from "./HomeScreenMain";
import ProfileScreenMain from "./ProfileScreenMain";
import EnrolledCoursesScreen from "./EnrolledCoursesScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  //   useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreenMain}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      {/* For tem purpose, want to change this in future */}
      <Tab.Screen
        name='My Courses'
        component={EnrolledCoursesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='play-circle-outline'
              color={color}
              size={size}
            />
          ),
          headerShown: true,
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileScreenMain}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
          // headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name='Logout'
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='plus-circle'
              color={color}
              size={size}
            />
          ),
        })}
      /> */}
      {/* <Tab.Screen
        name='Account'
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default AppNavigator;
