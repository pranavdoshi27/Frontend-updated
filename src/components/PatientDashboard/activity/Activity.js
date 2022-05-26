import React from "react";
import MTable from "./MTable";
import Review from "./Review";

import { useState } from "react";

const Activity = (props) => {
  console.log("In Activity Patient");
  console.log(props.userData);

  const [showreview, setShowreview] = useState(false);
  const [doctorId, setDoctorId] = useState("");

  const reviewHandler = (doctorId) => {
    setDoctorId(doctorId);
    setShowreview(true);
  };

  const reviewHandlerAfter = (show) => {
    setShowreview(show);
  };

  console.log("Doctor Id after click", doctorId);

  var component = "";

  if (showreview === false) {
    component = (
      <MTable
        doctorappointList={props.userData.appointments}
        reviewHandler={reviewHandler}
      />
    );
  } else {
    component = (
      <Review
        doctorId={doctorId}
        userId={props.userData.id}
        reviewHandlerAfter={reviewHandlerAfter}
      />
    );
  }

  return <div>{component}</div>;
};

export default Activity;
