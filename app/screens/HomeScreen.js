import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";

import CourseDetailed from "./CourseDetailed";
import { getName, getToken } from "../config/store";

// import ProgressCircle from "react-native-progress-circle";

import Card from "../components/Card";
import CourseList from "../components/CourseList";

function HomeScreen({ navigation }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, isSetLoading] = useState(true);
  const [name, setName] = useState();
  const [enrolled, setEnrolled] = useState([]);

  // const navigation = useNavigation();

  useEffect(async () => {
    const name = await getName();
    setName(name);
    axios
      .get("https://elearning-v6l2.onrender.com/api/v1/course/allCourses")
      .then((res) => {
        setCourses(res.data.data);
        isSetLoading(false);
        console.log(courses);
      })
      .catch((e) => console.log(e));

    const enrolled = async () => {
      const token = await getToken();
      isSetLoading(true);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios
        .get(
          "https://elearning-v6l2.onrender.com/api/v1/user/enrolledcourses",
          config
        )
        .then((res) => {
          console.log("successfully fetched data");
          isSetLoading(false);
          setEnrolled(res.data.data.courses);
        })
        .catch((err) => console.log(err));
    };
    enrolled();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/Home.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            alignItems: "flex-end",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 12,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#dla0a7",
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
            paddingHorizontal: 20,
            fontSize: 35,
            paddingTop: 40,
            color: "#fff",
            fontWeight: "800",
          }}
        >
          Welcome Back {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 12,
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder='Search for new knowledge'
            placeholderTextColor='#345c74'
            style={{
              fontSize: 12,
              width: 280,
              paddingHorizontal: 12,
            }}
          />
          <Image
            source={require("../assets/sear.png")}
            style={{ height: 14, width: 14 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff2f2",
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30,
          }}
        >
          <View>
            <Text
              style={{
                color: "#345c74",
                fontSize: 20,
                width: 250,
                paddingRight: 100,
              }}
            >
              Start Learning new staff
            </Text>
            {/* <TouchableOpacity
              onPress={() => console.log("pressed")}
              style={{
                flexDirection: "row",
                backgroundColor: "#f58084",
                alignItems: "center",
                marginTop: 20,
                width: 150,
                paddingVertical: 10,
                borderRadius: 14,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 12 }}>Categories</Text>
              <Image
                source={require("../assets/a3.png")}
                style={{ marginLeft: 20, width: 8, height: 8 }}
              />
            </TouchableOpacity> */}
          </View>
          <Image
            source={require("../assets/undraw.png")}
            style={{ marginLeft: -80, marginTop: 35 }}
          />
        </View>
        {enrolled ? (
          <View>
            <Text
              style={{
                color: "#345c74",
                fontSize: 20,
                paddingHorizontal: 20,
                marginTop: 20,
                marginBottom: 10,
                fontWeight: "800",
              }}
            >
              Courses in progress
            </Text>
            {enrolled.slice(0, 3).map((c) => (
              <CourseList
                img={require("../assets/sketch.png")}
                title={c.courseId.name}
                bg='#fef8e3'
                onPress={() =>
                  navigation.navigate("Course", { id: c.courseId._id })
                }
              />
            ))}
          </View>
        ) : (
          ""
        )}

        <Text
          style={{
            color: "#345c74",
            fontSize: 20,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
            fontWeight: "800",
          }}
        >
          Available Courses
        </Text>
        {isLoading ? (
          <Spinner visible={isLoading} textContent={"Loading..."} />
        ) : (
          courses.map((course) => (
            <Card
              onPress={() =>
                navigation.navigate("Course Details", { id: course._id })
              }
              id={course._id}
              title={course.name}
              description={
                course.description.length > 125
                  ? course.description.substring(0, 125) + "\n..."
                  : course.description
              }
            />
          ))
        )}
        {/* <TouchableOpacity
          style={{
            borderRadius: 20,
            marginHorizontal: 20,
          }}
        > */}
        {/* </TouchableOpacity> */}
      </ScrollView>
    </ImageBackground>
  );
}

export default HomeScreen;
