import React from "react";
import "../home.css";
import h1 from "../assets/home.png";
import h2 from "../assets/home2.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container home">
        <div className="row min-vh-200 align-items-center text-center text-md-left">
          <div className="col-md-6 pr-md-5">
            <img src={h1} alt="" width="100%" />
          </div>

          <div className="col-md-6 pr-md-5 content">
            <h1>
              <span>Stay</span> safe, <span>Stay</span> Healthy.
            </h1>
            <h3>Caring for you.</h3>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-md-6 content">
              <div className="box">
                <h3>
                  {" "}
                  <i class="far fa-calendar-alt"></i> Appointment Scheduling
                </h3>
                <p>Schedule appointment with Doctors.</p>
              </div>
              <div className="box">
                <h3>
                  {" "}
                  <i class="fas fa-capsules"></i> Medicine Management
                </h3>
                <p>Manage Your Personal Medical Records.</p>
              </div>
              <div className="box">
                <h3>
                  {" "}
                  <i class="fas fa-chart-line"></i> Personal Dashboard
                </h3>
                <p>Personal Dashboard to quick information.</p>
              </div>
            </div>

            <div className="col-md-6 d-none d-md-block">
              <img src={h2} width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="post" id="post">
        <div className="container min-vh-100">
          <h1 className="heading">
            <span>'</span>Latest News<span>'</span>
          </h1>
          <div className="box-container">
            <div className="box">
              <img src="" alt="" />
              <div className="content">
                <a href="#">
                  <h3>Post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore molestias aperiam sunt dolor assumenda sint dolores at
                  odit dicta deserunt.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-primary">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            <div className="box">
              <img src="" alt="" />
              <div className="content">
                <a href="#">
                  <h3>Post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore molestias aperiam sunt dolor assumenda sint dolores at
                  odit dicta deserunt.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-primary">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            <div className="box">
              <img src="" alt="" />
              <div className="content">
                <a href="#">
                  <h3>Post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore molestias aperiam sunt dolor assumenda sint dolores at
                  odit dicta deserunt.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-primary">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            <div className="box">
              <img src="" alt="" />
              <div className="content">
                <a href="#">
                  <h3>Post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore molestias aperiam sunt dolor assumenda sint dolores at
                  odit dicta deserunt.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-primary">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <a href="#" className="logo">
                <span>H</span>ealth<span>C</span>are.
              </a>
              <p>
                This is a Project on
                <p>Personal Health Record Manager and Appointment Scheduler</p>
                by-
                <ul>
                  <li>Atharva Sadre</li>
                  <li>Pranav Doshi</li>
                  <li>Akshat Bhargava</li>
                </ul>
              </p>
            </div>

            {/* <div class="col-md-4 text-center deco">
                            <h3>Links</h3>
                            <a href="#">home</a>
                            <a href="#">about</a>
                            <a href="#">facility</a>
                            <a href="#">review</a>
                            <a href="#">contact</a>
                            <a href="#">post</a>
                        </div> */}

            <div className="col text-center deco">
              <h3>Socials</h3>
              <a href="#" className="text-left">
                {" "}
                <i class="fab fa-facebook"></i>Facebook
              </a>
              <a href="#" className="text-left">
                {" "}
                <i class="fab fa-twitter"></i>Twitter
              </a>
              <a href="#" className="text-left">
                {" "}
                <i class="fab fa-instagram"></i>Instagram
              </a>
              <a href="#" className="text-left">
                {" "}
                <i class="fab fa-github"></i>Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
