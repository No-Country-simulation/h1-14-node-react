import NavBarHome from "../../Components/navBarHome";
import SideBar from "../../Components/sideBar";
import Search from "../../assets/iconHome/search.svg";
import { Input } from "@/Components/ui/input";

function PatientList() {
  return (
    <div className="flex bg-bgHome">
      <SideBar />
      <div className="flex-grow">
        <NavBarHome />
        <div className="py-6 pl-6 pr-10">
          <h1 className="font-semibold text-2xl">Mis pacientes</h1>
          <div className="mt-4 flex justify-between">
            <div className="w-1/2 flex justify-start items-center relative">
              <Input
                className="w-full rounded-xl h-full pl-12 pr-4 py-2 border border-inputPrimary "
                placeholder="Ingrese nombre, DNI o N° de Historia clínica para iniciar una búsqueda"
              />
              <img
                src={Search}
                className="absolute left-4 w-6 h-6"
                alt="search icon"
              />
            </div>
            <select
              id="document"
              className="w-auto py-2 rounded-lg px-1 border border-inputPrimary "
            >
              <option value="" className="font-bold text-sm">
                Ordenar
              </option>
              <option value="" className="font-bold text-sm"></option>
              <option value="" className="font-bold text-sm"></option>
              <option value="" className="font-bold text-sm"></option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientList;
