import NavBarHome from "../../Components/navBarHome";
import SideBar from "../../Components/sideBar";
import Search from "../../assets/iconHome/search.svg";
import { Input } from "@/Components/ui/input";

function PatientList() {
  return (
    <div className="flex bg-bgHome h-screen">
      <SideBar />
      <div className="flex-grow flex flex-col">
        <NavBarHome />
        <div className="py-6 pl-6 pr-10 flex flex-col flex-grow">
          <h1 className="font-semibold text-2xl mb-4">Mis pacientes</h1>
          <div className="flex justify-between mb-4">
            <div className="w-1/2 flex items-center relative">
              <Input
                className="w-full rounded-md pl-12 pr-4 py-2 border border-borderCard"
                placeholder="Ingrese nombre, DNI o N° de Historia clínica para iniciar una búsqueda"
              />
              <img src={Search} className="absolute left-4" alt="search icon" />
            </div>
            <select className="w-auto py-2 rounded-md px-1 border border-borderCard">
              <option value="" className="font-bold text-sm">Ordenar</option>
              <option value="" className="font-bold text-sm">Nombre</option>
              <option value="" className="font-bold text-sm">DNI</option>
              <option value="" className="font-bold text-sm">Historia clínica</option>
            </select>
          </div>
          <div className="bg-white  rounded-md flex-grow border border-borderCard p-6">
            <p>hola</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientList;