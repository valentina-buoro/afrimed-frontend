import { Routes, Route } from "react-router-dom";
import DoctorsDashboard from "./doctors-app/doctors-dashboard";
import Patients from "./doctors-app/patients";
import Appointment from "./doctors-app/appointment";
import "./App.css";
import LandingPage from "./landing-page";
import Signup from "./authentication/signup";
import Login from "./authentication/login";
import Verify from "./authentication/verify";
import PatientsDashboard from "./patients-app/patients-dashboard";
import Doctors from "./patients-app/doctors";
import MessagePage from "./patients-app/messages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/verify" element={<Verify />} />

      <Route exact path="/doctor" element={<DoctorsDashboard />} />
      <Route exact path="/doctor-patients" element={<Patients />} />
      <Route exact path="/doctor-appointments" element={<Appointment />} />

      <Route exact path="/patient" element={<PatientsDashboard />} />
      <Route exact path="/patient-doctors" element={<Doctors />} />
      <Route exact path="/patient-messages" element={<MessagePage />} />
    </Routes>
  );
}

export default App;
