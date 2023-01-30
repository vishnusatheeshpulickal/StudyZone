import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "react-native-toast-message";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import { storeToken, storeName, storeEmail } from "../config/store";
import SuccessScreen from "./SuccessScreen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password").min(4),
});

function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [success, setSuccess] = useState(false);

  Toast.show({
    type: "error",
    text1: "Invalid username or password",
  });

  async function login({ email, password }) {
    setLoading(true);
    axios
      .post("https://elearning-v6l2.onrender.com/api/v1/common/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        storeToken(res.data.token);
        storeEmail(res.data.email);
        storeName(res.data.name);
        navigation.navigate("Main");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setLoading(false);
          setInvalidCredentials(true);
        }
      });
  }
  return (
    <Screen style={styles.container}>
      {invalidCredentials ? <Toast position='top' topOffset={30} /> : ""}
      {/* <Toast position='top' topOffset={10} /> */}
      <View style={{ marginTop: 90 }}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => login(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <AppTextInput
                autoCapitalize='none'
                icon='email'
                keyboardType='email-address'
                autoCorrect={false}
                placeholder='Email'
                onChangeText={handleChange("email")}
                textContentType='emailAddress'
              />
              <ErrorMessage error={errors.email} />
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                onChangeText={handleChange("password")}
                placeholder='Password'
                secureTextEntry
                textContentType='password'
              />
              <ErrorMessage error={errors.password} />
              <AppButton
                title='Login'
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
