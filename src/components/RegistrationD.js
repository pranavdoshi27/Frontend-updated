import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "../reg.css";

const Registration = () => {
  //const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    passwordConfirm: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    console.log("In post data");
    const { name, email, phonenumber, password, passwordConfirm } = user;

    console.log({
      name,
      email,
      phonenumber,
      password,
      passwordConfirm,
    });

    const res = await fetch("/api/v1/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        passwordConfirm,
      }),
    });

    console.log("here after response");

    const data = await res.json();
    console.log("DATA HERE", data);

    if (data.status === 404 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
    }

    // navigate.push("/lap");
  };

  return (
    <div className="bod">
      <div className="container container-reg">
        <div className="title">Registration</div>
        <div className="content">
          <form method="POST" action="/signup">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  name="name"
                  autocomplete="off"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  autoComplete="off"
                  value={user.phonenumber}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  name="passwordConfirm"
                  autoComplete="off"
                  placeholder="Confirm your password"
                  value={user.passwordConfirm}
                  onChange={handleInputs}
                  required
                />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>

            <div className="button">
              <input
                type="submit"
                name="signup"
                id="signup"
                value="Submit"
                onClick={PostData}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
