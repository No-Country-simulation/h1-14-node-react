import { useForm } from "react-hook-form";
import { Label } from "@/Components/ui/label";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import React, { useState } from "react";
import { Input } from "@/Components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const passwordSchema = z
  .string()
  .min(10, "La contraseña debe tener al menos 10 caracteres")
  .max(50, "La contraseña no puede exceder los 50 caracteres")
  .regex(/[a-z]/, "La contraseña debe tener al menos un carácter en minúscula")
  .regex(/[A-Z]/, "La contraseña debe tener al menos un carácter en mayúscula")
  .regex(/\d/, "La contraseña debe tener al menos un carácter numérico")
  .regex(/[^a-zA-Z0-9\s]/, "La contraseña debe tener al menos un carácter especial")
  .regex(/^\S*$/, "La contraseña no puede contener espacios");

  const formSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"], // path del campo a validar
  });
  
function FormResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordR, setShowPasswordR] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordR = () => {
    setShowPasswordR(!showPasswordR);
  };

  const onSubmit = (data) => {
    
      console.log(data);
  
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center px-4 sm:px-0">
      <div className="relative bg-white w-full sm:w-2/4 h-auto border rounded-lg px-6 sm:px-14 py-7 flex justify-center flex-col space-y-5">
        <Link to="/login" className="absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#5666bf"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 9L9 15"
              stroke="#5666bf"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 9L15 15"
              stroke="#5666bf"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <div>
          <h2 className="text-xl sm:text-4xl font-bold text-center">
            Modifica tu contraseña
          </h2>
          <p className="font-semibold text-base sm:text-xl font-sans mt-2 text-center sm:text-left mb-2">
            Crea una contraseña para acceder a tu perfil de usuario.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="relative w-full">
              <Label className="text-sm px-1" htmlFor="password">
                Contraseña
              </Label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                {...register("password")}
                className="placeholder-inputPlaceholder mt-1 border focus:border-transparent !focus:border-none border-colorInputBorder  placeholder-text-inputPlaceholder py-2 px-3 w-full"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 bottom-0 top-6 flex items-center justify-center pr-3"
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
                <p className="text-inputSecundary pl-1 mt-1 font-medium text-xs ">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mt-3">
              <div className="relative w-full">
                <Label className="text-sm px-1" htmlFor="password">
                  Repetir contraseña
                </Label>
                <Input
                  type={showPasswordR ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("confirmPassword")}
                  className="placeholder-inputPlaceholder mt-1 border focus:border-transparent !focus:border-none border-colorInputBorder  placeholder-text-inputPlaceholder py-2 px-3 w-full"
                />
                <button
                  type="button"
                  onClick={toggleShowPasswordR}
                  className="absolute inset-y-0 right-0 bottom-0 top-6 flex items-center justify-center pr-3"
                >
                  {showPasswordR ? (
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
            </div>
            <div>
              {errors.confirmPassword && (
                <p className="text-inputSecundary pl-1 mt-1 font-medium text-xs ">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="mt-4 flex justify-center items-center">
              <Button
                className="rounded-3xl bg-inputPrimary w-full px-4 sm:w-2/4"
                type="submit"
              >
                Ingresar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormResetPassword;
