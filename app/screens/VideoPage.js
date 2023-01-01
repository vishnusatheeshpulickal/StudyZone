import React from "react";
import {
  StyleSheet,
  StatusBar,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";

import Chapters from "./Chapters";

const { width, height } = Dimensions.get("window");

function VideoPage() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#f58084' />
      <Video
        source={require("../assets/maintro.mp4")}
        rate={1.0}
        isMuted={false}
        resizeMode='cover'
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
      <Chapters
        num={1}
        color='#fde6e6'
        percent='25'
        duration='2 hrs'
        title='introduction'
      />
      <Text
        style={{
          textAlign: "justify",
          color: "#345c74",
          paddingLeft: 42,
          paddingRight: 35,
        }}
      >
        User experience
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          backgroundColor: "#f58084",
          marginHorizontal: 40,
          paddingVertical: 15,
          alignItems: "center",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 15, marginRight: 50 }}>
          Read more
        </Text>
        <Image source={require("../assets/a3.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: width,
    height: height / 3,
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
export default VideoPage;
