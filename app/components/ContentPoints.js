import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function ContentPoints({ description, icon }) {
  return (
    <View style={styles.content}>
      <FontAwesome name={icon} backgroundColor='#345c74' />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontWeight: "700",
    paddingLeft: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    marginLeft: 10,
    fontSize: 16,
    color: "#345c74",
    fontWeight: "500",
  },
});

export default ContentPoints;
