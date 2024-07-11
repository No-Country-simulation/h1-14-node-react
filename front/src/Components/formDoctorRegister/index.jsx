import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Checkbox } from "@/Components/ui/checkbox";

function formDoctorRegistry() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    numberLicensing: null,
    specialty: null,
    matrialStatus: null,
    email: "",
    emailConfirmation: "",
    passwordConfirmation: "",
    password: "",
    termsConditions: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      emailConfirmation,
      password,
      passwordConfirmation,
      ...otherData
    } = formData;
    if (email !== emailConfirmation) {
      alert("email no coinciden");
      return;
    }
    const data = { ...otherData, email, password };
    console.log("Form data submitted:", data);
  };

  return (
    <div className="flex items-start md:h-screen  justify-center ">
      <div className="w-4/5 md:w-7/12   bg-white rounded-lg border h-auto md:h-full flex flex-col justify-center shadow-sm px-4 md:px-14">
        <div className="text-center mt-6 w-full">
          <h1 className="text-3xl sm:text-5xl font-bold  ">Registro</h1>
          <p className="font-semibold text-base sm:text-xl font-sans mt-2 text-left mb-2">
            Genera tu usuario completando el siguiente formulario de registro.
          </p>
        </div>

        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input
                className="py-0.1 border border-colorInputBorder"
                placeholder="Nombre"
                type="text"
                name="name"
                id="name"
                
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                type="text"
                placeholder="Apellido"
                name="lastName"
                id="lastName"
                className='border border-colorInputBorder'
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="text-sm" htmlFor="specialty">
                Tipo de documento
              </Label>
              <select
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full border py-2 rounded-lg  px-2  border-colorInputBorder"
              >
                <option value="" style={{ fontWeight: 'bold', fontSize: '0.1rem' }} >
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
                value={formData.numberLicensing}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-4">
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                type="email"
                placeholder="Correo electrónico"
                name="email"
                id="email"
                className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="emailConfirmation">
                Repetir Correo electrónico
              </Label>
              <Input
                type="email"
                placeholder="Correo electrónico"
                name="emailConfirmation"
                id="emailConfirmation"
                className="placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder"
                value={formData.emailConfirmation}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="font-semibold text-xs ">
                Selecciona tu perfil de usuario:
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex">
                  <Checkbox className="rounded-full border border-colorInputBorder" />
                  <p className="font-bold text-xs ml-2">Soy paciente/tutor</p>
                </div>
                <div className="flex ">
                  <Checkbox className="rounded-full border border-colorInputBorder" />
                  <p className="font-bold text-xs ml-2 ">
                    Soy profesional de la salud
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-4 justify-start items-center ">
            <input
              type="checkbox"
              name="termsConditions"
              id="termsConditions"
              value={formData.termsConditions}
              onChange={handleChange}
              className="appearance-none border border-colorInputBorder rounded w-4 h-4 cursor-pointer mr-2"
            ></input>
            <div>
              <p className="text-black font-semibold text-xs">
                Aceptar términos y condiciones
              </p>
              <p className="font-medium text-xs text-inputSecundary">
                Aceptas nuestros Términos de servicio y Política de privacidad.
              </p>
            </div>
          </div>
          <div className="mt-7 flex flex-col justify-center items-center gap-2.5 ">
            <Button
              className="rounded-3xl bg-inputPrimary  w-3/4"
              type="submit"
            >
              Registrarme
            </Button>
            <Button
              className="rounded-3xl bg-inputSecundaryColor1 mt-3  w-3/4"
              type="button"
              variant="secondary"
            >
              Atrás
            </Button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <a href="/login" className="text-inputSecundary font-medium text-xs">
              ¿Tenés una cuenta? Iniciar Sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default formDoctorRegistry;
