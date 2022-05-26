import "./Main.css";
import hellod from "../../../assets/hellod.svg";
// import Chart from "../charts/Chart";

const Main = (props) => {
  console.log("In Main of Doctor");
  console.log(props.doctorData);
  const doctorName = props.doctorData.name;
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hellod} alt="hellod" />
          <div className="main__greeting">
            <h1>Hello Doctor</h1>
            <p>Welcome to your dashboard Dr. {doctorName}</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Total Patients</p>
              <span className="font-bold text-title">56</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Upcoming Appointments</p>
              <span className="font-bold text-title">6</span>
            </div>
          </div>

          {/* <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true">
            </i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div> */}

          {/* <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Reviews</p>
              <span className="font-bold text-title">15</span>
            </div>
          </div> */}
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}

        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
