import * as SecureStore from "expo-secure-store";

async function storeToken(token) {
  await SecureStore.setItemAsync("Token", token);
}

async function getToken() {
  let result = await SecureStore.getItemAsync("Token");
  if (result) {
    return result;
  } else {
    return null;
  }
}

module.exports = { storeToken, getToken };
