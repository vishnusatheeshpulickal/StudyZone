import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

import Chapters from "./Chapters";

function Course({ route, navigation }) {
  const [course, setCourse] = useState();
  const [isLoading, isSetLoading] = useState(true);
  const [enrollLoading, setEnrollLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://elearning-v6l2.onrender.com/api/v1/course/course/${route.params.id}`
      )
      .then((res) => {
        setCourse(res.data.data);
        isSetLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <View>
      {isLoading ? (
        <Spinner visible={isLoading} textContent={"Loading..."} />
      ) : (
        <ImageBackground
          source={require("../assets/crs.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 20,
              paddingTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 13,
                borderRadius: 10,
                marginTop: 30,
                backgroundColor: "#9a3c7e",
              }}
            >
              <Image
                source={require("../assets/a1.png")}
                style={{ height: 15, width: 20 }}
              />
            </TouchableOpacity>
            {/* <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 13,
                borderRadius: 10,
                marginTop: 30,
                backgroundColor: "#9a3c7e",
                marginLeft: 240,
              }}
            >
              <Image
                source={require("../assets/hum.png")}
                style={{ height: 15, width: 20 }}
              />
            </View> */}
          </View>
          {/* <Image
            source={require("../assets/xd.png")}
            style={{
              height: 35,
              width: 35,
              alignSelf: "center",
              marginTop: 20,
            }}
          /> */}
          <Text
            style={{
              color: "#fff",
              fontSize: 35,
              width: 300,
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            {course.name}
          </Text>
          <Modalize
            handleStyle={{
              marginTop: 30,
              backgroundColor: "#e9e9e9",
              width: 80,
            }}
            modalStyle={{ borderTopLeftRadius: 60, borderTopRightRadius: 60 }}
            alwaysOpen={450}
            scrollViewProps={{ showsVerticalScrollIndicator: false }}
          >
            {/* <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 40 }}
        >
          <Image
            source={require("../assets/a2.png")}
            style={{
              height: 50,
              width: 50,
              borderWidth: 2,
              borderColor: "#f58084",
              borderRadius: 50,
            }}
          />
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ color: "#345c74", fontSize: 18 }}>Vishnu</Text>
            <Text style={{ color: "#f58084", fontSize: 12 }}>Developer</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff2f2",
              width: 40,
              height: 40,
              borderRadius: 40,
            }}
          >
            <Image source={require("../assets/a2.png")} />
          </View>
        </View> */}
            <View style={{ marginTop: 25 }}>
              {course.materials.map((chapter) => (
                <Chapters
                  key={chapter._id}
                  num={chapter.mId}
                  color='#fde6e6'
                  percent='25'
                  duration={chapter.courseLength + " Minutes"}
                  title={chapter.title}
                  onPress={() =>
                    navigation.navigate("Tutorial", {
                      id: route.params.id,
                      chapterId: chapter._id,
                    })
                  }
                />
              ))}
            </View>
            {/* <View
              style={{
                flexDirection: "row",
                paddingVertical: 5,
                backgroundColor: "#fff2f2",
                marginHorizontal: 20,
                paddingVertical: 15,
                alignItems: "center",
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#f58084", fontSize: 13, marginRight: 50 }}>
                Resume last lession
              </Text>
              <Image source={require("../assets/a2.png")} />
            </View> */}
          </Modalize>
        </ImageBackground>
      )}
    </View>
  );
}

export default Course;
