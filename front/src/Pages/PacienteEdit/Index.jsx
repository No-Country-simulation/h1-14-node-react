import React from 'react'


function PacienteEdit() {
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
                        <label for="email" class="block text-sm font-medium text-gray-700" >email</label>
                        <input type="text" placeholder='email' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <label for="fechaNacimiento" class="block text-sm font-medium text-gray-700" >Fecha de Nacimiento</label>
                        <input type="text" placeholder='Fecha de Nacimiento' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <label for="FactorSanguineo" class="block text-sm font-medium text-gray-700" >Factor Sanguineo</label>
                        <input type="text" placeholder='Factor Sanguineo' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                        <label className="block text-sm font-medium text-gray-700 col-span-2">Sexo</label>
                        <div className="flex items-center col-span-2">
                            <input id="male" name="sexo" type="radio" value="male" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                            <label htmlFor="male" className="ml-2 block text-sm text-gray-700">Masculino</label>
                            <input id="female" name="sexo" type="radio" value="female" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 ml-4" />
                            <label htmlFor="female" className="ml-2 block text-sm text-gray-700">Femenino</label>
                            <input id="noBinario" name="sexo" type="radio" value="noBinario" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 ml-4" />
                            <label htmlFor="female" className="ml-2 block text-sm text-gray-700">No binario</label>
                        </div>
                        <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 col-span-2">Tipo de Sangre</label>
                        <select id="bloodType" className="mt-1 block w-full border border-gray-300 p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm col-span-2">
                            <option value="">Seleccione el tipo de sangre</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>

                    </form>
                    <button className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-300 hover:text-white">Registro</button>
                </div>
            </div>
        </div>


    )
}

export default PacienteEdit;