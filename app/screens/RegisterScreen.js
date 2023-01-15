import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import SuccessScreen from "./SuccessScreen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name").min(2),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password").min(4),
});

function RegisterScreen() {
  async function register({ name, email, password }) {
    axios
      .post("https://elearning-v6l2.onrender.com/api/v1/common/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) return <SuccessScreen />;
        // console.log(res.status);
      })
      .catch((e) => console.log(e));
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => register(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              icon='face-man'
              autoCorrect={false}
              placeholder='Name'
              onChangeText={handleChange("name")}
              textContentType='name'
            />
            <ErrorMessage error={errors.name} />
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
            <AppButton title='Register' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;
