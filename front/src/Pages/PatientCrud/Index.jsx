import FormPatientCrud from '../../Components/formPatientCrud/Index'
import NavBarHome from "../../Components/navBarHome";
import SideBar from "../../Components/sideBar";

function PatientCrud() {
    return (
        <div className="flex h-auto bg-bgHome">
        <div className="hidden lg:flex">
          <SideBar />
        </div>
        <div className="flex flex-col flex-grow">
          <NavBarHome />
  
          <div className="flex flex-col flex-grow">
          <FormPatientCrud />
          </div>
  
        </div>
      </div>

    )
}

export default PatientCrud;