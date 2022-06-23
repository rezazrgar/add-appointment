import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import { BiCalendar } from "react-icons/bi";
import appointmentList from "./data.json";
import AppointmentInfo from "./components/AppointmentInfo";
import "./app.css";

function App() {
  return (
    <div className="App">
      <h1 className="first-title">
        <BiCalendar className="calender-icon-style" />
        <span> Your Appointments </span>
      </h1>
      <AddAppointment />
      <Search />
      <ul className="show-appointments-container">
        {appointmentList.map((appointment) => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
