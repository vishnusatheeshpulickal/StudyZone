import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import axios from "axios";

import { getToken } from "../config/store";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    // async function start() {
    //   axios
    //     .get("")
    //     .then((res) => {
    //       console.log("Started!");
    //       // setIsLoading(false);
    //     })
    //     .catch((err) => console.log(err));
    // }
    // start();
    const token = await getToken();
    console.log(token);
    setTimeout(() => {
      setIsLoading(false);
    }, 120000);
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
