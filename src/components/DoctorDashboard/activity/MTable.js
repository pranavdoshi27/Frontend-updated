import faker from "faker";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "150px 350px",
    maxWidth: 1500,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: "red",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    background: "linear-gradient(135deg, #FF7272, red)",
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

var symptoms = ["Fever", "Headache", "Nausea"];

let USERS = [],
  STATUSES = ["Active", "Completed"];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    Disease: symptoms[Math.floor(Math.random() * symptoms.length)],
    company: faker.company.companyName(),
    joinDate: faker.date.past().toLocaleDateString("en-US"),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

function MTable(props) {
  console.log(props.doctorAppointmentList);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log(classes.tableContainer);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Symptoms</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Appointment Date
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Change Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {USERS.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar alt={row.name} src="." className={classes.avatar} />
                  </Grid>
                  <Grid item lg={10}>
                    <Typography className={classes.name}>{row.name}</Typography>
                    <Typography color="textSecondary" variant="body2">
                      {row.email}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {row.phone}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="subtitle2">
                  {row.Disease}
                </Typography>
              </TableCell>
              <TableCell>{row.joinDate}</TableCell>
              <TableCell>
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      (row.status === "Active" && "green") ||
                      (row.status === "Completed" && "Orange"),
                  }}
                >
                  {row.status}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="subtitle2">
                  {row.Disease}
                  <div className="btn btn-success">Change Status</div>
                </Typography>
              </TableCell>
            </TableRow>
          ))} */}

          {props.doctorAppointmentList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Grid container>
                    <Grid item lg={2}>
                      <Avatar
                        alt={row.name}
                        src="."
                        className={classes.avatar}
                      />
                    </Grid>
                    <Grid item lg={10}>
                      <Typography className={classes.name}>
                        {row.user.name}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {row.user.email}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {row.user.contactNumber}
                      </Typography>
                    </Grid>
                    <Grid item lg={30}>
                      <button
                        className="btn btn-warning"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          props.onClickHandler(row.user.id);
                        }}
                      >
                        {" "}
                        View Details
                      </button>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {row.symptoms}
                  </Typography>
                </TableCell>
                <TableCell>{row.startAt.substring(0, 10)}</TableCell>
                <TableCell>
                  <Typography
                    className={classes.status}
                    style={{
                      backgroundColor:
                        (row.status === true && "green") ||
                        (row.status === false && "Orange"),
                    }}
                  >
                    {row.status ? "Completed" : "Active"}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    <div className="btn btn-success">Change Status</div>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={props.doctorAppointmentList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default MTable;
