import "./Navbar.css";
import doctor from "../../../assets/doctor.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        {/* <a href="#" className="active_link">Dashboard</a> */}
        {/* <a href="#">Video Management</a>
        <a className="active_link" href="#">
          Admin
        </a> */}
      </div>
      <div className="navbar__right">
        {/* <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a> */}
        <a href="#!">
          <img width="30" src={doctor} alt="doctor" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
