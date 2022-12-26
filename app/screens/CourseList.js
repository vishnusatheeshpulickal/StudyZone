import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

function CourseList({ img, title, bg, onPress }) {
  return (
    <TouchableOpacity
      onPress={() => console.log("Course list clicked")}
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
      <Image source={img} style={{ width: 40, height: 40 }} />
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
          10 hours, 19 lessons
        </Text>
      </View>
      <Text
        style={{
          color: "#345c74",
          fontSize: 13,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        25%
      </Text>
      {/* progress */}
    </TouchableOpacity>
  );
}

export default CourseList;
