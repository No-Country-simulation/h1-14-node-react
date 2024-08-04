import { useState, useMemo } from "react";
import CardPatient from "../cardPatient";
import Search from "../../assets/iconHome/search.svg";
import { Input } from "@/Components/ui/input";
import DetailPatient from "../detailPatient";  // Asegúrate de que el path sea correcto

function ViewPatient({ patients }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);  // Nuevo estado para paciente seleccionado

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);  // Establece el paciente seleccionado
  };

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      const firstName = patient.firstName ? patient.firstName.toLowerCase() : "";
      const lastName = patient.lastName ? patient.lastName.toLowerCase() : "";
      return (
        (firstName && firstName.includes(searchTerm.toLowerCase())) ||
        (lastName && lastName.includes(searchTerm.toLowerCase()))
      );
    });
  }, [patients, searchTerm]);

  const sortedPatients = useMemo(() => {
    const sorted = [...filteredPatients];
    if (sortOption === "nombre") {
      sorted.sort((a, b) => {
        const nameA = (a.firstName + " " + a.lastName).toLowerCase();
        const nameB = (b.firstName + " " + b.lastName).toLowerCase();
        return nameA.localeCompare(nameB);
      });
    }
    return sorted;
  }, [filteredPatients, sortOption]);

  return (
    <div className="flex bg-bgHome">
      <div className="flex flex-col flex-grow">
        <div className="flex-grow flex flex-col p-4 md:p-6">
          <h1 className="font-semibold text-xl md:text-2xl mb-4">Mis pacientes</h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex-grow relative">
              <Input
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-4/5 rounded-md pl-12 pr-4 py-2 border border-borderCard"
                placeholder="Ingrese nombre, DNI o N° de Historia clínica para iniciar una búsqueda"
              />
              <img src={Search} className="absolute left-4 top-1/2 transform -translate-y-1/2" alt="search icon" />
            </div>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="w-full md:w-auto py-2 rounded-md px-2 border border-borderCard"
            >
              <option value="" className="font-bold text-sm">
                Ordenar
              </option>
              <option value="nombre" className="font-bold text-sm">
                Nombre
              </option>
            </select>
          </div>
          <div className="flex-grow overflow-hidden">
            <div className="bg-white rounded-md h-full border border-borderCard p-4 md:p-6 overflow-y-auto max-h-[calc(100vh-290px)]">
              {selectedPatient ? (
                <DetailPatient data={selectedPatient} />  // Mostrar detalle del paciente seleccionado
              ) : (
                <div className="flex flex-col gap-4">
                  {sortedPatients.length > 0 ? (
                    sortedPatients.map((patient) => (
                      <CardPatient
                        key={patient.id}
                        data={patient}
                        onClick={() => handlePatientClick(patient)}  // Añadir evento onClick
                      />
                    ))
                  ) : (
                    <p>No se encontraron pacientes.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPatient;