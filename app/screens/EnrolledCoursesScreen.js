import React, { useEffect, useState } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

import CourseList from "../components/CourseList";
import { getToken } from "../config/store";

function EnrolledCoursesScreen({ navigation }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  let link = "";

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      start();
      // changeColor("green");
      setRefreshing(false);
    }, 2000);
  };

  useEffect(async () => {
    const token = await getToken();
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
        setLoading(false);
        setCourses(res.data.data.courses);
      })
      .catch((err) => console.log(err));
  }, []);

  const start = async () => {
    const token = await getToken();
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
        setLoading(false);
        setCourses(res.data.data.courses);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loading ? (
          <Spinner visible={loading} textContent={"Loading..."} />
        ) : (
          <View>
            {courses.map((course) => (
              <CourseList
                title={course.courseId.name}
                img={course.courseId.courseLogo}
                data={course.courseId}
                bg='#fcf2ff'
                duration={course.courseId.courseTime}
                lessons={course.courseId.lessons}
                onPress={() =>
                  navigation.navigate("Course", { id: course.courseId._id })
                }
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default EnrolledCoursesScreen;
