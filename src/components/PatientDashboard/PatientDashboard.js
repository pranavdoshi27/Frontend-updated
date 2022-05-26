import { useEffect, useState, useContext } from "react";

import Main from "./Main/Main";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import AuthContext from "../../store/auth-context";

import { Switch, Route, Redirect } from "react-router-dom";

import Myprofile from "./myprofile/Myprofile";
import Finddoctor from "./finddoctor/Finddoctor";
import UploadDocuments from "./uploaddocuments/UploadDocuments";
import Activity from "./activity/Activity";

import "./PatientDashboard.css";

const PatientDashboard = () => {
  const authCtx = useContext(AuthContext);
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  //console.log(authCtx.userId);

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const postData = async (e) => {
      const response = await fetch(`api/v1/users/${authCtx.userId}`);

      if (!response.ok) {
        throw new Error("Something went Wrong");
      }

      const data = await response.json();

      console.log(data);
      setUserData(data.data.user);
    };

    postData().catch((error) => {
      setIsLoading(false);
    });
  }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  console.log(userData);

  return (
    <div className="containerp">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      {/* <Main userData={userData} /> */}

      <Switch>
        <Route path={"/pdash/main"} exact>
          <Main userData={userData} />
        </Route>

        <Route path={"/pdash/myprof"} exact>
          <Myprofile userData={userData} />
        </Route>

        <Route path={"/pdash/finddocs"} exact>
          <Finddoctor userData={userData} />
        </Route>

        <Route path={"/pdash/updocs"} exact>
          <UploadDocuments userData={userData} />
        </Route>

        <Route path={"/pdash/activity"} exact>
          <Activity userData={userData} />
        </Route>

        {/* <Route path={"/pdash/review"} exact>
          <review userData={userData} />
        </Route> */}

        {/*
        <Route path={"/pdash/activity"} exact>
          <Activity doctorData={userData} />
        </Route>

        <Route path={"/pdash/updocs"} exact>
          <Uploaddocuments doctorData={userData} />
        </Route> */}
      </Switch>
    </div>
  );
};

export default PatientDashboard;
