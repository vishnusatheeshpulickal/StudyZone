import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Toast from "react-native-toast-message";
import { deleteToken, getName, getEmail, getToken } from "../config/store";

Toast.show({
  type: "success",
  text1: "Message sent",
});

const SupportScreen = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);

  const handleSubmit = async () => {
    const token = await getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        `https://elearning-v6l2.onrender.com/api/v1/user/message`,
        {
          subject: subject,
          message: message,
        },
        config
      )
      .then((res) => {
        console.log("Message send");
        setSendMessage(true);
        setSubject("");
        setMessage("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      {/* {sendMessage ? <Toast position='bottom' bottomOffset={5} /> : ""} */}

      {/* <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder='Enter your name'
      /> */}
      <Text style={styles.label}>Subject</Text>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={(text) => setSubject(text)}
        placeholder='Enter Subject'
        // keyboardType='email-address'
      />
      <Text style={styles.label}>Message</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={(text) => setMessage(text)}
        placeholder='Enter your message'
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 15,
    marginTop: 20,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SupportScreen;
