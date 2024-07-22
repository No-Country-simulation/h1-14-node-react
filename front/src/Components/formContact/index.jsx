import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import './style.css'

const formSchema = z.object({
    email: z.string().email("Correo electrónico inválido"),
    numberPhone: z.string().min(1, "Ingresa tunúmero de telefono").regex(/^\d+$/, "Debe ser un número"),
    name: z.string().min(1, "Ingresa tu nombre y apellido"),
    messages: z.string().min(1, "Ingresa un mensaje"),
})

function FormContact() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver:zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        console.log("Datos de contacto", data)
    }
  return (
    <div className="w-full flex flex-col ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1.5">
        <div>
          <Label htmlFor='name'>Nombre y apellido</Label>
          <Input
          type='text'
            placeholder="Nombre y correo"
            className="border mt-1 border-colorInputBorder"
            {...register('name')}
          />
          {errors.name && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor='email'>Correo electronico</Label>
          <Input
          type="email"
            placeholder="Correo electronico"
            className="py-1 border  mt-1 border-colorInputBorder"
            {...register("email")}
          />
          {errors.email && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor='numberPhone'>Telefono</Label>
          <Input
          type='number'
            placeholder="Telefono"
            className="border  mt-1 border-colorInputBorder"
            {...register('numberPhone')}
          />
          {errors.numberPhone && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.numberPhone.message}</p>}
        </div>
        <div>
          <Label htmlFor='messages'>Mensaje</Label>
          <Textarea
          type='text'
            placeholder="Deja aqui tu mensaje"
            className="border   resize-none align-text-top h-10 p-2  border-colorInputBorder"
            {...register("messages")}
          />
          {errors.messages && <p className="text-inputSecundary pl-1 font-medium text-xs ">{errors.messages.message}</p>}
        </div>
        <div className='mt-4'>
          <Button 
          className="rounded-3xl    bg-inputPrimary w-3/4" 
          type="submit">
            Enviar mensaje
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
