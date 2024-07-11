// src/Pages/Signup/Index.jsx

import React, { useState } from 'react';

function SignUp() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        tipoDocumentoId: '',
        numeroDocumento: '',
        email: '',
        tipoUsuario: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5173/api/v1/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle success
                alert('Registro exitoso');
            } else {
                // Handle error
                alert('Error en el registro');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='flex flex-col justify-center h-screen items-center bg-pattern '>
            <div className="w-full max-w-md bg-white rounded-lg border shadow-sm md:max-w-3xl">
                <div className="p-7 space-y-5">
                    <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                        Registro Inicial
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder='Nombre'
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
                                <input
                                    type="text"
                                    name="apellido"
                                    placeholder='Apellido'
                                    value={formData.apellido}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="tipoDocumentoId" className="block text-sm font-medium text-gray-700">Tipo y numero de documento</label>
                                <div className="grid gap-0 md:grid-cols-2 w-auto">
                                    <select
                                        id="tipoDocumentoId"
                                        name="tipoDocumentoId"
                                        value={formData.tipoDocumentoId}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="DNI" >DNI</option>
                                        <option value="CI">CI</option>
                                        <option value="LE">LE</option>
                                        <option value="PAS">PAS</option>
                                        <option value="CUIT">CUIT/CUIL</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="numeroDocumento"
                                        placeholder='Numero de documento'
                                        value={formData.numeroDocumento}
                                        onChange={handleChange}
                                        className="max-w-md mt-1 block w-full border border-gray-300 p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="tipoUsuario" className="block text-sm font-medium text-gray-700">Tipo de Usuario</label>
                                <select
                                    id="tipoUsuario"
                                    name="tipoUsuario"
                                    value={formData.tipoUsuario}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="Paciente">Paciente</option>
                                    <option value="Tutor">Tutor</option>
                                    <option value="Medico">Medico</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-300 hover:text-white mt-5">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;


// import React from 'react'


// function SignUp() {
//     return (
//         <div className='flex flex-col justify-center h-screen items-center bg-pattern '>
//             <div className="w-full max-w-md bg-white rounded-lg border shadow-sm md:max-w-3xl">
//                 <div class="p-7 space-y-5">
//                     <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900">
//                         Registro Inicial
//                     </h1>
//                     <form >
//                         <div class="grid gap-5 grid-cols-1 md:grid-cols-2">
//                             <div>
//                                 <label for="Nombre" class="block text-sm font-medium text-gray-700" >Nombre</label>
//                                 <input type="text" placeholder='Nombre' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

//                             </div>
//                             <div>
//                                 <label for="Apellido" class="block text-sm font-medium text-gray-700" >Apellido</label>
//                                 <input type="text" placeholder='Apellido' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//                             </div>

//                             <div>
//                                 <label for="tipoDocumentoId" class="block text-sm font-medium text-gray-700" >Tipo y numero de documento</label>
//                                 <div class="grid gap-0  md:grid-cols-2 w-auto">
//                                     <input type="text" placeholder='Numero de documento' className='inputClass' class=" max-w-md mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//                                     <button class="w-fit">
//                                         <select
//                                             id="tipoDocumentoId"
//                                             name="tipoDocumentoId"
//                                             class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                         // disabled
//                                         >
//                                             <option>DNI</option>
//                                             <option>CI</option>
//                                             <option>LE</option>
//                                             <option>PAS</option>
//                                             <option>CUIT</option>
//                                         </select>
//                                     </button>


//                                 </div>
//                             </div>
//                             <div >
//                                 <label for="tipoUsuario" class="block text-sm font-medium text-gray-700" >Tipo de Usuario</label>
//                                 <button class="w-full max-w-md">
//                                     <select
//                                         id="tipoUsuario"
//                                         name="tipoUsuario"
//                                         class="mt-1 block w-full border  p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                     // disabled
//                                     >
//                                         <option>Paciente</option>
//                                         <option>Tutor</option>
//                                         <option>Medico</option>
//                                     </select>
//                                 </button>
//                             </div>


//                         </div>
//                     </form>
//                     <button className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-300 hover:text-white">Registrar</button>
//                 </div>
//             </div>
//         </div>


//     )
// }

// export default SignUp;
