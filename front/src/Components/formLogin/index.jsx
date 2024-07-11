import React, { useState } from "react";
import Logo from "../../assets/logopng.webp";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link } from "react-router-dom";

function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-full w-2/4 bg-black"></div>
      <div className="h-full w-2/4 flex flex-col justify-center space-y-6 items-center">
        <div className="w-2/4">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <Label className="text-sm" htmlFor="specialty">
              Tipo de documento
            </Label>
            <select
              id="specialty"
              name="specialty"
              className="w-full border py-2 rounded-lg px-2 border-colorInputBorder"
            >
              <option value="" style={{ fontWeight: "bold", fontSize: "0.1rem" }}>
                Selecciona tu documento
              </option>
              <option value="dni">DNI</option>
              <option value="pasaporte">Pasaporte</option>
              <option value="licencia">Licencia de conducir</option>
            </select>
          </div>
          <div>
            <Label className="text-sm" htmlFor="medicalLicense">
              Número de documento
            </Label>
            <Input
              type="text"
              placeholder="Número de documento"
              name="medicalLicense"
              id="medicalLicense"
              className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
              inputMode="numeric"
            />
          </div>
          <div className="relative">
            <Label className="text-sm" htmlFor="password">
              Contraseña
            </Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              name="password"
              id="password"
              className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder pr-10"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute inset-y-1 right-0 top-6 flex items-center pr-3"
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
          <div className="flex justify-end">
            <a href="/" className="font-medium text-xs">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="mt-1 flex flex-col justify-center items-center gap-2.5">
            <Button
              className="rounded-3xl bg-inputPrimary w-full"
              type="submit"
            >
              Ingresar
            </Button>
            <Link to="/registro" className="w-full">
              <Button
                className="rounded-3xl bg-inputSecundaryColor1 mt-3 w-full"
                type="button"
                variant="secondary"
              >
                Registrarme
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;