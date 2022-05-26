import React, { useState } from "react";

const GetAllDoctors = () => {
  console.log("Get All Doctors");
  const postData = async (e) => {
    const response = await fetch("/api/v1/doctors/61eae1a95e6b773abc494358");

    const data = await response.json();

    console.log(data);
  };
  postData();

  console.log("post section finished");

  return <div></div>;
};
export default GetAllDoctors;
