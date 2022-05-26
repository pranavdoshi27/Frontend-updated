import React from "react";
import MTable from "./MTable";
import ViewProfile from "./ViewProfile/ViewProfile";
import ChangeStatus from "./ChangeStatus/ChangeStatus";

import { useState } from "react";
import { Redirect } from "react-router-dom";

const Activity = (props) => {
  const [viewProfile, setViewProfile] = useState(false);
  const [viewstatusChanger, setViewstatusChanger] = useState(false);
  const [userData, setUserData] = useState({});
  const [appointmentId, setAppointmentId] = useState("");

  const onClickHandler = (userId) => {
    console.log("Inside Click Handler");
    const postdata = async (e) => {
      console.log("Inside the post data of Activity");
      const response = await fetch(`../api/v1/users/${userId}`);

      if (!response.ok) {
        throw new Error("Something went Wrong");
      }

      const data = await response.json();

      console.log(data);
      setUserData(data.data.user);

      setViewProfile(true);
    };

    postdata();
  };

  const onCloseHandler = () => {
    setViewProfile(false);
    setUserData({});
  };

  console.log("In Activity of Doctor");
  console.log(props.doctorData);

  const onClickChangeStatusHandler = (appointmentId) => {
    console.log(appointmentId);
    setAppointmentId(appointmentId);
    setViewstatusChanger(true);
  };

  const onSubmitStatusHandler = (prescribedData) => {
    console.log(prescribedData);

    const submitHandler = async () => {
      await fetch(`../api/v1/appointments/${appointmentId}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          status: true,
        }),
      })
        .then((response) => {
          console.log(response.status);
          return response.json();
        })
        .then((data) => console.log(data));
    };

    submitHandler();

    setViewstatusChanger(false);
  };

  return (
    <>
      {!viewProfile && !viewstatusChanger && (
        <MTable
          doctorAppointmentList={props.doctorData.appointments}
          onClickHandler={onClickHandler}
          onClickChangeStatusHandler={onClickChangeStatusHandler}
        />
      )}
      {viewProfile && (
        <ViewProfile userData={userData} onCloseHandler={onCloseHandler} />
      )}

      {viewstatusChanger && (
        <ChangeStatus onSubmitStatusHandler={onSubmitStatusHandler} />
      )}
    </>
  );
};

export default Activity;
