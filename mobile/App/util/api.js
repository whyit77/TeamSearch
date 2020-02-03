<<<<<<< HEAD:mobile/App/util/api.js
const BASE_URL = "http://10.30.140.146:3000"; // CHECK YOUR IP ADDRESS AND REPLACE
=======
const BASE_URL = "http://192.168.0.152"; // CHECK YOUR IP ADDRESS AND REPLACE
>>>>>>> sprint2/feature/cluna/component-header:mobile/util/api.js

export const geoFetch = (path, options = {}) => {
  return fetch(`${BASE_URL}/api${path}`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Something went wrong... please try again.");
    })
    .catch(error => {
      // catch global errors
      console.warn("ERROR: ", `${BASE_URL}/api${path}`, error);

      throw new Error(error);
    });
};
