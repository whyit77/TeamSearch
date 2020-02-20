import { AsyncStorage } from "react-native";

const BASE_URL = "http://172.17.56.72:3000"; // CHECK YOUR IP ADDRESS AND REPLACE
const AUTH_TOKEN = "TeamSearch::AUTH_TOKEN";

// save user login info
export const saveAuthToken = token => {
  // sign out
  if (!token) {
    return AsyncStorage.removeItem(AUTH_TOKEN);
  }

  return AsyncStorage.setItem(AUTH_TOKEN, token);
};

// check if login info saved before
export const hasAuthToken = () => {
  return AsyncStorage.getItem(AUTH_TOKEN).then(token => {
    if (token) {
      return true;
    }

    return false;
  });
};

export const TSApi = (path, options = {}) => {
  return AsyncStorage.getItem(AUTH_TOKEN).then(token => {
    const completeOptions = {
      // json type
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json"
      }
    };

    // add token info to get access to app
    if (token) {
      completeOptions.headers.authorization = `Bearer ${token}`;
    }

    return fetch(`${BASE_URL}/pages/api${path}`, completeOptions).then(
      async res => {
        const responseJson = await res.json();

        if (res.ok) {
          return responseJson;
        }

        // if unauthorized
        if (res.status === 401) {
          navigation.navigate("Login"); // go to login screen
          saveAuthToken(); // remove auth token
        }

        throw new Error(responseJson.error);
      }
    );
  });
};
