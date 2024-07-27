import ViewPatientCalendar from './../../Components/viewPatientCalendar/Index';
import NavBarHome from "../../Components/navBarHome";
import SideBar from "../../Components/sideBar";

function PatientCalendar() {
  return (
    <div className="flex h-auto bg-bgHome">
      <div className="hidden lg:flex">
        <SideBar />
      </div>
      <div className="flex flex-col flex-grow">
        <NavBarHome />

        <div className="flex flex-col flex-grow">
          <ViewPatientCalendar />
        </div>

      </div>
    </div>

  );
}

export default PatientCalendar;
