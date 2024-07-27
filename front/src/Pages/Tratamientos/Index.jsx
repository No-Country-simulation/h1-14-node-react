import ViewTratamientos from '../../Components/viewTratamientos/Index';
import NavBarHome from "../../Components/navBarHome";
import SideBar from "../../Components/sideBar"; 

function Tratamientos() {
  return (
    <div className="flex h-auto bg-bgHome">
      <div className="hidden lg:flex">
        <SideBar />
      </div>
      <div className="flex flex-col flex-grow">
        <NavBarHome />

        <div className="flex flex-col flex-grow">
        <ViewTratamientos />
        </div>

      </div>
    </div>

  );
}

export default Tratamientos;
