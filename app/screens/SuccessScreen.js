import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  Animated,
  Easing,
} from "react-native";

const SuccessScreen = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 800,
        easing: Easing.linear,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
      }),
    ]).start();

    setTimeout(() => navigation.navigate("Login"), 1900);
  }, []);

  const opacity = fadeAnim;
  const scale = scaleAnim;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.overlay, { opacity }]}>
        <Animated.Image
          style={[styles.image, { transform: [{ scale }] }]}
          source={require("../assets/success.gif")}
        />
        <Text style={styles.text}>Success!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default SuccessScreen;
