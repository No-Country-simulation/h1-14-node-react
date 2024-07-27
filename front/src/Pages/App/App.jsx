import { useRoutes, BrowserRouter } from "react-router-dom";
import React from "react";
import DoctorRegistry from "../DoctorRegistry";
import LogIn from "../LogIn";
import "./App.css";
import PatientProfile from "../PatientProfile/Index";
import PatientCrud from "../PatientCrud/Index";
import DoctorCrud from "../DoctorCrud/Index";
import EmailResetPassword from '../resetPassword';
import LandingPage from "../landing";
import PatientCalendar from "../PatientCalendar/Index";
import PatientList from "../patientList";
import DoctorCalendar from "../DoctorCalendar/Index";
import Notas from "../Notas/Index";
import Tratamientos from './../Tratamientos/Index';



const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/registro', element: <DoctorRegistry /> },
    { path: '/login', element: <LogIn /> },
    { path: '/patientProfile', element: <PatientProfile/>},
    {path: '/resetPassword', element: <EmailResetPassword />},
    {path: '/', element: <LandingPage />},
    { path: '/patientCrud', element: <PatientCrud />},
    { path: '/doctorCrud', element: <DoctorCrud />},
    { path: '/resetPassword', element: <EmailResetPassword />},
    { path: '/patientCalendar', element: <PatientCalendar />},
    {path: '/patientList', element: <PatientList />},
    { path: '/doctorCalendar', element: <DoctorCalendar />},
    { path: '/notas', element: <Notas />},
    { path: '/tratamientos', element: <Tratamientos />}
  ])

  return routes
};

function App() {
  return (
    <div className="bg-custom-bg bg-cover bg-center">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
