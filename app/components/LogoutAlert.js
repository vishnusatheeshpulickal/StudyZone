import React, { useEffect } from "react";
import { View, Text, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { deleteToken } from "../config/store";

const LogoutAlert = () => {
  useEffect(() => {
    logout();
  });

  const logout = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: async () => {
            await deleteToken();
            navigation.dispatch(StackActions.popToTop());
            navigation.emit("Start");
          },
        },
      ],
      { cancelable: false }
    );
  };

  // return (
  //   // <TouchableOpacity style={styles.logoutButton} onPress={logout}>
  //   //   <Text style={styles.logoutText}>Logout</Text>
  //   // </TouchableOpacity>
  // );
};

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: "#ff0000",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    margin: 8,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LogoutAlert;
