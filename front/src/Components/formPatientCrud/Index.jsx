// "use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/Components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"


import React, { useState } from "react";
import Logo from "../../assets/logopng.webp";
// import './styled.css';
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { SquarePen } from 'lucide-react';



function FormPatientCrud() {

  const formSchema = z.object({
    nombre: z.string().min(1, "Ingresa tu nombre"),
    apellido: z.string().min(1, "Ingresa tu apellido"),
    tipoDocumentoId: z.string().min(1, "Seleccione un tipo de documento"),
    numeroDocumento: z.string().min(1, "Número de documento es requerido"),
    tipoUsuario: z.enum(["Paciente", "Tutor", "Profesional de la salud"], {
      required_error: "Seleccione un rol",
    }),
    sexo: z.enum(["Masculino", "Femenino", "No binario"], {
      required_error: "Seleccione una opcion",
    }),
    fechaNacimiento: z.string().date(),

    pais: z.string().min(1, "Ingresa el pais"),
    provincia: z.string().min(1, "Ingresa la provincia"),
    ciudad: z.string().min(1, "Ingresa la ciudad"),
    direccion: z.string().min(1, "Ingresa calle y numero"),
    factorSanguineo: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], { required_error: "Seleccione un tipo de factor sanguineo", }),

    telefono: z.string().min(8, "Ingrese telefono"),
    email: z.string().email("Correo electrónico inválido"),
    email2: z.string().email("Correo electrónico inválido"),
    password: z.string().min(10, "La contraseña debe tener al menos 6 caracteres").max(50, "La contraseña debe tener al maximo 50 caracteres"),
    password2: z.string().min(10, "La contraseña debe tener al menos 6 caracteres").max(50, "La contraseña debe tener al maximo 50 caracteres"),
    // activo: '',
  }).refine((data) => data.email === data.email2, {
    message: "El correo electrónico no coincide",
    path: ["email2"],
  }).refine((data) => data.password === data.password2, {
    message: "La contraseña no coincide",
    path: ["password2"],
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });


  const [date, setDate] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);

  };

  return (
    <div className=' flex  '>
      <div className='flex-grow bg-secondary p-4 w-2/3'>
        {/* <div className="h-full w-2/4 bg-black"></div> */}
        <div className="w-4/5 md:w-9/12 lg:w-11/12 bg-white rounded-lg border h-auto md:h-full flex flex-col justify-center shadow-sm px-8 md:px-14 m-4">
          <div className=" mt-6 w-full">
            <h4 className="text-3xl sm:text-2xl font-bold">Perfil</h4>

            {/* <img src={Logo} alt="Logo" /> */}
            {/* <p className="font-semibold text-base sm:text-xl font-sans mt-2 text-left mb-2"> */}
            <p>
              Bienvenido a tu perfil. Acá podés actualizar tu información personal, tu información de contacto y tu contraseña. ¡Mantené tus datos al día para que sea más fácil contactarte!
            </p>
            <hr class="h-px my-8 bg-colorInputBorder border-0 dark:bg-gray-700"></hr>
            <h4 className="text-3xl sm:text-2xl font-bold">Información personal</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5 mb-10">
            <div>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

                <div className="relative w-full">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    className="py-0.1 border border-colorInputBorder"
                    placeholder="Nombre"
                    type="text"
                    {...register("nombre")}
                    readOnly={!isEditable}
                  />
                  {errors.nombre && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.nombre.message}</p>}
                </div>
                <div className="relative w-full">
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input
                    className="border border-colorInputBorder"
                    type="text"
                    placeholder="Apellido"
                    {...register("apellido")}
                    readOnly={!isEditable}
                  />
                  {errors.apellido && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.apellido.message}</p>}
                </div>
                <div className="relative w-full">
                  <Label htmlFor="tipoDocumentoId">
                    Tipo de documento
                  </Label>
                  <select
                    id="tipoDocumentoId"
                    {...register("tipoDocumentoId")}
                    readOnly={!isEditable}
                    disabled={!isEditable}

                    className="w-full border py-2 rounded-lg px-2 border-colorInputBorder text-sm text-gray-500"
                  >
                    <option value="" >
                      Selecciona tu documento
                    </option>
                    <option value="DNI" >DNI</option>
                    <option value="CI" >CI</option>
                    <option value="LE" >LE</option>
                    <option value="PAS" >Pasaporte</option>
                    <option value="CUIT" >CUIT/CUIL</option>
                  </select>
                  {errors.tipoDocumentoId && <p className="text-inputSecundary pl-1 font-medium text-xs mt-1">{errors.tipoDocumentoId.message}</p>}
                </div>
                <div className="relative w-full">
                  <Label className="text-sm" htmlFor="numeroDocumento">
                    Número de documento
                  </Label>
                  <Input
                    type="number"
                    placeholder="Número de documento"
                    {...register("numeroDocumento")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                    className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
                    inputMode="numeric"
                    pattern='\d*'
                  />
                  {errors.numeroDocumento && <p className="text-inputSecundary pl-1 font-medium text-xs mt-1">{errors.numeroDocumento.message}</p>}
                </div>
                <div className="relative w-full">
                  <Label className="text-sm" htmlFor="tipoUsuario">
                    Tipo de usuario
                  </Label>
                  <select
                    id="tipoUsuario"
                    {...register("tipoUsuario")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                    className="w-full border py-2 rounded-lg px-2 border-colorInputBorder text-sm text-gray-500"
                  >
                    <option value="" >
                      Selecciona el tipo de usuario
                    </option>
                    <option value="DNI" >Paciente</option>
                    <option value="CI" >Tutor</option>
                    <option value="LE" >Profesional de la salud</option>
                  </select>
                  {errors.tipoUsuario && <p className="text-inputSecundary pl-1 font-medium text-xs mt-1">{errors.tipoUsuario.message}</p>}
                </div>
                <div className="relative w-full">
                  <Label className="text-sm" htmlFor="sexo">
                    Sexo
                  </Label>
                  <select
                    id="sexo"
                    {...register("sexo")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                    className="w-full border py-2 rounded-lg px-2 border-colorInputBorder text-sm text-gray-500"
                  >
                    <option value="" >
                      Seleccione sexo
                    </option>
                    <option value="M" >Masculino</option>
                    <option value="F" >Femenino</option>
                    <option value="X" >No binario</option>
                  </select>
                  {errors.sexo && <p className="text-inputSecundary pl-1 font-medium text-xs mt-1">{errors.sexo.message}</p>}
                </div>

                <div className="relative w-full">
                  <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
                  {/* <Input
                  className="py-0.1 border border-colorInputBorder"
                  placeholder="fechaNacimiento"
                  type="text"
                  {...register("fechaNacimiento")}
                  readOnly={!isEditable}
                  disabled={!isEditable}
                /> */}

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "text-left font-normal mt-0 block w-full border border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <Button
                          type="button"
                          className="rounded-full absolute inset-y-0 right-0 bottom-4 top-6 flex items-center "
                          variant="ghost"
                          size="icon"
                        >
                          <CalendarIcon
                            stroke="#5666bf"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Button>

                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  {errors.fechaNacimiento && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.fechaNacimiento.message}</p>}
                </div>

                <div className="relative w-full">
                  <Label htmlFor="pais">Pais</Label>
                  <Input
                    className="py-0.1 border border-colorInputBorder"
                    placeholder="pais"
                    type="text"
                    {...register("pais")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                  />
                  {errors.pais && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.pais.message}</p>}
                </div>
                <div className="relative w-full">
                  <Label htmlFor="provincia">Provincia</Label>
                  <Input
                    className="py-0.1 border border-colorInputBorder"
                    placeholder="provincia"
                    type="text"
                    {...register("provincia")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                  />
                  <Button
                    type="button"
                    onClick={toggleEditable}
                    className="rounded-full absolute inset-y-0 right-0 bottom-4 top-6 flex items-center "
                    variant="ghost"
                    size="icon"
                  >
                    <SquarePen
                      stroke="#5666bf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Button>
                  {errors.provincia && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.provincia.message}</p>}
                </div>
                <div className="relative w-full">
                  <Label htmlFor="ciudad">Ciudad</Label>
                  <Input
                    className="py-0.1 border border-colorInputBorder"
                    placeholder="ciudad"
                    type="text"
                    {...register("ciudad")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                  />
                  <Button
                    type="button"
                    onClick={toggleEditable}
                    className="rounded-full absolute inset-y-0 right-0 bottom-4 top-6 flex items-center "
                    variant="ghost"
                    size="icon"
                  >
                    <SquarePen
                      stroke="#5666bf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Button>
                  {errors.ciudad && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.ciudad.message}</p>}
                </div>
                <div className="relative w-full" >
                  <Label htmlFor="direccion">Direccion</Label>
                  <Input
                    className="py-0.1 border border-colorInputBorder"
                    placeholder="direccion"
                    type="text"
                    {...register("direccion")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                  />
                  <Button
                    type="button"
                    onClick={toggleEditable}
                    className="rounded-full absolute inset-y-0 right-0 bottom-4 top-6 flex items-center "
                    variant="ghost"
                    size="icon"
                  >
                    <SquarePen
                      stroke="#5666bf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Button>

                  {errors.direccion && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.direccion.message}</p>}
                </div>
                <div className="relative w-full">
                  <Label className="text-sm" htmlFor="factorSanguineo">
                    Factor Sanguineo
                  </Label>
                  <select
                    id="factorSanguineo"
                    {...register("factorSanguineo")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                    className="w-full border py-2 rounded-lg px-2 border-colorInputBorder text-sm text-gray-500"
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
                  {errors.factorSanguineo && <p className="text-inputSecundary pl-1 font-medium text-xs mt-1">{errors.factorSanguineo.message}</p>}
                </div>
              </div>


              <h4 className="text-3xl sm:text-2xl font-bold">Información de contacto</h4>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

                <div className="relative w-full">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    {...register("email")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                    className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
                  />
                  <Button
                    type="button"
                    onClick={toggleEditable}
                    className="rounded-full absolute inset-y-0 right-0 bottom-4 top-6 flex items-center "
                    variant="ghost"
                    size="icon"
                  >
                    <SquarePen
                      stroke="#5666bf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Button>
                  {errors.email && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.email.message}</p>}
                </div>
                {/* repetir email */}
                {/* <div>
                <Label htmlFor="email2">Repetir Correo electrónico</Label>
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  {...register("email2")}
                  className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
                />
                {errors.email2 && (
                  <p className="text-inputSecundary pl-1 font-medium text-xs">{errors.email2.message}</p>
                )}
              </div> */}

                <div className="relative w-full">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    type="telefono"
                    placeholder="Teléfono"
                    {...register("telefono")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                    className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
                  />
                  <Button
                    type="button"
                    onClick={toggleEditable}
                    className="rounded-full absolute inset-y-0 right-0 bottom-4 top-6 flex items-center "
                    variant="ghost"
                    size="icon"
                  >
                    <SquarePen
                      stroke="#5666bf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Button>
                  {errors.telefono && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.telefono.message}</p>}
                </div>
              </div>


              <h4 className="text-3xl sm:text-2xl font-bold">Información de contacto</h4>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

                <div className="relative w-full">
                  <Label className="text-sm" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                    className="placeholder-inputPlaceholder border focus:border-transparent !focus:border-none border-colorInputBorder  placeholder-text-inputPlaceholder py-2 px-3 w-full"
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 bottom-4 top-9 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9.88 9.88C9.58526 10.1547 9.34885 10.4859 9.18488 10.8539C9.02091 11.2218 8.93274 11.6191 8.92564 12.0219C8.91853 12.4247 8.99263 12.8248 9.14351 13.1984C9.2944 13.5719 9.51898 13.9113 9.80385 14.1962C10.0887 14.481 10.4281 14.7056 10.8016 14.8565C11.1752 15.0074 11.5753 15.0815 11.9781 15.0744C12.3809 15.0673 12.7782 14.9791 13.1462 14.8151C13.5142 14.6512 13.8454 14.4148 14.12 14.12"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.61 6.60999C4.62125 7.96461 3.02987 9.82524 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 2L22 22"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                  <div>{errors.password && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.password.message}</p>}</div>

                </div>
                <div className="relative w-full">
                  <Label className="text-sm" htmlFor="password2">
                    Repetir Password
                  </Label>
                  <Input
                    type={showPassword ? "text" : "password2"}
                    placeholder="Repetir Password"
                    {...register("password2")}
                    readOnly={!isEditable}
                    disabled={!isEditable}
                    className="placeholder-inputPlaceholder border focus:border-transparent !focus:border-none border-colorInputBorder  placeholder-text-inputPlaceholder py-2 px-3 w-full"
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 bottom-4 top-9 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9.88 9.88C9.58526 10.1547 9.34885 10.4859 9.18488 10.8539C9.02091 11.2218 8.93274 11.6191 8.92564 12.0219C8.91853 12.4247 8.99263 12.8248 9.14351 13.1984C9.2944 13.5719 9.51898 13.9113 9.80385 14.1962C10.0887 14.481 10.4281 14.7056 10.8016 14.8565C11.1752 15.0074 11.5753 15.0815 11.9781 15.0744C12.3809 15.0673 12.7782 14.9791 13.1462 14.8151C13.5142 14.6512 13.8454 14.4148 14.12 14.12"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.61 6.60999C4.62125 7.96461 3.02987 9.82524 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 2L22 22"
                          stroke="#5666bf"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                  <div>{errors.password2 && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.password2.message}</p>}</div>

                </div>
              </div>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <Link to="/patientCrud" >
                  <Button
                    className="rounded-3xl bg-inputSecundaryColor1 min-w-full"
                    type="button"
                    variant="secondary"
                    onClick={toggleEditable}
                  >
                    {isEditable ? "Cancelar" : "Editar"}
                  </Button>
                </Link>
                {isEditable && (
                  <Button className="rounded-3xl bg-inputPrimary min-w-full" type="submit">
                    Actualizar Perfil
                  </Button>
                )}
              </div>
            </div>

          </form>

        </div >
      </div >
    </div >
  );
}

export default FormPatientCrud;
