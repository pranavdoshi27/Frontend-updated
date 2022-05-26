import React from "react";
import "./Carddoc.css";

import nouser from "../../../assets/nouser.png";

class Carddoc extends React.Component {
  render() {
    return (
      <div className="carddoc">
        <img
          src={
            this.props.imagecover !== "dummy.jpg"
              ? this.props.imagecover
              : nouser
          }
          alt={"Profile"}
        />
        <div className="card-body">
          <h2>{this.props.name}</h2>
          <p>
            Specialization: {this.props.specialization}
            <br />
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>
          <h5>Ratings: {this.props.rating}</h5>
          <h5>Fees: {this.props.fee} </h5>
        </div>
        <div className="carddoc-btn">View Profile</div>
        <button
          className="carddoc-btn2"
          onClick={(e) => {
            e.preventDefault();
            this.props.clickHandlerCard(this.props.id);
          }}
        >
          Book Appointment
        </button>
      </div>
    );
  }
}

export default Carddoc;
