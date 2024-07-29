import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageLogo from "../../assets/logoNav.svg";
import logoHome from "../../assets/iconosSidebar/iconHome.svg";
import logoConfig from "../../assets/iconosSidebar/iconConfig.svg";
import logoCalendar from "../../assets/iconosSidebar/iconCalendar.svg";
import logoCerrar from "../../assets/iconosSidebar/iconClose.svg";
import logoPatient from "../../assets/iconosSidebar/iconPatient.svg";
import logoNotas from "../../assets/iconosSidebar/notas.svg";
import logoTratamiento from "../../assets/iconosSidebar/tratamiento.svg";
import logoHistorial from "../../assets/iconosSidebar/historial.svg";

function SideBar({setView, rol}) {
  
  const [active, setActive] = useState("inicio")
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSelect = (option) => {
    setActive(option)
    setView(option)
  }

  return (
    <div className="bg-bgNavBar w-[243px] md:w-[200px] lg:w-[243px] h-full p-4 flex flex-col">
      <div className="flex flex-col gap-12 flex-grow">
        <Link to="/">
          <div className="flex justify-center md:justify-start">
            <img className="w-24 md:w-32 h-auto" src={ImageLogo} alt="Logo" />
          </div>
        </Link>
        <div className="space-y-4">
          <button 
          className={`${active === "inicio" ? 'bg-inputPrimary' : 'bg-bgNavBar'} w-full flex justify-start items-center rounded-lg px-4 py-2`}
          onClick={() => handleSelect("inicio")}
          >
            <img className="w-6 h-6" src={logoHome} alt="Inicio" />
            <p className="text-white text-sm ml-2">Inicio</p>
          </button>
          <button className={`${active === "calendar" ? "bg-inputPrimary" : 'bg-bgNavBar'} w-full flex justify-start items-center rounded-lg px-4 py-2`}
            onClick={() => handleSelect("calendar")}>
            <img className="w-6 h-6" src={logoCalendar} alt="Calendario" />
            <p className="text-white text-sm ml-2">Calendario</p>
          </button>
          {rol === "medico" ? (
            <button 
            className={`${active === "patient" ? "bg-inputPrimary" : 'bg-bgNavBar'} w-full flex justify-start items-center rounded-lg px-4 py-2`}
            onClick={() => handleSelect("patient")}
            >
              <img className="w-6 h-6" src={logoPatient} alt="Mis pacientes" />
              <p className="text-white text-sm ml-2">Mis pacientes</p>
            </button>
          ) : rol === "paciente" ? (
            <>
              <button 
              className={`${active === "history" ? "bg-inputPrimary": "bg-bgNavBar"} w-full flex justify-start items-center rounded-lg px-4 py-2`}
              onClick={() => handleSelect("history")}
              >
                <img className="w-6 h-6" src={logoHistorial} alt="Historial clínico" />
                <p className="text-white text-sm ml-2">Historial clínico</p>
              </button>
              <button 
              className={`${active === "treatment" ? "bg-inputPrimary": "bg-bgNavBar"} w-full flex justify-start items-center rounded-lg px-4 py-2`}
              onClick={() => handleSelect("treatment")}
              >
                <img className="w-6 h-6" src={logoTratamiento} alt="Tratamientos" />
                <p className="text-white text-sm ml-2">Tratamientos</p>
              </button>
              <button 
              className={`${active === "not" ? "bg-inputPrimary": "bg-bgNavBar"} w-full flex justify-start items-center rounded-lg px-4 py-2`}
              onClick={() => handleSelect("not")}
              >
                <img className="w-6 h-6" src={logoNotas} alt="Mis notas" />
                <p className="text-white text-sm ml-2">Mis notas</p>
              </button>
            </>
          ) : null }
          <button 
          className={`${active === "config" ? "bg-inputPrimary": "bg-bgNavBar"} w-full flex justify-start items-center rounded-lg px-4 py-2`}
          onClick={() => handleSelect("config")}
          >
            <img className="w-6 h-6" src={logoConfig} alt="Configuración" />
            <p className="text-white text-sm ml-2">Configuración</p>
          </button>
        </div>
      </div>
      <button
        className="focus:bg-inputPrimary w-full flex justify-start items-center rounded-lg px-4 py-2"
        onClick={handleLogout}
      >
        <img className="w-6 h-6" src={logoCerrar} alt="Cerrar sesión" />
        <p className="text-white text-sm ml-2">Cerrar sesión</p>
      </button>
    </div>
  );
}

export default SideBar;