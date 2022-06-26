import React from "react";
import "./addAppointment.css";
import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddAppointment = () => {
  let [toggleForm, setToggleForm] = useState(false);
  return (
    <section className="addappointment-main">
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
        className={`add-appointent-button ${
          toggleForm ? "radius-top" : "radius-all"
        }`}
      >
        <div className="section-title">
          <BiCalendarPlus />
          <span> Add Appointment </span>
        </div>
      </button>
      {toggleForm && (
        <div className="section-body">
          <div className="section-body-divs">
            <label htmlFor="ownerName" className="section-body-lables">
              Owner Name
            </label>
            <input name="ownerName" type="text"></input>
          </div>
          <div className="section-body-divs">
            <label htmlFor="petName" className="section-body-lables">
              Pet Name
            </label>
            <input name="petName" type="text"></input>
          </div>
          <div className="section-body-divs">
            <label htmlfor="aptDate" className="section-body-lables">
              Apt Date
            </label>
            <input name="aptDate" type="date"></input>
          </div>
          <div className="section-body-divs">
            <label htmlFor="aptTime" className="section-body-lables">
              Apt Time
            </label>
            <input name="aptTime" type="time"></input>
          </div>
          <div className="section-body-divs-textarea">
            <label htmlFor="aptNote" className="section-body-lables">
              Appointment Notes
            </label>
            <textarea
              name="aptNote"
              type="textarea"
              row="3"
              placeholder="Detailed comments about the condition"
            ></textarea>
          </div>
        </div>
      )}
    </section>
  );
};

export default AddAppointment;
