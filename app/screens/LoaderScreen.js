import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 120000);
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
