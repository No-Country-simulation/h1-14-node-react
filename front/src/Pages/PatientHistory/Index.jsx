import ViewPatientHistory from '../../Components/viewPatientHistory/Index';
import NavBarHome from "../../Components/navBarHome";
import SideBar from "../../Components/sideBar";

function PatientHistory() {
  return (
    <div className="flex h-auto bg-bgHome">
      <div className="hidden lg:flex">
        <SideBar />
      </div>
      <div className="flex flex-col flex-grow">
        <NavBarHome />

        <div className="flex flex-col flex-grow">
          <ViewPatientHistory />
        </div>

      </div>
    </div>

  );
}

export default PatientHistory;
