import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import axios from "axios";

import { getToken } from "../config/store";

const LoadingScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    async function start() {
      axios
        .get("https://elearning-v6l2.onrender.com/api/v1/user/start")
        .then((res) => {
          console.log("Started!");
          setIsLoading(false);
          const token = getToken();
          if (token == null) return navigation.navigate("Welcome");
          else return navigation.navigate("Main");
        })
        .catch((err) => console.log(err));
    }
    start();
    // setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  //   return <YourApp />;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
};

export default LoadingScreen;
