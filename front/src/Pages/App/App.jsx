import { useRoutes, BrowserRouter } from "react-router-dom";
import React from "react";
import DoctorRegistry from "../DoctorRegistry";
import LogIn from "../LogIn";
import "./App.css";
import PatientProfile from "../PatientProfile/Index";
import ProtetedRoute from "../../Components/protectedRoute.jsx";
import EmailResetPassword from '../resetPassword';
import LandingPage from "../landing";
import  Home  from "../home";
import AuthRoute from "../../Components/authRoute/index.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/registro', element: <DoctorRegistry /> },
    { path: '/login', element: (<AuthRoute><LogIn /></AuthRoute>)},
    { path: '/patientProfile', element: <PatientProfile/>},
    {path: '/resetPassword', element: <EmailResetPassword />},
    {path: '/', element: <LandingPage />},
    {path:'/home', element: <ProtetedRoute element={<Home />} />}
    
  ])

  return routes
};

function App() {
  return (
    <div className="bg-custom-bg bg-cover bg-center">
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer/ >
      </BrowserRouter>

    </div>
  );
}

export default App;
