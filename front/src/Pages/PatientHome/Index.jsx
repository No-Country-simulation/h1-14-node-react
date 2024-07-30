import ViewPatientHome from '../../Components/viewPatientHome/Index';
import NavBarHome from "../../Components/navBarHome";
import SideBar from "../../Components/sideBar"; 

function PatientHome() {
  return (
    <div className="flex h-auto bg-bgHome">
      <div className="hidden lg:flex">
        <SideBar />
      </div>
      <div className="flex flex-col flex-grow">
        <NavBarHome />

        <div className="flex flex-col flex-grow">
        <ViewPatientHome />
        </div>

      </div>
    </div>

  );
}

export default PatientHome;
