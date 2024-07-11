// src/Pages/PatientProfile/Index.jsx

import React, { useState } from 'react';

function PatientProfile() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        tipoDocumentoId: '',
        numeroDocumento: '',
        tipoUsuario: '',
        factorSanguineo: '',
        fechaNacimiento: '',
        sexo: '',
        password: '',
        activo: ''
    });

const [password2, setPassword2] = useState();

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
            const response = await fetch('http://localhost:5173/api/v1/patientProfile', {
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
                        Perfil de paciente
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
                            <div>
                                <label htmlFor="factorSanguineo" className="block text-sm font-medium text-gray-700">Factor Sanguineo</label>
                                <select
                                    id="factorSanguineo"
                                    name="tipofactorSanguineoUsuario"
                                    value={formData.factorSanguineo}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border p-3.5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
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
                            </div>
                            <div>
                                <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                                <input
                                    type="text"
                                    name="fechaNacimiento"
                                    placeholder='Fecha de Nacimiento'
                                    value={formData.fechaNacimiento}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="sexo" className="block text-sm font-medium text-gray-700">Sexo</label>
                                <div  className="flex items-center my-4 ">
                                <input id="male" name="sexo" type="radio" value="male" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                                <label htmlFor="male" className="ml-2 block text-sm text-gray-700">Masculino</label>
                                <input id="female" name="sexo" type="radio" value="female" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 ml-4" />
                                <label htmlFor="female" className="ml-2 block text-sm text-gray-700">Femenino</label>
                                <input id="noBinario" name="sexo" type="radio" value="noBinario" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 ml-4" />
                                <label htmlFor="female" className="ml-2 block text-sm text-gray-700">No binario</label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="text"
                                    name="password"
                                    placeholder='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="password2" className="block text-sm font-medium text-gray-700">Confirmar Password</label>
                                <input
                                    type="text"
                                    name="password2"
                                    placeholder='password'
                                    value={password2}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-300 hover:text-white mt-5">Editar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PatientProfile;
