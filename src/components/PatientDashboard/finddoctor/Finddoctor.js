import React, { useState } from "react";
import "./Finddoctor.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import DoctorList from "./DoctorList";
import Booking from "./booking";

const Finddoctor = (props) => {
  console.log("In Finddoctor of User");
  console.log(props.userData);

  const [specialization, setSpecialization] = useState("");
  const [pincode, setPincode] = useState("");
  const [show, setShow] = useState(false);
  const [showbookingCard, setshowbookingCard] = useState(false);

  const [doctorsArr, setdoctorsArr] = useState([]);

  const [bookDoctorID, setbookDoctorID] = useState("");

  //let doctorsArr = [];

  const submitHandler = async (e) => {
    console.log("in submit handler of find doctor");
    e.preventDefault();

    let apicall = "";

    if (pincode === "" && specialization === "") {
      apicall = `../api/v1/doctors`;
    } else if (pincode === "") {
      apicall = `../api/v1/doctors?specializationName=${specialization}`;
    } else if (specialization === "") {
      apicall = `../api/v1/doctors?location=${pincode}`;
    } else {
      apicall = `../api/v1/doctors?location=${pincode}&specializationName=${specialization}`;
    }

    const response = await fetch(
      // `../api/v1/doctors?location=${pincode}&specializationName=${specialization}`
      apicall
    );
    if (!response.ok) {
      throw new Error("Something went Wrong");
    }

    console.log("here after response");

    const data = await response.json();
    console.log("Found doctors", data);

    //console.log(data.results);
    // console.log(data.data.doctors);
    //doctorsArr = data.data.doctors;
    setdoctorsArr(data.data.doctors);

    if (data.data.doctors) {
      setShow(true);
    }

    console.log(show);
  };

  // let content = <p>Found No Doctors</p>;

  const clickHandlerCard = (DoctorId) => {
    console.log("inside card click handler");
    console.log(DoctorId);
    setbookDoctorID(DoctorId);
    setshowbookingCard(true);
    setShow(false);
  };

  let content = "";

  if (show === true) {
    content = (
      <DoctorList doctorsArr={doctorsArr} clickHandlerCard={clickHandlerCard} />
    );
  }

  const clickHandlerBooking = (appointmentDetails) => {
    console.log(appointmentDetails);

    const submitFunction = async () => {
      const res = await fetch(`../api/v1/appointments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctor: bookDoctorID,
          user: props.userData.id,
          symptoms: appointmentDetails.symptoms,
          startAt: appointmentDetails.time,
        }),
      });

      const data = await res.json();
      console.log("DATA HERE", data);

      if (data.status === 404 || !data) {
        window.alert("Invalid Appointment");
        //console.log("Invalid Login");
      } else {
        //console.log(data.data.user._id);
        console.log("Appointment Successfull");
      }
    };

    submitFunction();

    setshowbookingCard(false);
  };

  return (
    <div className="finddoctor">
      <div className="finddoc__title">
        <div className="finddoc__greeting">
          <h1> Find a NearBy Doctor</h1>
          <p> Enter Required Location and Specialization of Doctor</p>
        </div>
      </div>
      <div className="searchInputs">
        <input
          type="text"
          className="searchbarfinddoctor"
          placeholder="Specialization"
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <input
          className="pincode"
          placeholder="Location"
          type="text"
          onChange={(e) => setPincode(e.target.value)}
        />

        <button className="buttonfinddoc" onClick={submitHandler}>
          Go
        </button>
      </div>

      <div>{content}</div>

      <div>
        {showbookingCard && (
          <Booking clickHandlerBooking={clickHandlerBooking} />
        )}
      </div>
    </div>
  );
};
export default Finddoctor;
