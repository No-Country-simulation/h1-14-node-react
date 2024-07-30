import { useState } from "react";
import NavBarHome from "../../Components/navBarHome";
import PatientCalendar from "../../Components/viewPatientCalendar/Index"
import FormPatientCrud from '../../Components/formPatientCrud/Index'
import ViewDoctorCalendar from '../../Components/viewDoctorCalendar/Index';
import ViewTratamiento from '../../Components/viewTratamientos/Index'
import FormDoctorCrud from '../../Components/formDoctorCrud/Index'
import SideBar from "../../Components/sideBar";

import ViewPatient from "../../Components/viewPatient"
import ViewNotas from '../../Components/viewNotas/Index'

import ViewPatientHome from "../../Components/viewPatientHome/Index";
import ViewPatientHistory from "../../Components/viewPatientHistory/Index";
import ViewDoctorHome from "../../Components/viewDoctorHome/Index";

function Home() {
    const [view, setView] = useState("inicio")
    const [rol, setRol] = useState("paciente");

    return(
        <div className=" h-screen flex">



                <SideBar setView={setView} rol={rol} />
                <div className="flex flex-col flex-grow">
                    <NavBarHome />
                    {view === "patient" && <ViewPatient />}
                    {view === "not" && <ViewNotas />}
                    {view === "treatment" && <ViewTratamiento />}
                    {view === "calendar" && rol === "paciente" && <PatientCalendar /> }
                    {view === "calendar" && rol === "medico" && <ViewDoctorCalendar />}
                    {view === "confi" && rol === "medico" && <FormDoctorCrud/> }
                    {view === "config" && rol === "paciente" && <FormPatientCrud />}

                    {view === "inicio" && rol === "paciente" && <ViewPatientHome />}
                    {view === "inicio" && rol === "medico" && <ViewDoctorHome />}
                    {view === "history" && rol === "paciente" && <ViewPatientHistory />}
                </div>
                
                </div>

    )
}

export default Home;