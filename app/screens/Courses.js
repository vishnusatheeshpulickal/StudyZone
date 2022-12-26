import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";
import { Modalize } from "react-native-modalize";

import CourseList from "./CourseList";

function Courses() {
  return (
    <ImageBackground
      source={require("../assets/cat.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{ flexDirection: "row", width: "100%", paddingHorizontal: 20 }}
      >
        <TouchableOpacity
          onPress={() => console.log("Course clicked!")}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#8bbcdb",
          }}
        >
          <Image
            source={require("../assets/al.png")}
            style={{ width: 20, height: 15 }}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#8bbcdb",
          }}
        >
          <Image
            source={require("../assets/hum.png")}
            style={{ height: 15, width: 20 }}
          />
        </View>
      </View>
      <Text
        style={{
          color: "#fff",
          fontSize: 35,
          width: 200,
          alignSelf: "center",
          textAlign: "center",
          marginTop: 34,
        }}
      >
        UI/UX Courses
      </Text>
      <Modalize
        handleStyle={{ marginTop: 30, backgroundColor: "#e9e9e9", width: 80 }}
        modalStyle={{ borderTopLeftRadius: 60, borderTopRightRadius: 60 }}
        alwaysOpen={500}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View style={{ marginTop: 40 }}>
          <CourseList
            onPress={() => console.log("Adobe xd clicked!")}
            img={require("../assets/xd.png")}
            title='Adobe xd'
            bg='#fdddf3'
          />
          <CourseList
            onPress={() => console.log("sketch clicked!")}
            img={require("../assets/sketch.png")}
            title='Sketch'
            bg='#fef8e3'
          />
          <CourseList
            onPress={() => console.log("After effect clicked!")}
            img={require("../assets/ae.png")}
            title='After Effect'
            bg='#fcf2ff'
          />
          <CourseList
            img={require("../assets/xd.png")}
            title='Adobe xd'
            bg='#fdddf3'
          />
          <CourseList
            img={require("../assets/sketch.png")}
            title='Sketch'
            bg='#fef8e3'
          />
          <CourseList
            img={require("../assets/ae.png")}
            title='After Effect'
            bg='#fcf2ff'
          />
        </View>
      </Modalize>
    </ImageBackground>
  );
}

export default Courses;
