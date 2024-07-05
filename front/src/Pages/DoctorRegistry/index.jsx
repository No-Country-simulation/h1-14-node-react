import NavBar from "../../Components/navBar";

function DoctorRegistry() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className=" flex flex-grow items-center justify-center  ">
      
        <div className="w-full max-w-md bg-white rounded-lg border shadow-sm md:max-w-3xl">
          <div class="p-7 space-y-5">
            <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900">
              Registro de medicos
            </h1>

            <form>
              <div class="grid gap-5 grid-cols-1 md:grid-cols-2">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="lastname"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="phoneNumber"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    inputmode="numeric"
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="medicalLicense"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Nº Matrícula
                  </label>
                  <input
                    type="text"
                    name="medicalLicense"
                    id="medicalLicense"
                    class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    inputmode="numeric"
                    disabled
                  />
                </div>
              </div>

              <div class="grid gap-5 grid-cols-1 md:grid-cols-2 mt-4">
                <div>
                  <label
                    for="specialityId"
                    class="mt-1 block text-sm font-medium text-gray-700"
                  >
                    Especialidad
                  </label>
                  <select
                    id="specialityId"
                    name="specialityId"
                    class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    disabled
                  >
                    <option>Seleccione una opción...</option>
                  </select>
                </div>
                <div >
                  <label
                    for="maritalStatusId"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Estado Civil
                  </label>
                  <select
                    id="maritalStatusId"
                    name="maritalStatusId"
                    class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    disabled
                  >
                    <option>Seleccione una opción...</option>
                  </select>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="nombre@dominio.com"
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="emailRepeat"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Confirmar Email
                  </label>
                  <input
                    type="email"
                    name="emailRepeat"
                    id="emailRepeat"
                    class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="nombre@dominio.com"
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="passwordRepeat"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    name="passwordRepeat"
                    id="passwordRepeat"
                    class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    disabled
                  />
                </div>
              </div>

              <div class="mt-7 flex flex-col gap-3 md:flex-row-reverse md:gap-5">
                <button
                  type="submit"
                  class="w-full bg-indigo-600 text-white font-bold py-3.5 px-4 rounded-md flex items-center justify-center"
                  disabled
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  Registrarse
                </button>
                <button
                  type="button"
                  class="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center"
                  disabled
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  Atrás
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegistry;
