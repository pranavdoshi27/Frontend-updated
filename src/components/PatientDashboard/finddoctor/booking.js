import React from "react";
import { useState } from "react";
import "./booking.css";

const Booking = (props) => {
  console.log("Inside the booking element");

  const [symptoms, setSymptoms] = useState("");
  const [time, setTime] = useState("2022-05-29T11:12:54.013Z");

  return (
    <div className="booking">
      <div>
        <form
          id="rating"
          action=""
          method="post"
          class="card-booking"
          onSubmit={(e) => {
            e.preventDefault();
            props.clickHandlerBooking({ symptoms: symptoms, time: time });
          }}
        >
          <h1 className="bh1">Choose your Slot</h1>

          <div className="centered-booking">
            <div className="group-booking">
              <textarea
                className="text-input-booking"
                type="text-area"
                id="name"
                required
                onChange={(event) => setSymptoms(event.target.value)}
              />
              <label className="label-input-booking" htmlFor="name">
                Enter your Symptoms
              </label>
            </div>
          </div>

          <p className="para">The Doctor is available at these times.</p>

          <div class="flexbox-booking" id="options">
            <label for="rate1" class="opt-booking">
              10:00
            </label>
            <input class="input-booking" type="radio" name="rate" value="1" />
            <label for="rate2" class="opt-booking">
              11:30
            </label>
            <input class="input-booking" type="radio" name="rate" value="2" />
            <label for="rate3" class="opt-booking">
              17:30
            </label>
            <input class="input-booking" type="radio" name="rate" value="3" />
            <label for="rate4" class="opt-booking">
              18:00
            </label>
            <input class="input-booking" type="radio" name="rate" value="4" />
            <label for="rate5" class="opt-booking">
              19:00
            </label>
            <input class="input-booking" type="radio" name="rate" value="5" />
          </div>

          <input
            type="submit"
            class="btn-booking"
            value="Confirm"
            id="submitBtn"
          />
        </form>
      </div>
    </div>
  );
};

export default Booking;
