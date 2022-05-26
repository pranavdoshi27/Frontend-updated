import React from "react";
import { useState } from "react";
import "./ChangeStatus.css";

const ChangeStatus = (props) => {
  console.log("ChangeStatus element");

  const [prescribedMeds, setPrescribedMeds] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [medicinePower, setMedicinePower] = useState("");
  const [medicinePerDay, setMedicinePerDay] = useState("");

  return (
    <div className="booking">
      <div>
        <form
          className="card-booking"
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmitStatusHandler({
              medicineName,
              medicinePower,
              medicinePerDay,
            });
          }}
        >
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label className="bh1">Medicine Name</label>
              <input
                type="text"
                onChange={(event) => {
                  setMedicineName(event.target.value);
                }}
              />
            </div>
            <div className="new-expense__control">
              <label className="bh1">Power</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={(event) => {
                  setMedicinePower(event.target.value);
                }}
              />
              <label className="bh1">mg</label>
            </div>
            <div className="new-expense__control">
              <label className="bh1">Medicine per Day</label>
              <input
                type="number"
                min="1"
                max="4"
                onChange={(event) => {
                  setMedicinePerDay(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button
              type="button"
              className="btn btn-warning"
              onClick={props.onCancel}
            >
              Cancel
            </button>
            {"     "}
            <button type="submit" className="btn btn-warning">
              Priscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeStatus;
