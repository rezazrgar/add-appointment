import React from "react";
import "./appointmentInfo.css";
import { BiTrash } from "react-icons/bi";

const AppointmentInfo = ({ appointment }) => {
  return (
    <div>
      <li className="show-appointment">
        <div className="left-side">
          <button type="button" className="show-appointment-delete-button">
            <BiTrash />
          </button>
          <div className="show-appointemnt-content">
            <h1 className="pet-name">{appointment.petName}</h1>
            <h4 className="owner-name">
              <span className="owner-name-style">Owner :</span>{" "}
              {appointment.ownerName}
            </h4>
            <p className="caption">{appointment.aptNotes}</p>
          </div>
        </div>
        <div className="right-side">
          <div className="show-appointment-date">{appointment.aptDate}</div>
        </div>
      </li>
    </div>
  );
};

export default AppointmentInfo;
