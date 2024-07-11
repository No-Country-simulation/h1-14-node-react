import { useRoutes, BrowserRouter } from "react-router-dom";
import React from "react";

import DoctorRegistry from "../DoctorRegistry";
import LogIn from "../LogIn";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/registro", element: <DoctorRegistry /> },
    { path: "/login", element: <LogIn /> },
  ]);

  return routes;
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
