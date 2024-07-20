// src/Pages/Signup/Index.jsx

"use client"

import React, { useState } from 'react';
import { Label } from "@/Components/ui/label";


import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
import { Calendar } from "@/Components/ui/calendar"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import { toast } from "@/Components/ui/use-toast"

//react datePicker
// import { es } from "date-fns/locale";



function SignUp() {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        tipoDocumentoId: '',
        numeroDocumento: '',
        email: '',
        tipoUsuario: '',
        // dob: z.string().nonempty("A date of birth is required."),

    });

    const formSchema = z.object({
        dob: z.date({
            required_error: "A date of birth is required.",
        }),
    })

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

    //datePicker: originaly in TypeScript syntax, convert to JavaScript syntax

    // const form = useForm<z.infer<typeof FormSchema>>({
    //     resolver: zodResolver(FormSchema),
    //   });

    // function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //     title: "You submitted the following values:",
    //     description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //     ),
    // })
    // }

    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(data) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    {JSON.stringify(data, null, 2)}
                </pre>
            ),
        });
    }

    //datePicker date field only, originaly in TypeScript syntax, convert to JavaScript syntax
    // const [date, setDate] = React.useState<Date>({date: ''})

    const [date, setDate] = useState(null);



    //calendar on the right
    const [date1, setDate1] = useState(Date | undefined > (new Date()));


    return (
        // <div className="h-full w-screen flex justify-center items-center bg-cover bg-center">
    <div className="h-full w-screen flex justify-center items-center bg-cover bg-center">
      <div className="w-4/5 md:w-9/12 lg:w-11/12 bg-white rounded-lg border h-auto md:h-full flex flex-col justify-center shadow-sm px-8 md:px-14 m-4">
        <div className="grid gap-5 grid-cols-4">
          <div className="col-span-3 bg-pattern flex items-center justify-center">
            1
          </div>
          <div className="bg-gray flex items-center justify-center">
            <Calendar
              mode="single"
              selected={date1}
              onSelect={setDate1}
              className="rounded-md border"
            />
          </div>
        </div>





                <div className="w-4/5 md:w-9/12 lg:w-11/12 bg-white rounded-lg border h-auto md:h-full flex flex-col justify-center shadow-sm px-8 md:px-14 m-4">
                    <div className=" mt-6 w-full">
                        <h4 className="text-3xl sm:text-2xl font-bold">
                            Registro Inicial
                        </h4>
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
                                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">dob</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        placeholder='dob'
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <Label htmlFor="fecha">Fecha</Label>
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

                                </div>
                            </div>
                            <button type="submit" className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-300 hover:text-white mt-5">Registrar</button>
                        </form>
                    </div>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date of birth</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date > new Date() || date < new Date("1900-01-01")
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>
                                                Your date of birth is used to calculate your age.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

