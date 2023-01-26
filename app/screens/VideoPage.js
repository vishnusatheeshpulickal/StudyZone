import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

import Chapters from "./Chapters";

const { width, height } = Dimensions.get("window");

function VideoPage({ route }) {
  const [course, setCourse] = useState();
  const [data, setData] = useState();
  const [isLoading, isSetLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://elearning-v6l2.onrender.com/api/v1/course/course/${route.params.id}`
      )
      .then(async (res) => {
        setCourse(
          res.data.data.materials.find((e) => e._id === route.params.chapterId)
        );
        isSetLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <View style={styles.container}>
      {console.log(course)}
      {isLoading ? (
        <Spinner visible={isLoading} textContent={"Loading..."} />
      ) : (
        <View>
          <StatusBar backgroundColor='#f58084' />
          <Video
            source={{
              uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-webm-file.webm",
            }}
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
            title={course.title}
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
      )}
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
