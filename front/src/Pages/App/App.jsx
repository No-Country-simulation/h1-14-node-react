import { useRoutes, BrowserRouter } from "react-router-dom";
import React from "react";


import DoctorRegistry from '../DoctorRegistry';
import LogIn from '../LogIn';
// import FormEx from '../Form';
import SignUp from "../SignUp/Index";
import "./App.css";
import FormExample from "../FormExample/FormExample";
import PatientProfile from "../PatientProfile/Index";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/registro', element: <DoctorRegistry /> },
    { path: '/login', element: <LogIn /> },
    { path: '/form', element: <FormExample /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/patientProfile', element: <PatientProfile/>}
  ])

  return routes
}


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
};

export default App;
