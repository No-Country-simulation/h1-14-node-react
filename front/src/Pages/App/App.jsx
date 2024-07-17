import { useRoutes, BrowserRouter } from "react-router-dom";
import React from "react";
import DoctorRegistry from "../DoctorRegistry";
import LogIn from "../LogIn";
import SignUp from "../SignUp/Index";
import "./App.css";
import FormExample from "../FormExample/FormExample";
import PatientProfile from "../PatientProfile/Index";
import PatientCrud from "../PatientCrud/Index";
import DoctorCrud from "../DoctorCrud/Index";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/registro', element: <DoctorRegistry /> },
    { path: '/login', element: <LogIn /> },
    { path: '/form', element: <FormExample /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/patientProfile', element: <PatientProfile/>},
    { path: '/patientCrud', element: <PatientCrud />},
    { path: '/doctorCrud', element: <DoctorCrud />},
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
