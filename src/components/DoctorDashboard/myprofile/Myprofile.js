import React from "react";

import "./Myprofile.css";
import img from "../../../assets/nouser.png";

const Myprofile = (props) => {
  //console.log("In My Profile of Doctor");
  //console.log(props.doctorData);
  // console.log(props.doctorData.hospitalsAffiliated);
  //console.log(props.doctorData.reviews);

  return (
    <div>
      <div className="container">
        <div className="main-profile">
          <div className="row">
            <div className="col-md-4 mt-1">
              <div className="cardmyprof text-center sidebarmyprof">
                <div className="card-body">
                  <img
                    className="rounded-circle"
                    width="150"
                    src={img}
                    alt=""
                  />
                  <div className="mt-3">
                    <h3>{props.doctorData.name}</h3>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h4>Hospitals Affiliated - </h4>
                    {/* <p>
                      Hospital1 <br /> Hospital2 <br />
                    </p> */}

                    {props.doctorData.hospitalsAffiliated.map((hosp) => {
                      return <p>{hosp}</p>;
                    })}
                    <div className="">
                      <button className="btn btn-link">
                        <a
                          style={{ underline: "none", color: "white" }}
                          href={`https://drive.google.com/drive/folders/1HccCNsmNfnVHaRCYtn9g60R1EVh0Pjf8`}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          View Documents
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-1">
              <div className="cardmyprof mb-3 content">
                <h1 class="m-3 pt-3">About</h1>
                <div className="cardmyprof-body">
                  <div className="row">
                    <div className="col-md-3">
                      <h5>Full Name</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {props.doctorData.name}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h5>Email</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {props.doctorData.email}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h5>Phone</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {props.doctorData.contactNumber}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h5>Specialization</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {props.doctorData.specializationName}
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardmyprof mb-3 content">
                <h1 className="m-3">Recent Reviews</h1>
                <div className="card-body">
                  {props.doctorData.reviews.map((review) => {
                    return (
                      <div className="row">
                        <div className="col-md-3">
                          {/* <h5>{review.id}</h5> */}
                          <h5>Patient Name</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                          {review.review}
                        </div>
                        <div className="reviews col-md-9 text-secondary">
                          Rating: {review.rating} 😀
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
