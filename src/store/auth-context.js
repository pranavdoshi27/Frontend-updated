import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  userId: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateReaminingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  console.log(currentTime, adjExpirationTime);
  const remainingDuration = adjExpirationTime - currentTime;
  console.log(remainingDuration);
  return remainingDuration;
};

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storeduserId = localStorage.getItem("userId");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateReaminingTime(storedExpirationDate);

  if (remainingTime <= 360000) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    userId: storeduserId,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();

  let initialToken, initialuserId;
  if (tokenData) {
    initialToken = tokenData.token;
    initialuserId = tokenData.userId;
  }

  const [token, setToken] = useState(initialToken);
  const [userId, setuserId] = useState(initialuserId);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, userId, expirationTime) => {
    setToken(token);
    setuserId(userId);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateReaminingTime(expirationTime);
    console.log(remainingTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    userId: userId,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
