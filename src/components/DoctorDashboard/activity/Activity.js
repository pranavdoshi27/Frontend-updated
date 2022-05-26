import React from "react";
import MTable from "./MTable";
import ViewProfile from "./ViewProfile/ViewProfile";
import { useState } from "react";

const Activity = (props) => {
  const [viewProfile, setViewProfile] = useState(false);
  const [userData, setUserData] = useState({});

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

  return (
    <>
      {!viewProfile && (
        <MTable
          doctorAppointmentList={props.doctorData.appointments}
          onClickHandler={onClickHandler}
        />
      )}
      {viewProfile && (
        <ViewProfile userData={userData} onCloseHandler={onCloseHandler} />
      )}
    </>
  );
};

export default Activity;
