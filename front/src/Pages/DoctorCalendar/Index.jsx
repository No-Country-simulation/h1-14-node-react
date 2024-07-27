import ViewDoctorCalendar from '../../Components/viewDoctorCalendar/Index';
import NavBarHome from "../../Components/navBarHome";
import SideBar from "../../Components/sideBar";

function DoctorCalendar() {
  return (
    <div className="flex h-auto bg-bgHome">
      <div className="hidden lg:flex">
        <SideBar />
      </div>
      <div className="flex flex-col flex-grow">
        <NavBarHome />

        <div>
          <ViewDoctorCalendar />
        </div>

      </div>
    </div>
  );
}

export default DoctorCalendar;
