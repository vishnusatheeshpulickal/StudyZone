import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Alert,
  BackHandler,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";

import { deleteToken, getName, getEmail, getToken } from "../config/store";

// import Share from "react-native-share";

// import files from "../assets/filesBase64";

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const token = await getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`https://elearning-v6l2.onrender.com/api/v1/user/user`, config)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

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
            // await navigation.dispatch(StackActions.popToTop());
            //   await navigation.push("Start");
            // await BackHandler.exitApp();
          },
        },
      ],
      { cancelable: false }
    );
  };
  //   const myCustomShare = async () => {
  //     const shareOptions = {
  //       message:
  //         "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
  //       url: files.appLogo,
  //       // urls: [files.image1, files.image2]
  //     };

  //     try {
  //       const ShareResponse = await Share.open(shareOptions);
  //       console.log(JSON.stringify(ShareResponse));
  //     } catch (error) {
  //       console.log("Error => ", error);
  //     }
  //   };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Spinner visible={isLoading} textContent={"Loading..."} />
      ) : (
        <View>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://res.cloudinary.com/daemiedup/image/upload/v1676138007/3135715-removebg-preview_yyack2.png",
                }}
                size={80}
              />
              <View style={{ marginLeft: 20 }}>
                <Title
                  style={[
                    styles.title,
                    {
                      marginTop: 15,
                      marginBottom: 5,
                    },
                  ]}
                >
                  {data ? data.name : ""}
                </Title>
                <Caption style={styles.caption}>
                  {data ? data.email : ""}
                </Caption>
              </View>
            </View>
          </View>

          {/* <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name='map-marker-radius' color='#777777' size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Kolkata, India
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name='phone' color='#777777' size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            +91-900000009
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name='email' color='#777777' size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            john@email.com
          </Text>
        </View>
      </View> */}

          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  borderRightColor: "#dddddd",
                  borderRightWidth: 1,
                },
              ]}
            >
              <Title>{data ? data.courses.length : "0"}</Title>
              <Caption>Courses</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>0</Title>
              <Caption>Certificates</Caption>
            </View>
          </View>

          <View style={styles.menuWrapper}>
            {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='play-circle' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>My Courses</Text>
          </View>
        </TouchableRipple> */}
            {/* <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name='medal' color='#FF6347' size={25} />
                <Text style={styles.menuItemText}>My Certificate</Text>
              </View>
            </TouchableRipple> */}
            {/* <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name='credit-card' color='#FF6347' size={25} />
                <Text style={styles.menuItemText}>Payments</Text>
              </View>
            </TouchableRipple> */}
            <TouchableRipple onPress={() => navigation.navigate("Support")}>
              <View style={styles.menuItem}>
                <Icon name='account-check-outline' color='#FF6347' size={25} />
                <Text style={styles.menuItemText}>Support</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => navigation.navigate("Settings")}>
              <View style={styles.menuItem}>
                <Icon name='tools' color='#FF6347' size={25} />
                <Text style={styles.menuItemText}>Settings</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => logout()}>
              <View style={styles.menuItem}>
                <Icon name='logout' color='#FF6347' size={25} />
                <Text style={styles.menuItemText}>Logout</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      )}
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
    marginTop: 10,
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

export default ProfileScreen;
