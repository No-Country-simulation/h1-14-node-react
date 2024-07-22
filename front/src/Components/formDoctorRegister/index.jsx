import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Ingresa tu nombre"),
  lastName: z.string().min(1, "Ingresa tu apellido"),
  document: z.string().min(1, "Seleccione tu tipo de documento"),
  documentNumber: z.string().min(1, "Ingresa tunúmero de documento").regex(/^\d+$/, "Debe ser un número"),
  email: z.string().email("Correo electrónico inválido"),
  emailConfirmation: z.string().email("Correo electrónico inválido"),
  role: z.enum(["paciente", "profesional"], {
    required_error: "Seleccione un rol",
  }),
  termsConditions: z.boolean().refine((val) => val === true, {
    message: "Aceptas nuestros Términos de servicio y Política de privacidad.",
  }),
}).refine((data) => data.email === data.emailConfirmation, {
  message: "Los correos electrónicos no coinciden",
  path: ["emailConfirmation"], 
});

function FormDoctorRegistry() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
  };

  return (
    <div className="flex items-start md:h-screen justify-center">
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
              {errors.name && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                type="text"
                placeholder="Apellido"
                {...register("lastName")}
                className="border border-colorInputBorder"
              />
              {errors.lastName && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.lastName.message}</p>}
            </div>
            <div>
              <Label className="text-sm" htmlFor="document">
                Tipo de documento
              </Label>
              <select
                id="document"
                {...register("document")}
                className="w-full border py-2 rounded-lg px-2 border-colorInputBorder"
              >
                <option value="">Selecciona tu documento</option>
                <option value="dni">DNI</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="licencia">Licencia de conducir</option>
              </select>
              {errors.document && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.document.message}</p>}
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
              />
              {errors.documentNumber && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.documentNumber.message}</p>}
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
              {errors.email && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="emailConfirmation">Repetir Correo electrónico</Label>
              <Input
                type="email"
                placeholder="Correo electrónico"
                {...register("emailConfirmation")}
                className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
              />
              {errors.emailConfirmation && (
                <p className="text-inputSecundary pl-1 font-medium text-xs">{errors.emailConfirmation.message}</p>
              )}
            </div>
          </div>
          
          <div className="mt-3">
            <p className="font-semibold text-xs">Selecciona tu perfil de usuario:</p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex">
                <input
                  type="radio"
                  value="paciente"
                  {...register("role")}
                  className="rounded-full border border-colorInputBorder"
                />
                <p className="font-bold text-xs ml-2">Soy paciente/tutor</p>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="profesional"
                  {...register("role")}
                  className="rounded-full border border-colorInputBorder"
                />
                <p className="font-bold text-xs ml-2">Soy profesional de la salud</p>
              </div>
              {errors.role && <p className="text-inputSecundary pl-1 font-medium text-xs ">Selecciona un rol</p>}
            </div>
          </div>

          <div className="flex w-full mt-4 justify-start items-center">
            <input
              type="checkbox"
              {...register("termsConditions")}
              className="border border-colorInputBorder rounded w-5 h-4 sm:w-4 cursor-pointer mr-2"
            />
            <div>
              <p className="text-black font-semibold text-xs">Aceptar términos y condiciones</p>
              {errors.termsConditions && (
              <p className="font-medium text-xs text-inputSecundary">{errors.termsConditions.message}</p>
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
            <a href="/login" className="text-inputSecundary font-medium text-xs mb-3">
              ¿Tenés una cuenta? Iniciar Sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormDoctorRegistry;