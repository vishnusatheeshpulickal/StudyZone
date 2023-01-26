import * as SecureStore from "expo-secure-store";

async function storeToken(token) {
  await SecureStore.setItemAsync("Token", token);
}

async function storeName(name) {
  await SecureStore.setItemAsync("Name", name);
}

async function getName() {
  let result = await SecureStore.getItemAsync("Name");
  if (result) {
    return result;
  } else {
    return null;
  }
}

async function storeEmail(email) {
  await SecureStore.setItemAsync("Email", email);
}

async function getEmail() {
  let result = await SecureStore.getItemAsync("Email");
  if (result) {
    return result;
  } else {
    return null;
  }
}

async function getToken() {
  let result = await SecureStore.getItemAsync("Token");
  if (result) {
    return result;
  } else {
    return null;
  }
}

async function deleteToken() {
  let result = await SecureStore.deleteItemAsync("Token");
  if (result) {
    return result;
  } else {
    return null;
  }
}

module.exports = {
  storeToken,
  getToken,
  deleteToken,
  storeEmail,
  getEmail,
  storeName,
  getName,
};
