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
import { ScrollView } from "react-native-gesture-handler";

import ContentPoints from "../components/ContentPoints";
import PurchaseButton from "../components/PurchaseButton";

const { width, height } = Dimensions.get("window");

function CourseDetailed({ id }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor='#f58084' />
        <Video
          source={require("../assets/maintro.mp4")}
          rate={1.0}
          isMuted={false}
          resizeMode='cover'
          shouldPlay={true}
          isLooping={false}
          useNativeControls
          style={styles.video}
        />
        <Text style={styles.title}>React</Text>

        <Text style={styles.description}>
          More often than not, you will need to make network requests to an API
          when building a web or mobile application. You can make these network
          requests to authenticate a user, update a resource, or retrieve a
          resource from your own server or third party APIs. The Fetch API comes
          in handy if you want to make API requests in a browser environment.
        </Text>

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
          <Text style={styles.moneybackTitle}>30-Day Money-Back Guarantee</Text>
          <Text style={styles.moneybackSubtitle}>Try it risk-free</Text>
          <Text style={styles.moneybackDescription}>
            I’m confident you’ll get everything you need from this course and be
            100% satisfied. But in the unlikely event you decide it’s not for
            you just ask for a refund any time during the first 30 days and
            you’ll get your money back with no questions asked.
          </Text>
          <Image
            source={require("../assets/Guaranteed.png")}
            style={styles.moneybacklogo}
          />
        </View>
        <PurchaseButton title={"Enroll Now"} />
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
