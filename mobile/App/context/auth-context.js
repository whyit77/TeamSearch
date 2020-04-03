import React from "react";

export default React.createContext({
  token: null,
  userId: null,
  Login: (token, userId, tokenExpiration) => {},
  logout: () => {}
});
