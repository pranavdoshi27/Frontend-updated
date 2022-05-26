import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import "../App.css";
import BaseLoginD from "./BaseLoginD";
import "../assets/doctor.png";
import "../assets/bg.jpg";

import AuthContext from "../store/auth-context";

const LoginD = () => {
  const history = useHistory();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  //console.log(username, password);
  const authCtx = useContext(AuthContext);

  const submitHandler = async (e) => {
    console.log("in submit handler");
    e.preventDefault();

    const res = await fetch("api/v1/doctors/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: username,
        password,
      }),
    });

    console.log("here after response");

    const data = await res.json();
    console.log("DATA HERE", data);

    if (data.status === 404 || !data) {
      window.alert("Invalid Login");
      console.log("Invalid Login");
    } else if (data.status === 401) {
      console.log("Invalid password");
    } else {
      //window.alert("Login Successfull");
      console.log("Login Successfull");

      const temp = 10 * 60 * 1000;

      const expirationTime = new Date(new Date().getTime() + temp);
      authCtx.login(
        data.token,
        data.data.doctor._id,
        expirationTime.toISOString()
      );

      console.log(authCtx.isLoggedIn, data.doctor);

      history.replace("/ddash");
    }

    //navigate.push("/lap");
  };

  return (
    <div>
      <div id="loginD">
        <div className="container">
          <div className="form-section login-box row">
            <BaseLoginD />

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
    </div>
  );
};

export default LoginD;
