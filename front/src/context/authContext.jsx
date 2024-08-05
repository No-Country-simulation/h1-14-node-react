import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth.token);
  const [patients, setPatients] = useState([]);

  const registerUser = async (userData) => {
    try {
      const response = await axios.post("https://justinaio-production.up.railway.app/api/v1/users", userData);
      return response;
    } catch (error) {
      console.error("Error en registerUser:", error.response || error.message);
      throw error; 
    }
  };

  const login = async ({ dniType, dni, password }) => {
    try {
      const response = await axios.post(
        "https://justinaio-production.up.railway.app/api/v1/login",
        {
          dniType,
          dni,
          password,
        }
      );

      const token = response.data.token;
      const user = response.data.user;

      setAuth({ token, user });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);

      return { token, user };
    } catch (err) {
      console.error("Error en login:", err);
      throw new Error("Credenciales incorrectas");
    }
  };

  const fetchPatients = async () => {
    if (!auth.token) {
      console.error("No token available");
      return;
    }

    try {
      const response = await axios.get(
        "https://justinaio-production.up.railway.app/api/v1/users",
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setPatients(response.data);
    } catch (error) {
      console.error("Error al obtener la lista de pacientes:", error);
    }
  };

  useEffect(() => {
    if (auth.token) {
      fetchPatients();
    }
  }, [auth.token]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, auth, login, registerUser, patients, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
