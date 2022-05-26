import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "./store/auth-context";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import LoginD from "./components/LoginD";
import RegistrationP from "./components/RegistrationP";
import RegistrationD from "./components/RegistrationD";
import PatientDashboard from "./components/PatientDashboard/PatientDashboard";
import DoctorsDashboard from "./components/DoctorDashboard/DoctorDashboard";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {/* <Navbar /> */}

      {!authCtx.isLoggedIn && <Navbar />}

      <div>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path={"/home"}>
            <Home />
          </Route>
          <Route path={"/lap"}>
            <Login />
          </Route>

          <Route path={"/lad"}>
            <LoginD />
          </Route>

          <Route path={"/regp"}>
            <RegistrationP />
          </Route>

          <Route path={"/regd"}>
            <RegistrationD />
          </Route>

          <Route path="/pdash">
            {authCtx.isLoggedIn && <PatientDashboard />}
            {!authCtx.isLoggedIn && <Redirect to="/lap" />}
            {/* <PatientDashboard /> */}
          </Route>

          <Route path="/ddash">
            {authCtx.isLoggedIn && <DoctorsDashboard />}
            {!authCtx.isLoggedIn && <Redirect to="/lad" />}
            {/* <PatientDashboard /> */}
          </Route>

          {/* <Route exact path="/home" element={<Home />} />
          <Route exact path="/lap" element={<Login />} />
          <Route exact path="/lad" element={<LoginD />} />
          <Route exact path="/regp" element={<RegistrationP />} />
          <Route exact path="/regd" element={<RegistrationD />} />
          <Route exact path="/gd" element={<GetAllDoctors />} />
          <Route exact path="/pdash" element={<PatientDashboard />} /> */}

          {
            <Route path="*">
              <Redirect to="/" />
            </Route>
          }
        </Switch>
      </div>
    </>
  );
};

export default App;
