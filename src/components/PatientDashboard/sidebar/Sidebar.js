import "./Sidebar.css";
import logo from "../../../assets/logo.png";

import { Link } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../../../store/auth-context";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHanler = () => {
    authCtx.logout();
    //redirect : the user
  };

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Pharmas</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          {/* <a href="#">Dashboard</a> */}
          <Link to="/pdash/main">Dashboard</Link>
        </div>
        <h2>Options</h2>
        <div className="sidebar__link">
          <i className="fa fa-map-marker"></i>
          {/* <a href="#">Find Doctors</a> */}
          <Link to="/pdash/finddocs">Find Doctors</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-history"></i>
          {/* <a href="#">Activity</a> */}
          <Link to="/pdash/activity">Activity </Link>
        </div>

        {/* <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Calender</a>
        </div> */}

        <div className="sidebar__link">
          <i className="fa fa-cloud-upload"></i>
          {/* <a href="#">Upload Documents</a> */}
          <Link to="/pdash/updocs">Upload Documents</Link>
        </div>

        {/* <div className="sidebar__link">
          <i className="fa fa-question"></i>
          
          <Link to="/pdash/review">Add Review</Link>
        </div> */}

        <h2>Account Settings</h2>
        <div className="sidebar__link">
          <i className="fa fa-user"></i>
          {/* <a href="#">My Profile</a> */}
          <Link to="/pdash/myprof">My Profile</Link>
        </div>
        {/* <div className="sidebar__link">
          <i className="fa fa-address-card"></i>
          <a href="#">Change Address</a>
        </div> */}
        <div className="sidebar__logout">
          {/* <i className="fa fa-power-off"></i>
          <a href="#">Log out</a> */}
          <button className="btn primary-btn" onClick={logoutHanler}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
