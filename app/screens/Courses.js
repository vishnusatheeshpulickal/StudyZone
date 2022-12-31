import React, { useRef } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  ScrollView,
} from "react-native";
import { Modalize } from "react-native-modalize";

import CourseList from "./CourseList";

function Courses() {
  // const modalRef = React.createRef();

  return (
    <ImageBackground
      source={require("../assets/cat.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => console.log("home")}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#8bbcdb",
          }}
        >
          <Image
            source={require("../assets/a1.png")}
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
            marginLeft: 240,
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
          color: "#FFF",
          fontSize: 35,
          fontWeight: "800",
          width: 200,
          alignSelf: "center",
          textAlign: "center",
          marginTop: 34,
        }}
      >
        UI/UX Cources
      </Text>
      <Modal visible transparent>
        <Modalize
          handleStyle={{
            marginTop: 30,
            backgroundColor: "#e9e9e9",
            width: 80,
          }}
          modalStyle={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
          alwaysOpen={500}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          //   disableScrollIfPossible={false}
          //   panGestureEnabled={true}
          //   tapGestureEnabled={true}
        >
          <View style={{ marginTop: 40 }}>
            {/* <ScrollView> */}
            <CourseList
              onPress={() => this.props.navigation.navigate("Xd")}
              img={require("../assets/xd.png")}
              title='Adobe XD Prototyping'
              bg='#fdddf3'
            />
            <CourseList
              img={require("../assets/sketch.png")}
              title='Sketch shortcuts and tricks'
              bg='#fef8e3'
            />
            <CourseList
              img={require("../assets/ae.png")}
              title='UI Motion Design in After Effects'
              bg='#fcf2ff'
            />
            <CourseList
              img={require("../assets/f.png")}
              title='Figma Essentials'
              bg='#fff0ee'
            />
            <CourseList
              img={require("../assets/ps.png")}
              title='Adobe Photoshop. Retouching'
              bg='#fdddf3'
            />
            <CourseList
              img={require("../assets/sketch.png")}
              title='Sketch shortcuts and tricks'
              bg='#fef8e3'
            />
            <CourseList
              img={require("../assets/ae.png")}
              title='UI Motion Design in After Effects'
              bg='#fcf2ff'
            />
            <CourseList
              img={require("../assets/ae.png")}
              title='UI Motion Design in After Effects'
              bg='#fcf2ff'
            />
            <CourseList
              img={require("../assets/ae.png")}
              title='UI Motion Design in After Effects'
              bg='#fcf2ff'
            />
            <CourseList
              img={require("../assets/ae.png")}
              title='UI Motion Design in After Effects'
              bg='#fcf2ff'
            />
            {/* </ScrollView> */}
          </View>
        </Modalize>
      </Modal>
    </ImageBackground>
  );
}

export default Courses;
