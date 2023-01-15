async function storeToken(user) {
  try {
    await AsyncStorage.setItem("userToken", user);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

async function storeName(user) {
  try {
    await AsyncStorage.setItem("userName", user);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

async function getToken(user) {
  try {
    let userData = await AsyncStorage.getItem("userData");
    let data = JSON.parse(userData);
    console.log(data);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

module.exports = { storeToken, getToken, storeName };
