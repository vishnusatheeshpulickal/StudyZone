import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

function CourseList({ img, title, bg, onPress, duration, lessons, data }) {
  console.log("img", data);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        backgroundColor: bg,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 10,
      }}
    >
      {/* <Image
        source={{
          uri: img,
        }}
        style={{ width: 40, height: 40 }}
      /> */}
      <View>
        <Text
          style={{
            color: "#345c74",
            fontSize: 13,
            paddingHorizontal: 20,
            width: 170,
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "#f58084", fontSize: 12, paddingHorizontal: 20 }}>
          {duration} minutes, {lessons} lessons
        </Text>
      </View>
      {/* <Text
        style={{
          color: "#345c74",
          fontSize: 13,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        25%
      </Text> */}
      {/* progress */}
    </TouchableOpacity>
  );
}

export default CourseList;
