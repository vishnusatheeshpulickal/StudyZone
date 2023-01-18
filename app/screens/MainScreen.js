import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AccountNavigator from "./AccountNavigator";
// import FeedNavigator from "./FeedNavigator";
// import ListingEditScreen from "../screens/ListingEditScreen";
// import NewListingButton from "./NewListingButton";
// import routes from "./routes";
// import navigation from "./rootNavigation";
// import useNotifications from "../hooks/useNotifications";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import LogoutAlert from "./../components/LogoutAlert";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  //   useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
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
        component={LogoutAlert}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='play-circle-outline'
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
          //   headerShown: false,
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