import { useRoutes, BrowserRouter } from "react-router-dom";
import React from "react";
import DoctorRegistry from "../DoctorRegistry";
import LogIn from "../LogIn";
import "./App.css";
import PatientProfile from "../PatientProfile/Index";

import EmailResetPassword from '../resetPassword';
import LandingPage from "../landing";
import  Home  from "../home";




const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/registro', element: <DoctorRegistry /> },
    { path: '/login', element: <LogIn /> },
    { path: '/patientProfile', element: <PatientProfile/>},
    {path: '/resetPassword', element: <EmailResetPassword />},
    {path: '/', element: <LandingPage />},
    {path:'/home', element: <Home />}
    
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
