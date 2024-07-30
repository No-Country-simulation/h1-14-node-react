"use client"

import { BookMarked } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import CardTratamientos from "../cardTratamientos"
import { Button } from "@/Components/ui/button"
import { PenLine, Plus } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog"
import { Input } from '@/Components/ui/input';
import { Label } from "@/Components/ui/label"
import { Textarea } from '@/Components/ui/textarea';


const tratamientos = [
    {
        name: "Tacrolimus",
        noteType: "Medicacion Escencial",
        status: "2 mg dos veces al dia",
        description: "Tomar con el estomago vacio, 1 hora antes o 2 horas despues de las comidas",
        date: "2024-07-19T05:50:00Z",
    },
    {
        name: "Prednisona",
        noteType: "Medicacion Escencial",
        status: "5 mg una vez al dia",
        description: "Tomar con alimentos para evitar molestias estomacales",
        date: "2024-07-20T06:00:00Z",
    },
    {
        name: "Aspirina",
        noteType: "Tratamiento complementario",
        status: "100 mg una vez al dia",
        description: "Tomar con un vaso completo de agua",
        date: "2024-07-21T07:00:00Z",
    },
    {
        name: "Vitamina D",
        noteType: "Tratamiento complementario",
        status: "1000 UI una vez al dia",
        description: "Tomar con el desayuno",
        date: "2024-07-27T07:00:00Z",
    },
    {
        name: "Atorvastatina",
        noteType: "Medicacion Escencial",
        status: "20 mg una vez al dia por la noche",
        description: "Tomar con o sin alimentos",
        date: "2024-07-22T08:00:00Z",
    },
    {
        name: "Metformina",
        noteType: "Medicacion Escencial",
        status: "500 mg dos veces al dia",
        description: "Tomar con las comidas para reducir efectos secundarios gastrointestinales",
        date: "2024-07-23T09:00:00Z",
    },
    {
        name: "Hidratacion",
        noteType: "Otras indicaciones",
        status: "3 litros por dia",
        description: "Mantener una ingesta adecuada de liquidos",
        date: "2024-07-20T06:00:00Z",
    },
    {
        name: "Alimentacion",
        noteType: "Otras indicaciones",
        status: "",
        description: "Seguir una dieta baja en sal y rica en proteinas segun indicaciones del nutricionista",
        date: "2024-07-21T07:00:00Z",
    },
];

const initialTratamientos = [
    {
        name: "Tacrolimus",
        noteType: "Medicacion Escencial",
        status: "2 mg dos veces al dia",
        description: "Tomar con el estomago vacio, 1 hora antes o 2 horas despues de las comidas",
        date: "2024-07-19T05:50:00Z",
    },
    {
        name: "Prednisona",
        noteType: "Medicacion Escencial",
        status: "5 mg una vez al dia",
        description: "Tomar con alimentos para evitar molestias estomacales",
        date: "2024-07-20T06:00:00Z",
    },
    {
        name: "Aspirina",
        noteType: "Tratamiento complementario",
        status: "100 mg una vez al dia",
        description: "Tomar con un vaso completo de agua",
        date: "2024-07-21T07:00:00Z",
    },
    {
        name: "Vitamina D",
        noteType: "Tratamiento complementario",
        status: "1000 UI una vez al dia",
        description: "Tomar con el desayuno",
        date: "2024-07-27T07:00:00Z",
    },
    {
        name: "Atorvastatina",
        noteType: "Medicacion Escencial",
        status: "20 mg una vez al dia por la noche",
        description: "Tomar con o sin alimentos",
        date: "2024-07-22T08:00:00Z",
    },
    {
        name: "Metformina",
        noteType: "Medicacion Escencial",
        status: "500 mg dos veces al dia",
        description: "Tomar con las comidas para reducir efectos secundarios gastrointestinales",
        date: "2024-07-23T09:00:00Z",
    },
    {
        name: "Hidratacion",
        noteType: "Otras indicaciones",
        status: "3 litros por dia",
        description: "Mantener una ingesta adecuada de liquidos",
        date: "2024-07-20T06:00:00Z",
    },
    {
        name: "Alimentacion",
        noteType: "Otras indicaciones",
        status: "",
        description: "Seguir una dieta baja en sal y rica en proteinas segun indicaciones del nutricionista",
        date: "2024-07-21T07:00:00Z",
    },
];

function ViewTratamientos() {

    const [tratamientos, setTratamientos] = useState(initialTratamientos);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newNote, setNewNote] = useState({ name: "", date: "", description: "", noteType: "", status: "" });

    const medicacionEscencial = tratamientos.filter(tratamiento => tratamiento.noteType === "Medicacion Escencial");
    const tratamientoComplementario = tratamientos.filter(tratamiento => tratamiento.noteType === "Tratamiento complementario");
    const otrasIndicaciones = tratamientos.filter(tratamiento => tratamiento.noteType !== "Medicacion Escencial" && tratamiento.noteType !== "Tratamiento complementario");



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNote({
            ...newNote,
            [name]: value
        });
    };

    const handleAddNote = () => {
        setTratamientos([...tratamientos, { ...newNote, date: new Date().toISOString() }]);
        setIsDialogOpen(false);
        setNewNote({ name: "", date: "", description: "", noteType: "", status: "" });
    };

    const uniqueNoteTypes = [...new Set(tratamientos.map(tratamientos => tratamientos.noteType))];
    const getBadgeClass = (noteType) => {
        switch (noteType) {
            case "Medicacion Escencial":
                return " bg-greenBadge text-blackCardTitle";
            case "Tratamiento complementario":
                return "bg-yellowBadge text-blackCardTitle";
            case "Otras indicaciones":
                return "bg-purple-500 text-blackCardTitle";

            default:
                return "";
        }
    };

    return (
        <div className='flex bg-white'>

            <div className='bg-secondary p-4'>
                {/* <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 px-2">
                    {tratamientos.map((tratamiento, index) => (

                        <div key={index} className="mb-4 break-inside-avoid shadow-md rounded-lg ">
                            <CardTratamientos
                                key={index}
                                noteType={tratamiento.noteType}
                                date={tratamiento.date}
                                description={tratamiento.description}
                                name={tratamiento.name}
                                status={tratamiento.status}
                            />
                        </div>
                    ))}

                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div >
                        <h2 className="text-xl font-bold mb-4">Medicacion Escencial</h2>

                        {medicacionEscencial.map(tratamiento => (
                        <div key={tratamiento.name} className="mb-4 break-inside-avoid shadow-md rounded-lg ">
                            <CardTratamientos
                            key={tratamiento.name}
                            noteType={tratamiento.noteType}
                            date={tratamiento.date}
                            description={tratamiento.description}
                            status={tratamiento.status}
                            name={tratamiento.name}
                            />
                        </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4">Tratamiento complementario</h2>
                        {tratamientoComplementario.map(tratamiento => (
                        <div key={tratamiento.name} className="mb-4 break-inside-avoid shadow-md rounded-lg ">
                            
                            <CardTratamientos
                                key={tratamiento.name}
                                noteType={tratamiento.noteType}
                                date={tratamiento.date}
                                description={tratamiento.description}
                                status={tratamiento.status}
                                name={tratamiento.name}
                            />
                        </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4">Otras indicaciones</h2>
                        {otrasIndicaciones.map(tratamiento => (
                        <div key={tratamiento.name} className="mb-4 break-inside-avoid shadow-md rounded-lg ">
                            <CardTratamientos
                                key={tratamiento.name}
                                noteType={tratamiento.noteType}
                                date={tratamiento.date}
                                description={tratamiento.description}
                                status={tratamiento.status}
                                name={tratamiento.name}
                            />
                        </div>
                        ))}
                    </div>
                </div>


                <div className=' items-baseline'>
                    <div className="">
                        <Dialog className="">
                            <DialogTrigger asChild>
                                <div>
                                    <Button className="rounded-3xl bg-inputPrimary space-x-4 float-right " >
                                        <PenLine />  <span >Agregar tratamiento</span>
                                    </Button>
                                </div>


                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[328px] md:max-w-[328px] lg:max-w-[328px] gap-2" >
                                <DialogHeader>
                                    <DialogTitle>Nuevo tratamiento</DialogTitle>
                                    <DialogDescription>
                                        Selecciona una etiqueta
                                    </DialogDescription>
                                </DialogHeader>

                                <div className=' '>
                                    <div className=" ">
                                        <div className=''>
                                            {uniqueNoteTypes.map((noteType) => (
                                                <div className='  '>
                                                    <Button
                                                        className={` my-1 rounded-sm  h-6 ${getBadgeClass(noteType)} {${newNote.noteType === noteType ? "bg-gray-200 text-lg " : "bg-gray-200"}}`}
                                                        onClick={() => setNewNote({ ...newNote, noteType: noteType })}
                                                    >
                                                        {noteType}
                                                    </Button>
                                                    {/* <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/20 ${getBadgeClass(noteType)}`}> {noteType} </span> */}
                                                </div>
                                            ))}




                                        </div>
                                        <Button variant="ghost" className="rounded-sm h-6 "><span className='text-green-700 flex underline'>Agregar etiqueta <Plus size={18} className='pt-1' /></span></Button>

                                    </div>
                                </div>
                                <div>
                                    <Label className="block text-sm font-medium mb-2">Detalle</Label>
                                    <Textarea
                                        name="description"
                                        value={newNote.description}
                                        onChange={handleInputChange}
                                        placeholder="Información sobre el tratamientoo"
                                        className=" p-2 border rounded w-full"
                                    />
                                </div>

                                <DialogFooter>
                                    <Button className="rounded-3xl bg-inputPrimary space-x-4 w-full" onClick={handleAddNote}>
                                        <PenLine />  <span >Agregar tratamiento</span>
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>






        </div>
    );
}

export default ViewTratamientos;

