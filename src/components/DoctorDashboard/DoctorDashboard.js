import { useState, useContext, useEffect } from "react";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
//import Calender from "./calender/calender";

import Myprofile from "./myprofile/Myprofile";
import Activity from "./activity/Activity";
//import Uploaddocuments from "./uploaddocuments/Uploaddocuments";

import UploadDocuments from "../PatientDashboard/uploaddocuments/UploadDocuments";

import { Switch, Route, Redirect } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import "./DoctorDashboard.css";

const DoctorsDashboard = () => {
  const authCtx = useContext(AuthContext);
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});

  console.log("Doctor Dash Board");

  useEffect(() => {
    const postData = async (e) => {
      console.log("Async fn");
      const response = await fetch(`api/v1/doctors/${authCtx.userId}`);

      if (!response.ok) {
        throw new Error("Something went Wrong");
      }

      const data = await response.json();

      console.log("In Dashboard: ", data.data.doctor);
      setUserData(data.data.doctor);
    };

    postData().catch((error) => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="containerd">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      {/* <Main doctorData={userData} /> */}

      <Switch>
        <Route path={"/ddash/main"} exact>
          <Main doctorData={userData} />
        </Route>

        <Route path={"/ddash/myprof"} exact>
          <Myprofile doctorData={userData} />
        </Route>

        <Route path={"/ddash/activity"} exact>
          <Activity doctorData={userData} />
        </Route>

        <Route path={"/ddash/updocs"} exact>
          <UploadDocuments doctorData={userData} />
        </Route>
      </Switch>
    </div>
  );
};

export default DoctorsDashboard;
