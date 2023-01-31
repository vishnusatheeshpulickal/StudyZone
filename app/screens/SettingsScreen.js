import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";
import Dialog from "react-native-dialog";
import Toast from "react-native-toast-message";

import { deleteToken, getName, getEmail, getToken } from "../config/store";

const SettingsScreen = ({ navigation }) => {
  const [nameFieldVisible, setNameFieldVisible] = useState(false);
  const [name, setName] = useState("");
  const [passwordFieldVisible, setPasswordFieldVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [notificationFieldVisible, setNotificationFieldVisible] =
    useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // const [successName, setSuccessName] = useState(false);
  // const [successPassword, setSuccessPassword] = useState(false);

  //   useEffect(async () => {
  //     const token = await getToken();
  //     const config = {
  //       headers: { Authorization: `Bearer ${token}` },
  //     };
  //     axios
  //       .get(`https://elearning-v6l2.onrender.com/api/v1/user/user`, config)
  //       .then((res) => {
  //         setData(res.data.data);
  //         setIsLoading(false);
  //       })
  //       .catch((e) => console.log(e));
  //   }, []);

  const nameVisible = () => {
    setNameFieldVisible(true);
  };

  const nameHidden = () => {
    setNameFieldVisible(false);
  };

  // Toast.show({
  //   type: "info",
  //   text1: "This is an info message",
  // });

  const updateName = async () => {
    setDisabled(true);
    // setSuccessName(false);
    const token = await getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        `https://elearning-v6l2.onrender.com/api/v1/user/updatename`,
        { name: name },
        config
      )
      .then((res) => {
        console.log("Name changed successfully");
        setDisabled(false);
        setNameFieldVisible(false);
        Toast.show({
          type: "success",
          text1: "Successfully updated name",
        });
      })
      .catch((err) => console.log(err));
  };

  const passwordVisible = () => {
    setPasswordFieldVisible(true);
  };

  const passwordHidden = () => {
    setPasswordFieldVisible(false);
  };

  const updatePassword = async () => {
    setDisabled(true);
    const token = await getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        `https://elearning-v6l2.onrender.com/api/v1/user/updatepassword`,
        { password: password },
        config
      )
      .then((res) => {
        console.log("Password changed successfully");
        setDisabled(false);
        setPasswordFieldVisible(false);
        Toast.show({
          type: "success",
          text1: "Successfully updated password",
        });
      })
      .catch((err) => console.log(err));
  };

  const notificationVisible = () => {
    setNotificationFieldVisible(true);
  };

  const notificationHidden = () => {
    setNotificationFieldVisible(false);
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      {/* {isLoading ? (
        <Spinner visible={isLoading} textContent={"Loading..."} />
      ) : ( */}
      {/* Modals */}

      <View>
        <Dialog.Container visible={nameFieldVisible}>
          <Dialog.Title>Update name</Dialog.Title>
          <Dialog.Description>Enter the name</Dialog.Description>
          <Dialog.Input onChangeText={setName} />
          <Dialog.Button label='Cancel' onPress={nameHidden} />
          <Dialog.Button
            label='Update'
            onPress={updateName}
            disabled={disabled}
          />
        </Dialog.Container>
      </View>

      <View>
        <Dialog.Container visible={passwordFieldVisible}>
          <Dialog.Title>Change Password</Dialog.Title>
          <Dialog.Input label='Enter the Old Password' />
          <Dialog.Input
            label='Enter the New Password'
            onChangeText={setPassword}
          />
          <Dialog.Input label='Confirm Password' />
          <Dialog.Button label='Cancel' onPress={passwordHidden} />
          <Dialog.Button
            label='Update'
            onPress={updatePassword}
            disabled={disabled}
          />
        </Dialog.Container>
      </View>

      <View>
        <Dialog.Container visible={notificationFieldVisible}>
          <Dialog.Title>Allow Notifications</Dialog.Title>
          <Dialog.Description>
            If you enable notifications, you can receive updates through email.
          </Dialog.Description>
          <Dialog.Switch
            label='Allow notifications'
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Dialog.Button label='Cancel' onPress={notificationHidden} />
          <Dialog.Button label='Update' />
        </Dialog.Container>
      </View>

      {/* End Modals */}
      <View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={nameVisible}>
            <View style={styles.menuItem}>
              <Icon name='account-edit' color='#FF6347' size={25} />
              <Text style={styles.menuItemText}>Update name</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={passwordVisible}>
            <View style={styles.menuItem}>
              <Icon name='key' color='#FF6347' size={25} />
              <Text style={styles.menuItemText}>Change Password</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={notificationVisible}>
            <View style={styles.menuItem}>
              <Icon name='bell' color='#FF6347' size={25} />
              <Text style={styles.menuItemText}>Notifications</Text>
            </View>
          </TouchableRipple>
        </View>
      </View>
      <Toast position='bottom' bottomOffset={30} />
      {/* )} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: -20,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default SettingsScreen;
