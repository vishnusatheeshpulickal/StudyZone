import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import RazorpayCheckout from "react-native-razorpay";

import { getToken } from "../config/store";
import ContentPoints from "../components/ContentPoints";
import PurchaseButton from "../components/PurchaseButton";

const { width, height } = Dimensions.get("window");

function CourseDetailed({ route, navigation }) {
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

  async function enrollCourse() {
    setEnrollLoading(true);
    const token = await getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // await axios
    //   .post(
    //     `https://elearning-v6l2.onrender.com/api/v1/user/pay`,
    //     { amount: course.price },
    //     config
    //   )
    //   .then((res) => {
    //     console.log("successfully created order");
    //     orderId = res.id;
    //     setEnrollLoading(false);
    //   })
    //   .catch((e) => console.log(e));

    // var options = {
    //   description: "Credits towards consultation",
    //   image: "https://i.imgur.com/3g7nmJC.png",
    //   currency: "INR",
    //   key: "rzp_test_xKzrW9GCWa2N5D",
    //   amount: "5000",
    //   name: "foo",
    //   order_id: orderId,
    //   prefill: {
    //     email: "void@razorpay.com",
    //     contact: "9191919191",
    //     name: "Razorpay Software",
    //   },
    //   theme: { color: "#F37254" },
    // };
    // await RazorpayCheckout.open(options)
    //   .then((data) => {
    //     // handle success
    //     alert(`Success: ${data.razorpay_payment_id}`);
    //   })
    //   .catch((error) => {
    //     // handle failure
    //     alert(`Error: ${error.code} | ${error.description}`);
    //   });

    axios
      .post(
        `https://elearning-v6l2.onrender.com/api/v1/user/enroll/${route.params.id}`,
        null,
        config
      )
      .then((res) => {
        console.log("successfully enrolled");
        setEnrollLoading(false);
        navigation.navigate("My Courses");
      })
      .catch((e) => console.log(e));
  }

  console.log(route.params.id);
  return (
    <View style={styles.container}>
      <ScrollView>
        {isLoading ? (
          <Spinner visible={isLoading} textContent={"Loading..."} />
        ) : (
          <View>
            <StatusBar backgroundColor='#f58084' />
            <Video
              source={{ uri: "https://www.youtube.com/watch?v=QXeEoD0pB3E" }}
              rate={1.0}
              isMuted={false}
              resizeMode='cover'
              shouldPlay={true}
              isLooping={false}
              useNativeControls
              style={styles.video}
            />
            <Text style={styles.title}>{course.name}</Text>

            <Text style={styles.description}>{course.description}</Text>

            <Text style={styles.contents}>What You'l Learn...</Text>
            <ContentPoints description={"chapter 1"} icon={"check"} />
            <ContentPoints description={"chapter 2"} icon={"check"} />
            <ContentPoints description={"chapter 3"} icon={"check"} />
            <ContentPoints description={"chapter 4"} icon={"check"} />
            <ContentPoints description={"chapter 5"} icon={"check"} />
            <ContentPoints description={"chapter 6"} icon={"check"} />

            <View style={{ marginTop: 20 }}>
              <Text style={styles.contents}>Course Curriculum</Text>
              <ContentPoints
                description={"Getting Started (32m)"}
                icon={"video-camera"}
              />
              <ContentPoints
                description={"Primitive Types (34m)"}
                icon={"video-camera"}
              />
              <ContentPoints
                description={"Control Flow (37m)"}
                icon={"video-camera"}
              />
              <ContentPoints
                description={"Control Flow (37m)"}
                icon={"video-camera"}
              />
              <ContentPoints
                description={"Control Flow (37m)"}
                icon={"video-camera"}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.contents}>
                By the end of this course, you'll be able to…
              </Text>
              <ContentPoints description={"chapter 1"} icon={"check"} />
              <ContentPoints description={"chapter 1"} icon={"check"} />
              <ContentPoints description={"chapter 1"} icon={"check"} />
              <ContentPoints description={"chapter 1"} icon={"check"} />
            </View>

            <View style={styles.moneyback}>
              <Text style={styles.moneybackTitle}>
                30-Day Money-Back Guarantee
              </Text>
              <Text style={styles.moneybackSubtitle}>Try it risk-free</Text>
              <Text style={styles.moneybackDescription}>
                I’m confident you’ll get everything you need from this course
                and be 100% satisfied. But in the unlikely event you decide it’s
                not for you just ask for a refund any time during the first 30
                days and you’ll get your money back with no questions asked.
              </Text>
              <Image
                source={require("../assets/Guaranteed.png")}
                style={styles.moneybacklogo}
              />
            </View>
            <PurchaseButton
              title={"Enroll Now"}
              onPress={() => enrollCourse()}
              loading={enrollLoading}
            />
          </View>
        )}
      </ScrollView>
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
  title: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    color: "#345c74",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    color: "#345c74",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
  },
  contents: {
    textAlign: "justify",
    color: "#345c74",
    fontSize: 17,
    fontWeight: "700",
    paddingLeft: 15,
  },
  moneybacklogo: {
    width: 80,
    height: 80,
  },
  moneyback: {
    alignItems: "center",
    marginTop: 30,
  },
  moneybackTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#345c74",
  },
  moneybackSubtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#345c74",
  },
  moneybackDescription: {
    fontSize: 14,
    fontWeight: "500",
    color: "#345c74",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 5,
  },
});
export default CourseDetailed;
