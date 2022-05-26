import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ViewProfile.css";
import img from "../../../../assets/nouser.png";

function createData(name, strength, form, perday) {
  return { name, strength, formtype, perday };
}

const formtype = ["Capsule", "Syrup", "Tablet", "Powder", "Ointment", "Cream"];

const medicine = [
  "Ativan",
  "Lisinopril",
  "Paracetymol",
  "Naproxen",
  "Diazapam",
  "Atenolol",
];

const rows = [
  createData("Ativan", 10, 6.0, 3),
  createData("Lisinopril", 5, 9.0, 2),
  createData("Paracetymol", 25, 16.0, 1),
  createData("Naproxen", 15, 3.7, 3),
  createData("Atenolol", 5, 16.0, 2),
];

const ViewProfile = (props) => {
  console.log("In My Profile of User");
  console.log(props.userData);

  const img = props.userData.photo;
  console.log(img);

  return (
    <div>
      <div className="container">
        <div className="main-profile-patient">
          <div className="row">
            <div className="col-md-4 mt-1">
              <div className="cardpatient text-center sidebar-patient">
                <div className="card-body">
                  <img
                    className="rounded-circle"
                    width="150"
                    src={img}
                    alt=""
                  />
                  <div className="mt-3">
                    <h3>{props.userData.name}</h3>
                    <h1 class="m-3 pt-3">About</h1>
                    <div className="card-body">
                      <div className="row">
                        <div className="text-main-patient">
                          {props.userData.email}
                        </div>
                      </div>
                      <div className="row">
                        <div className="text-main-patient">1234567890</div>
                      </div>
                      <div className="row">
                        <div className="text-main-patient">
                          16, Park Drive, Park Street
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <button className="btn  btn-success btn-lg ">
                        <a
                          style={{ underline: "none", color: "white" }}
                          href={`https://drive.google.com/drive/folders/1HccCNsmNfnVHaRCYtn9g60R1EVh0Pjf8`}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          View Documents
                        </a>
                      </button>
                      <button
                        className="col btn btn-success button"
                        onClick={props.onCloseHandler}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-1">
              <div className="cardpatient mb-3 content-patient">
                <h1 class="m-3 pt-3">Medical Information</h1>
                <div className="card-body">
                  <div className="row info-patient">
                    <div className="col-md">
                      <h5>Last Name </h5>
                    </div>
                    <div className="col-md text-secondary">
                      {/* Sample Last Name */}
                      Sadre
                    </div>
                    <div className="col-md">
                      <h5>First Name</h5>
                    </div>
                    <div className="col-md text-secondary">
                      {/* Sample First Name */}
                      Atharva
                    </div>
                  </div>
                  <div className="row info-patient">
                    <div className="col-md">
                      <h5>Blood Group</h5>
                    </div>
                    <div className="col-md text-secondary">
                      {/* Sample Blood Group */}
                      A+
                    </div>
                    <div className="col-md">
                      <h5>Age</h5>
                    </div>
                    <div className="col-md text-secondary">
                      {/* Sample Age */}
                      22
                    </div>
                  </div>
                  <div className="row info-patient">
                    <div className="col-md">
                      <h5>Height</h5>
                    </div>
                    <div className="col-md text-secondary">
                      {/* Sample Height  */}
                      {(Math.random() * (6 - 5) + 5).toFixed(2)} ft
                    </div>
                    <div className="col-md">
                      <h5>Weight</h5>
                    </div>
                    <div className="col-md text-secondary">
                      {/* Sample Weight{" "} */}
                      {(Math.random() * (100 - 60) + 60).toFixed(2)} kg
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardpatient mb-3 content-patient">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Medicine Name</TableCell>
                        <TableCell align="center">Strength(mg)</TableCell>
                        <TableCell align="center">Form</TableCell>
                        <TableCell align="center">Perday</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {
                              medicine[
                                Math.floor(Math.random() * medicine.length)
                              ]
                            }
                          </TableCell>
                          <TableCell align="center">{row.strength}</TableCell>
                          <TableCell align="center">
                            {
                              formtype[
                                Math.floor(Math.random() * formtype.length)
                              ]
                            }
                          </TableCell>
                          <TableCell align="center">{row.perday}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
