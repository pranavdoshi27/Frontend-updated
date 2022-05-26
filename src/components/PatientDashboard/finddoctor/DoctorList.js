import React from "react";
import Carddoc from "./Carddoc";
import "./Carddoc.css";

const DoctorList = (props) => {
  console.log("In Doctors List");
  console.log(props.doctorsArr);

  return (
    <>
      {props.doctorsArr.map((doctor) => {
        return (
          <div className="cardsdoc" style={{ display: "inline-block" }}>
            <Carddoc
              imagecover={doctor.imageCover}
              name={doctor.name}
              id={doctor.id}
              specialization={doctor.specializationName}
              rating={doctor.rating}
              fee={doctor.Fee}
              clickHandlerCard={props.clickHandlerCard}
            />
          </div>
        );
      })}
    </>
  );
};

export default DoctorList;
