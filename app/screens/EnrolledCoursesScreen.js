import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

import CourseList from "../components/CourseList";
import { getToken } from "../config/store";

function EnrolledCoursesScreen({ navigation }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <View>
      <ScrollView>
        {loading ? (
          <Spinner visible={loading} textContent={"Loading..."} />
        ) : (
          <View>
            {courses.map((course) => (
              <CourseList
                title={course.courseId.name}
                img={require("../assets/xd.png")}
                bg='#fcf2ff'
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
