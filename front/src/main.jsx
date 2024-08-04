import 'regenerator-runtime/runtime';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App/App.jsx";
import "./index.css";
import { AuthProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
