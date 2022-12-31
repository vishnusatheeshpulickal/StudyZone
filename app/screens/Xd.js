import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";

function Xd() {
  return (
    <ImageBackground
      source={require("../assets/crs.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{ flexDirection: "row", width: "100%", paddingHorizontal: 20 }}
      >
        <TouchableOpacity
          onPress={() => console.log("pressed!")}
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
        <View
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
        </View>
      </View>
      <Image
        source={require("../assets/xd.png")}
        style={{ height: 35, width: 35, alignSelf: "center", marginTop: 20 }}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 35,
          width: 200,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Adobe XD
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 35,
          width: 200,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Essentials
      </Text>
      <Modalize
        handleStyle={{ marginTop: 30, backgroundColor: "#e9e9e9", width: 80 }}
        modalStyle={{ borderTopLeftRadius: 60, borderTopRightRadius: 60 }}
        alwaysOpen={510}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 40 }}
        >
          <Image
            source={require("../assets/2.jpg")}
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
        </View>
        <View></View>
      </Modalize>
    </ImageBackground>
  );
}

export default Xd;
