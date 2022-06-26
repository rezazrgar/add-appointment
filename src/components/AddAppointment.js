import React from "react";
import "./addAppointment.css";
import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddAppointment = ({ onSendAppointment, lastId }) => {
  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + " " + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
  }

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
            <input
              name="ownerName"
              type="text"
              id="ownerName"
              onChange={(event) => {
                setFormData({ ...formData, ownerName: event.target.value });
              }}
              value={formData.ownerName}
            />
          </div>

          <div className="section-body-divs">
            <label htmlFor="petName" className="section-body-lables">
              Pet Name
            </label>
            <input
              name="petName"
              type="text"
              id="petName"
              onChange={(event) => {
                setFormData({ ...formData, petName: event.target.value });
              }}
              value={formData.petName}
            />
          </div>

          <div className="section-body-divs">
            <label htmlFor="aptDate" className="section-body-lables">
              Apt Date
            </label>
            <input
              name="aptDate"
              type="date"
              id="aptDate"
              onChange={(event) => {
                setFormData({ ...formData, aptDate: event.target.value });
              }}
              value={formData.aptDate}
            />
          </div>

          <div className="section-body-divs">
            <label htmlFor="aptTime" className="section-body-lables">
              Apt Time
            </label>
            <input
              name="aptTime"
              type="time"
              id="aptTime"
              onChange={(event) => {
                setFormData({ ...formData, aptTime: event.target.value });
              }}
              value={formData.aptTime}
            />
          </div>

          <div className="section-body-divs-textarea">
            <label htmlFor="aptNote" className="section-body-lables">
              Appointment Notes
            </label>
            <textarea
              name="aptNotes"
              type="textarea"
              row="3"
              placeholder="Detailed comments about the condition"
              id="aptNotes"
              onChange={(event) => {
                setFormData({ ...formData, aptNotes: event.target.value });
              }}
              value={formData.aptNotes}
            />
          </div>
          <button
            type="submit"
            className="add-appointment-submit-button"
            onClick={formDataPublish}
          >
            Submit
          </button>
        </div>
      )}
    </section>
  );
};

export default AddAppointment;
