import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import React from "react";
import "../App.css";
import BaseLogin from "./BaseLogin";
import "../assets/patient.png";
import "../assets/bg1.jpg";

import AuthContext from "../store/auth-context";

const Login = () => {
  const history = useHistory();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const authCtx = useContext(AuthContext);

  const submitHandler = async (e) => {
    console.log("in submit handler");
    e.preventDefault();

    const res = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: username,
        password,
      }),
    });

    const data = await res.json();
    console.log("DATA HERE", data);

    if (data.status === 404 || !data) {
      window.alert("Invalid Login");
      //console.log("Invalid Login");
    } else if (data.status === 401) {
      console.log("Invalid password");
    } else {
      //console.log(data.data.user._id);
      console.log("Login Successfull");

      // <Link className="navbar-brand" to="/pdash">
      //   PatientDashoboard
      // </Link>;

      const temp = 10 * 60 * 1000;

      const expirationTime = new Date(new Date().getTime() + temp);
      authCtx.login(
        data.token,
        data.data.user._id,
        expirationTime.toISOString()
      );

      console.log(authCtx.isLoggedIn, data.user);
      //const isLoggedIn = authCtx.isLoggedIn;

      history.replace("/pdash");

      if (authCtx.isLoggedIn) {
        return <Redirect to="/home" />;
      }
    }

    // navigation.push("pdash");
  };

  return (
    <div id="login">
      <div className="container">
        <div className="form-section login-box row">
          <BaseLogin />

          <div className="col-sm-7 bg-color align-self-center">
            <div className="title">
              <h3>Sign into your account</h3>
            </div>

            <div className="login-inner">
              <form method="POST">
                <div className="form-group form-box">
                  <input
                    type="text"
                    id="email"
                    className="input-text"
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Email Address"
                  />
                  <i className="icon email"></i>
                </div>

                <div className="form-group form-box">
                  <input
                    type="password"
                    className="input-text"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <i className="icon lock"></i>
                </div>

                <div className="form-group">
                  {!authCtx.isLoggedIn && (
                    <button
                      className="btn primary-btn"
                      type="submit"
                      onClick={submitHandler}
                    >
                      Login
                    </button>
                  )}
                  {authCtx.isLoggedIn && (
                    <Link to="/pdash">
                      <button className="btn primary-btn">
                        Go to Dashboard
                      </button>
                    </Link>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
