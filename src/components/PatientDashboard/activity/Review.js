import React from "react";
import { useState } from "react";

import "./Review.css";

const Review = (props) => {
  console.log("Doctor ID:::", props.doctorId);

  const [revtext, setRevtext] = useState("");

  const submitHandler = async (e) => {
    console.log("in submit handler");
    e.preventDefault();

    props.reviewHandlerAfter(false);

    console.log(`api/v1/doctors/${props.doctorId}/reviews`);

    const res = await fetch(`../api/v1/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: 5,
        review: revtext,
        doctor: props.doctorId,
        //doctor: "61f4cbbb636f013540bd8f54",
        user: props.userId,
        // user: "61f2938688861460fc99be24",
      }),
    });

    const data = await res.json();
    console.log("DATA HERE", data);

    if (data.status === 404 || !data) {
      window.alert("Invalid Submission");
      //console.log("Invalid Login");
      props.reviewHandlerAfter(false);
    } else if (data.status === 500) {
      window.alert("Duplicate Submission Submission");
      //console.log("Invalid Login");
      props.reviewHandlerAfter(false);
    } else {
      //console.log(data.data.user._id);
      console.log("Review Successfull");
      props.reviewHandlerAfter(false);
    }
  };

  return (
    <div>
      <form id="rating" action="" method="post" class="card-review">
        <img
          src="https://raw.githubusercontent.com/hejkeikei/interactive-rating-component/16de82dee8e9299ac78d332cc3b5480da9bf435c/images/icon-star.svg"
          alt="rating icon"
          id="star"
        />
        <h1>Review your Doctor</h1>
        <p>PLease let us know if we can improve on anything.😄😄😄</p>

        <div className="centered-review">
          <div className="group">
            <textarea
              className="text-input-review"
              type="text-area"
              id="name"
              required
              onChange={(event) => setRevtext(event.target.value)}
            />
            <label className="label-input-review" htmlFor="name">
              Write a Review!!!
            </label>
          </div>
        </div>
        <div class="flexbox-review" id="options">
          <label for="rate1" class="opt-review">
            1
          </label>
          <input type="radio" name="rate" id="rate1" value="1" />
          <label for="rate2" class="opt-review">
            2
          </label>
          <input type="radio" name="rate" id="rate2" value="2" />
          <label for="rate3" class="opt-review">
            3
          </label>
          <input type="radio" name="rate" id="rate3" value="3" />
          <label for="rate4" class="opt-review">
            4
          </label>
          <input type="radio" name="rate" id="rate4" value="4" />
          <label for="rate5" class="opt-review">
            5
          </label>
          <input type="radio" name="rate" id="rate5" value="5" />
        </div>

        <input
          type="submit"
          class="btn-review"
          value="Submit"
          id="submitBtn"
          onClick={submitHandler}
        />
      </form>
      {/* <!-- Rating state end --> */}

      {/* <!-- Thank you state start --> */}
      <div id="thankYou" class="card">
        <div class="imgBlock-review"></div>
        <p class="message-review">
          You selected <span class="userValue">0</span> out of 5
        </p>
      </div>
    </div>
  );
};

export default Review;
