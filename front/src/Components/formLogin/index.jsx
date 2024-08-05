import React, { useState } from "react";
import Logo from "../../assets/logopng.webp";
import axios from "axios";
import "./styled.css";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../../context/authContext"; 

const formSchema = z.object({
  document: z.string().min(1, "Seleccione un tipo de documento"),
  documentNumber: z.string().min(1, "Número de documento es requerido"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(50, "La contraseña debe tener al máximo 50 caracteres"),
});

function FormLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const { token, user } = await login({
        dniType: data.document,
        dni: data.documentNumber,
        password: data.password,
      });

      navigate("/home");
    } catch (err) {
      console.error("Error:", err);
      setError("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div
      className="h-screen w-screen flex justify-end items-center bg-bg-login bg-cover bg-end md:bg-cover md:bg-end"
      style={{
        backgroundSize: "80% 100%",
        backgroundPosition: "left top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-full w-full md:w-2/4 flex flex-col justify-center items-center bg-custom-bg md:bg-cover md:bg-center md:bg-opacity-50">
        <div className="w-3/4 md:w-2/4 flex flex-col items-center">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="mb-4" />
          </Link>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-5 w-full"
          >
            <div>
              <Label className="text-sm" htmlFor="document">
                Tipo de documento
              </Label>
              <select
                id="document"
                {...register("document")}
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
                <option value="Libreta de enrolamiento" className="font-bold text-sm">
                Libreta de enrolamiento
                </option>
                <option value=" CUIL" className="font-bold text-sm">
                CUIL
                </option>
                <option value="Cedula" className="font-bold text-sm">
                Cédula
                </option>
              </select>
              {errors.document && (
                <p className="text-inputSecundary pl-1 font-medium text-xs mt-1">
                  {errors.document.message}
                </p>
              )}
            </div>
            <div>
              <Label className="text-sm" htmlFor="documentNumber">
                Número de documento
              </Label>
              <Input
                type="number"
                placeholder="Número de documento"
                {...register("documentNumber")}
                className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
                inputMode="numeric"
                pattern="\d*"
              />
              {errors.documentNumber && (
                <p className="text-inputSecundary pl-1 font-medium text-xs mt-1">
                  {errors.documentNumber.message}
                </p>
              )}
            </div>
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
            {error && (
              <p className="text-red-500 pl-1 font-medium text-xs">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full py-3">
              Ingresar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;