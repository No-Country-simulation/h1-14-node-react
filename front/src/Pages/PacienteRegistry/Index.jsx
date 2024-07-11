import React from 'react'


function PacienteRegistry() {
    return (
        <div className='flex flex-col justify-center h-screen items-center bg-pattern '>
            <div className="w-full max-w-md bg-white rounded-lg border shadow-sm md:max-w-3xl">
                <div class="p-7 space-y-5">
                    <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                        Registro de pacientes
                    </h1>
                    <form class="grid gap-5 grid-cols-2 md:grid-cols-2">
                        <label for="dni" class="block text-sm font-medium text-gray-700" >Dni</label>
                        <input type="text" placeholder='Numero de documento' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <label for="Nombre" class="block text-sm font-medium text-gray-700" >Nombre</label>
                        <input type="text" placeholder='Nombre' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <label for="Apellido" class="block text-sm font-medium text-gray-700" >Apellido</label>
                        <input type="text" placeholder='Apellido' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                     </form>
                    <button className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-300 hover:text-white">Registrar</button>
                </div>
            </div>
        </div>


    )
}

export default PacienteRegistry;
