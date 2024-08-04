import { useState, useRef, useEffect } from "react";
import NavBarHome from "../../Components/navBarHome";
import PatientCalendar from "../../Components/viewPatientCalendar/Index";
import FormPatientCrud from "../../Components/formPatientCrud/Index";
import ViewDoctorCalendar from "../../Components/viewDoctorCalendar/Index";
import ViewTratamiento from "../../Components/viewTratamientos/Index";
import FormDoctorCrud from "../../Components/formDoctorCrud/Index";
import SideBar from "../../Components/sideBar";
import ViewPatient from "../../Components/viewPatient";
import ViewNotas from "../../Components/viewNotas/Index";
import ViewPatientHome from "../../Components/viewPatientHome/Index";
import ViewPatientHistory from "../../Components/viewPatientHistory/Index";
import ViewDoctorHome from "../../Components/viewDoctorHome/Index";

import ViewTratamientoDoctor from "../../Components/viewTratamientosDoctor/Index";
import SpeechTestSP from "../../Components/speechText/Index";

function Home() {
  const [view, setView] = useState("inicio");
  const [rol, setRol] = useState("paciente");
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div className="h-screen flex">
      <div className="hidden md:block w-60 flex-shrink-0">
        <SideBar setView={setView} rol={rol} />
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-60 z-50 bg-bgNavBar transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:hidden`}
      >
        <SideBar setView={setView} rol={rol} />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="md:hidden p-4"></div>
        <NavBarHome
          toggleSidebar={toggleSidebar}
          isSidebarVisible={isSidebarVisible}
        />
        <div className="flex-grow p-4 overflow-y-auto">
          {view === "patient" && <ViewPatient />}
          {view === "not" && <ViewNotas />}
          {view === "treatment" && <ViewTratamiento />}
          {view === "calendar" && rol === "paciente" && <PatientCalendar />}
          {view === "calendar" && rol === "medico" && <ViewDoctorCalendar />}
          {view === "confi" && rol === "medico" && <FormDoctorCrud />}
          {view === "config" && rol === "paciente" && <FormPatientCrud />}
          {view === "inicio" && rol === "paciente" && <ViewPatientHome />}
          {view === "inicio" && rol === "medico" && <ViewDoctorHome />}
          {view === "history" && rol === "paciente" && <ViewPatientHistory />}

          {view === "treatmentDoctor" && <ViewTratamientoDoctor />}
          {view === "speechText" && <SpeechTestSP />}

        </div>
      </div>
    </div>
  );
}

export default Home;
