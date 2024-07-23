import NavBarHome from "../../Components/navBarHome"
import SideBar from "../../Components/sideBar"

function PatientList() {
    return (
        <div className="flex">
        <SideBar />
        <div className="flex-grow">
            <NavBarHome />
        </div>

        </div>
    )
    
}

export default PatientList