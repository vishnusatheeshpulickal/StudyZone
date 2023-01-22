import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import PurchaseButton from "../components/PurchaseButton";
import ViewButton from "../components/ViewButton";

function Card({ title, price, description, image, id, onPress }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/course.png")} style={styles.image} />
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.description}>{description}</AppText>
      <AppText style={styles.price}>Rs. 300</AppText>
      <ViewButton title='View' onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
    // padding: 10,
    marginTop: 10,
    backgroundColor: "#fff3f3",
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  title: {
    fontWeight: "800",
    textAlign: "center",
    color: "#345c74",
    fontSize: 20,
    marginTop: 10,
  },
  description: {
    color: "#345c74",
    marginTop: 10,
    textAlign: "center",
  },
  price: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 23,
  },
});

export default Card;
