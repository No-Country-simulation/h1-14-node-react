import { useRoutes, BrowserRouter } from "react-router-dom";
import React from "react";


import DoctorRegistry from '../DoctorRegistry';
import LogIn from '../LogIn';
// import FormEx from '../Form';
import PacienteRegistry from "../PacienteRegistry/Index";
import "./App.css";
import FormExample from "../FormExample/FormExample";
import PacienteEdit from "../PacienteEdit/Index";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/registro', element: <DoctorRegistry /> },
    { path: '/login', element: <LogIn /> },
    { path: '/form', element: <FormExample /> },
    { path: '/paciente', element: <PacienteRegistry /> },
    {path: '/edit', element: <PacienteEdit/>}
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
