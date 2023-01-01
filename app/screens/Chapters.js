import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Chapters from "./Chapters";

function Chapters({ title, duration, percent, color, onPress, num }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: color,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 10 }}>{num}</Text>
      </View>
      <View>
        <Text
          style={{
            color: "#345c74",
            fontSize: 13,
            paddingLeft: 20,
            width: 180,
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "#f58084", fontSize: 12, paddingLeft: 20 }}>
          {duration}
        </Text>
      </View>
      <Text style={{ color: "#345c74", fontSize: 13, width: 50 }}>
        {percent} %
      </Text>
    </TouchableOpacity>
  );
}

export default Chapters;
