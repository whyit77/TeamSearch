const BASE_URL = "http://10.30.136.110:3000"; // CHECK YOUR IP ADDRESS AND REPLACE

// import { parse } from "himalaya";

import { AsyncStorage } from "react-native";
// import { navigate } from "./NavigationService";

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
  // this.setState = { html: "<div>Example HTML content</div>" };
  // const html = this.state.html;
  // const json = parse(html);
  // alert(JSON.stringify(json));
  console.log("hi");
  return AsyncStorage.getItem(AUTH_TOKEN).then(token => {
    const completeOptions = {
      // json type
      ...options,
      headers: {
        ...options.headers,
        // Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    // add token info to get restaurant/review info
    if (token) {
      completeOptions.headers.authorization = `Bearer ${token}`;
    }
    console.log("0");

    return fetch(`${BASE_URL}/api${path}`, completeOptions).then(async res => {
      console.log("0.5");

      const data1 = await res.json();
      // const d1 = parse(data1);
      // data1 = JSON.stringify(data1);
      // console.log(d1);

      // const data2 = data1;
      // data2 = data2.replace(/\r?\n/g, "").replace(/[\u0080-\uFFFF]/g, "");
      // console.log(data2);

      const data2 = JSON.stringify(data1);

      console.log("0.75");
      const responseJson = JSON.parse(data2);
      console.log("1");
      if (res.ok) {
        console.log("2");
        return responseJson;
      }

      // if unauthorized
      if (res.status === 401) {
        this.props.navigation.navigate("Login"); // go to sign-in screen
        saveAuthToken(); // remove auth token
      }
      console.log("3");
      throw new Error(responseJson.error);
    });
  });
};
