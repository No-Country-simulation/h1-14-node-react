import CardPatient from "../cardPatient";

import Search from "../../assets/iconHome/search.svg";
import { Input } from "@/Components/ui/input";

function ViewPatient() {
  return (
    <div className="flex  bg-bgHome">
      <div className="flex flex-col flex-grow">
        <div className="flex-grow flex flex-col p-4 md:p-6">
          <h1 className="font-semibold text-xl md:text-2xl mb-4">Mis pacientes</h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex-grow relative">
              <Input
                className="w-4/5 rounded-md pl-12 pr-4 py-2 border border-borderCard"
                placeholder="Ingrese nombre, DNI o N° de Historia clínica para iniciar una búsqueda"
              />
              <img src={Search} className="absolute left-4 top-1/2 transform -translate-y-1/2" alt="search icon" />
            </div>
            <select className="w-full md:w-auto py-2 rounded-md px-2 border border-borderCard">
              <option value="" className="font-bold text-sm">
                Ordenar
              </option>
              <option value="" className="font-bold text-sm">
                Nombre
              </option>
              <option value="" className="font-bold text-sm">
                DNI
              </option>
              <option value="" className="font-bold text-sm">
                Historia clínica
              </option>
            </select>
          </div>
          <div className="flex-grow overflow-hidden">
            <div className="bg-white rounded-md h-full border border-borderCard p-4 md:p-6 overflow-y-auto max-h-[calc(100vh-290px)]">
              <div className="flex flex-col gap-4">
                <CardPatient />
                <CardPatient />
                <CardPatient />
                <CardPatient />
                <CardPatient />
                <CardPatient />
                <CardPatient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPatient;
