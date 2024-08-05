import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../../context/authContext";
import { toast } from 'react-toastify';

const formSchema = z
  .object({
    name: z.string().min(1, "Ingresa tu nombre"),
    lastName: z.string().min(1, "Ingresa tu apellido"),
    role: z.enum(["PACIENTE", "MEDICO"], {
      required_error: "Selecciona un rol",
    }),
    birthday: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}$/,
        "Formato de fecha inválido. Debe ser YYYY-MM-DD"
      ),
    dniType: z.string().min(1, "Selecciona tu tipo de documento"),
    dni: z
      .string()
      .min(1, "Ingresa tu número de documento")
      .regex(/^\d+$/, "Debe ser un número"),
    phone: z
      .string()
      .min(1, "Ingresa tu número de telefono")
      .regex(/^\d+$/, "Debe ser un número"),
    gender: z.string().min(1, "Selecciona tu género"),
    termsConditions: z.boolean().refine((val) => val === true, {
      message:
        "Debes aceptar nuestros Términos de servicio y Política de privacidad.",
    }),
    email: z.string().email("Correo electrónico inválido"),
    emailConfirmation: z.string().email("Correo electrónico inválido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(
        6,
        "La confirmación de la contraseña debe tener al menos 6 caracteres"
      ),
  })
  .refine((data) => data.email === data.emailConfirmation, {
    message: "Los correos electrónicos no coinciden",
    path: ["emailConfirmation"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

function FormDoctorRegistry() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser } = useAuth();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Validación básica
      if (!data.dni || !data.password || !data.email) {
        throw new Error('Por favor, complete todos los campos requeridos.');
      }
  
      const response = await registerUser({
        dniType: data.dniType,
        dni: data.dni,
        password: data.password,
        firstName: data.name,
        lastName: data.lastName,
        birthday: data.birthday,
        role: data.role,
        gender: data.gender,
        email: data.email,
        phone: data.phone,
      });
  
      
      if (response.status === 201) {
        reset();
        toast.success('Registro exitoso');
      } else {
        throw new Error(`Respuesta inesperada del servidor: ${response.statusText}`);
      }
    } catch (error) {
      
      console.error("Error en onSubmit:", error.message);
      toast.error(`¡Algo salió mal! ${error.message}`);
    }
  };

  return (
    <div className="flex items-start md:h-auto justify-center">
      <div className="w-4/5 md:w-7/12 bg-white rounded-lg border h-auto md:h-full flex flex-col justify-center shadow-sm px-8 md:px-14">
        <div className="text-center mt-6 w-full">
          <h1 className="text-3xl sm:text-5xl font-bold">Registro</h1>
          <p className="font-semibold text-base sm:text-xl font-sans mt-2 text-left mb-2">
            Genera tu usuario completando el siguiente formulario de registro.
          </p>
        </div>

        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input
                className="py-0.1 border border-colorInputBorder"
                placeholder="Nombre"
                type="text"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-inputSecundary pl-1 font-medium text-xs ">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                type="text"
                placeholder="Apellido"
                {...register("lastName")}
                className="border border-colorInputBorder"
              />
              {errors.lastName && (
                <p className="text-inputSecundary pl-1 font-medium text-xs ">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <Label className="text-sm" htmlFor="dniType">
                Tipo de documento
              </Label>
              <select
                id="dniType"
                {...register("dniType")}
                className="w-full border py-2 rounded-lg px-2 border-colorInputBorder"
              >
                <option value="" className="font-bold text-sm">
                  Selecciona tu documento
                </option>
                <option value="DNI" className="font-bold text-sm">
                  DNI
                </option>
                <option value="Pasaporte" className="font-bold text-sm">
                  Pasaporte
                </option>
                <option value="Libreta civica" className="font-bold text-sm">
                  Libreta cívica
                </option>
                <option
                  value="Libreta de enrolamiento"
                  className="font-bold text-sm"
                >
                  Libreta de enrolamiento
                </option>
                <option value="CUIL" className="font-bold text-sm">
                  CUIL
                </option>
                <option value="Cedula" className="font-bold text-sm">
                  Cédula
                </option>
              </select>
              {errors.dniType && (
                <p className="text-inputSecundary pl-1 font-medium text-xs ">
                  {errors.dniType.message}
                </p>
              )}
            </div>
            <div>
              <Label className="text-sm" htmlFor="dni">
                Número de documento
              </Label>
              <Input
                type="number"
                placeholder="Número de documento"
                {...register("dni")}
                className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
              />
              {errors.dni && (
                <p className="text-inputSecundary pl-1 font-medium text-xs ">
                  {errors.dni.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <Label className="text-sm" htmlFor="gender">
                Género
              </Label>
              <select
                id="gender"
                {...register("gender")}
                className="w-full border py-2 rounded-lg px-2 border-colorInputBorder"
              >
                <option value="" className="font-bold text-sm">
                  Selecciona tu género
                </option>
                <option value="M" className="font-bold text-sm">
                  Masculino
                </option>
                <option value="F" className="font-bold text-sm">
                  Femenino
                </option>
              </select>
              {errors.gender && (
                <p className="text-inputSecundary pl-1 font-medium text-xs ">
                  {errors.gender.message}
                </p>
              )}
            </div>
            <div className="w-1/2">
              <Label className="text-sm" htmlFor="birthday">
                Fecha de nacimiento
              </Label>
              <Input
                type="date"
                placeholder="YYYY-MM-DD"
                {...register("birthday")}
                className="placeholder-inputPlaceholder border border-colorInputBorder  placeholder-text-inputPlaceholder"
              />
              {errors.birthday && (
                <p className="text-inputSecundary pl-1 font-medium text-xs">
                  {errors.birthday.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mt-4">
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                type="email"
                placeholder="Correo electrónico"
                {...register("email")}
                className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
              />
              {errors.email && (
                <p className="text-inputSecundary pl-1 font-medium text-xs ">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="emailConfirmation">
                Repetir Correo electrónico
              </Label>
              <Input
                type="email"
                placeholder="Correo electrónico"
                {...register("emailConfirmation")}
                className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
              />
              {errors.emailConfirmation && (
                <p className="text-inputSecundary pl-1 font-medium text-xs">
                  {errors.emailConfirmation.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mt-4">
            <div>
              <div className="relative w-full">
                <Label className="text-sm" htmlFor="password">
                  Contraseña
                </Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("password")}
                  className="placeholder-inputPlaceholder border focus:border-transparent !focus:border-none border-colorInputBorder placeholder-text-inputPlaceholder py-2 px-3 w-full"
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
              </div>
              <div>
                {errors.password && (
                  <p className="text-inputSecundary pl-1 font-medium text-xs ">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="relative w-full">
                <Label className="text-sm" htmlFor="password">
                  Contraseña
                </Label>
                <Input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("confirmPassword")}
                  className="placeholder-inputPlaceholder border focus:border-transparent !focus:border-none border-colorInputBorder placeholder-text-inputPlaceholder py-2 px-3 w-full"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword1}
                  className="absolute inset-y-0 right-0 bottom-4 top-9 flex items-center pr-3"
                >
                  {showPassword1 ? (
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
              </div>
              <div>
                {errors.confirmPassword && (
                  <p className="text-inputSecundary pl-1 font-medium text-xs ">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <Label className="text-sm" htmlFor="phone">
                Numero de teléfono
              </Label>
              <Input type="text" className="py-0.1 border border-colorInputBorder"
                placeholder="Teléfono" {...register("phone")} />
            </div>
            <div>
            {errors.phone && (
                <p className="text-inputSecundary pl-1 font-medium text-xs ">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-3">
            <p className="font-semibold text-xs">
              Selecciona tu perfil de usuario:
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex">
                <input
                  type="radio"
                  value="PACIENTE"
                  {...register("role")}
                  className="rounded-full border border-colorInputBorder"
                />
                <p className="font-bold text-xs ml-2">Soy paciente/tutor</p>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="MEDICO"
                  {...register("role")}
                  className="rounded-full border border-colorInputBorder"
                />
                <p className="font-bold text-xs ml-2">
                  Soy profesional de la salud
                </p>
              </div>
              {errors.role && (
                <p className="text-inputSecundary pl-1 font-medium text-xs ">
                  Selecciona un rol
                </p>
              )}
            </div>
          </div>

          <div className="flex w-full mt-4 justify-start items-center">
            <input
              type="checkbox"
              {...register("termsConditions")}
              className="border border-colorInputBorder rounded w-5 h-4 sm:w-4 cursor-pointer mr-2"
            />
            <div>
              <p className="text-black font-semibold text-xs">
                Aceptar términos y condiciones
              </p>
              {errors.termsConditions && (
                <p className="font-medium text-xs text-inputSecundary">
                  {errors.termsConditions.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-7 flex flex-col justify-center items-center gap-2.5">
            <Button className="rounded-3xl bg-inputPrimary w-3/4" type="submit">
              Registrarme
            </Button>
            <Link to="/login" className="w-full flex justify-center">
              <Button
                className="rounded-3xl bg-inputSecundaryColor1 mt-3 w-3/4"
                type="button"
                variant="secondary"
              >
                Atrás
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center mt-5">
            <a
              href="/login"
              className="text-inputSecundary font-medium text-xs mb-3"
            >
              ¿Tenés una cuenta? Iniciar Sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormDoctorRegistry;
