"use client"

import { BookMarked } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import CardNotas from "../cardNotas"
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

const notas = [
    {
        noteType: "Sintomas",
        date: "2024-07-19 02:50:00",
        description: "Dolor leve en la zona de la punsión durante la noche. No es constante, pero ocurre varias veces al día. También noté algo de hinchazón. Intensidad: 4/10",
        mark: "Marcada",
    },
    {
        noteType: "Sintomas",
        date: "2024-07-19 01:50:00",
        description: "Hoy tuve fiebre baja durante la tarde, acompañada de escalofríos. La fiebre llegó a 37.8°C.",
        mark: "Marcada"

    },
    {
        noteType: "Sintomas",
        date: "2024-07-19 03:50:00",
        description: "Tuve dolores de cabeza frecuentes, especialmente por las mañanas. No parecen ser muy intensos, pero son persistentes.",
        mark: "Marcada"

    },
    {
        noteType: "Preguntas",
        date: "2024-07-19 04:50:00",
        description: "¿Cuáles son los efectos secundarios a la larga de mi medicación?",
        mark: "Marcada"
    },
    {
        noteType: "Preguntas",
        date: "2024-07-19 05:50:00",
        description: "¿Qué puedo hacer para reducir la hinchazón en las piernas? ¿Es normal tener mareos ocasionales después de tomar mis medicamentos?",
        mark: "Marcada"

    },
    {
        noteType: "Preguntas",
        date: "2024-07-19 02:00:00",
        description: "¿Qué alternativas tengo si los efectos secundarios del medicamento son muy molestos? ¿Es seguro hacer ejercicio intenso en mi estado actual? ¿Debería preocuparme por la pérdida de cabello desde que comencé el nuevo tratamiento? ¿Hay alguna vacuna que necesite evitar debido a mi trasplante? ¿Cómo puedo mejorar mi sistema inmunológico de manera segura? ¿Qué debo hacer si olvido una dosis de mi medicamento?",
        mark: "Marcada"

    },
    {
        noteType: "Emociones",
        date: "2024-07-19 03:00:00",
        description: "¿Me sentí un poco deprimido hoy. Tal vez debería considerar ajustar mi rutina para incluir más actividades agradables.",
        mark: "Marcada"

    },
    {
        noteType: "Emociones",
        date: "2024-07-20 02:00:00",
        description: "Experimenté un episodio de ansiedad ayer. Utilicé técnicas de respiración profunda para calmarme y funcionaron bien.",
        mark: "Marcada"

    },
]

const initialNotas = [
    {
        noteType: "Sintomas",
        date: "2024-07-19 02:50:00",
        description: "Dolor leve en la zona de la punsión durante la noche. No es constante, pero ocurre varias veces al día. También noté algo de hinchazón. Intensidad: 4/10",
        mark: "Marcada",
    },
    {
        noteType: "Sintomas",
        date: "2024-07-19 01:50:00",
        description: "Hoy tuve fiebre baja durante la tarde, acompañada de escalofríos. La fiebre llegó a 37.8°C.",
        mark: "Marcada"
    },
    {
        noteType: "Sintomas",
        date: "2024-07-19 03:50:00",
        description: "Tuve dolores de cabeza frecuentes, especialmente por las mañanas. No parecen ser muy intensos, pero son persistentes.",
        mark: "Marcada"
    },
    {
        noteType: "Preguntas",
        date: "2024-07-19 04:50:00",
        description: "¿Cuáles son los efectos secundarios a la larga de mi medicación?",
        mark: "Marcada"
    },
    {
        noteType: "Preguntas",
        date: "2024-07-19 05:50:00",
        description: "¿Qué puedo hacer para reducir la hinchazón en las piernas? ¿Es normal tener mareos ocasionales después de tomar mis medicamentos?",
        mark: "Marcada"
    },
    {
        noteType: "Preguntas",
        date: "2024-07-19 02:00:00",
        description: "¿Qué alternativas tengo si los efectos secundarios del medicamento son muy molestos? ¿Es seguro hacer ejercicio intenso en mi estado actual? ¿Debería preocuparme por la pérdida de cabello desde que comencé el nuevo tratamiento? ¿Hay alguna vacuna que necesite evitar debido a mi trasplante? ¿Cómo puedo mejorar mi sistema inmunológico de manera segura? ¿Qué debo hacer si olvido una dosis de mi medicamento?",
        mark: "Marcada"
    },
    {
        noteType: "Emociones",
        date: "2024-07-19 03:00:00",
        description: "¿Me sentí un poco deprimido hoy. Tal vez debería considerar ajustar mi rutina para incluir más actividades agradables.",
        mark: "Marcada"
    },
    {
        noteType: "Emociones",
        date: "2024-07-20 02:00:00",
        description: "Experimenté un episodio de ansiedad ayer. Utilicé técnicas de respiración profunda para calmarme y funcionaron bien.",
        mark: "Marcada"
    },
];

function ViewNotas() {

    const [notas, setNotas] = useState(initialNotas);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newNote, setNewNote] = useState({ noteType: "", date: "", description: "", mark: "Marcada" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNote({
            ...newNote,
            [name]: value
        });
    };

    const handleAddNote = () => {
        setNotas([...notas, { ...newNote, date: new Date().toISOString() }]);
        setIsDialogOpen(false);
        setNewNote({ noteType: "", date: "", description: "", mark: "Marcada" });
    };

    const uniqueNoteTypes = [...new Set(notas.map(notas => notas.noteType))];
    const getBadgeClass = (noteType) => {
        switch (noteType) {
            case "Preguntas":
                return "bg-pink-900 text-white";
            case "Emociones":
                return "bg-blue-600 text-white";
            case "Sintomas":
                return "bg-green-400 text-white";
            //    return "'bg-green-500 text-white' : 'bg-green-200'";

            default:
                return "";
        }
    };

    return (
        <div className='flex bg-white'>
            <div className='bg-secondary p-4'>
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 px-2">
                    {notas.map((nota, index) => (

                        <div key={index} className="mb-4 break-inside-avoid shadow-md rounded-lg ">
                            <CardNotas
                                key={index}
                                noteType={nota.noteType}
                                date={nota.date}
                                description={nota.description}
                                mark={nota.mark}
                            />
                        </div>
                    ))}

                </div>
                <div className=' items-baseline'>
                    <div className="">
                        <Dialog className="">
                            <DialogTrigger asChild>
                                <div>
                                    <Button className="rounded-3xl bg-inputPrimary space-x-4 float-right " >
                                        <PenLine />  <span >Agregar nota</span>
                                    </Button>
                                </div>


                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[328px] md:max-w-[328px] lg:max-w-[328px] gap-2">
                                <DialogHeader>
                                    <DialogTitle>Nueva nota</DialogTitle>
                                    <DialogDescription>
                                        Selecciona una etiqueta
                                    </DialogDescription>
                                </DialogHeader>

                                <div className=' '>
                                    <div className=" ">
                                        <div className='columns-2 sm:columns-2 lg:columns-2'>
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
                                        <Button variant = "ghost" className="rounded-sm h-6 "><span className='text-green-700 flex underline'>Agregar etiqueta <Plus size={18} className='pt-1' /></span></Button>

                                    </div>
                                </div>
                                <div>
                                    <Label className="block text-sm font-medium mb-2">Detalle</Label>
                                    <Textarea
                                        name="description"
                                        value={newNote.description}
                                        onChange={handleInputChange}
                                        placeholder="Información sobre el evento"
                                        className=" p-2 border rounded w-full"
                                    />
                                </div>
                                
                                <DialogFooter>
                                    <Button className="rounded-3xl bg-inputPrimary space-x-4 w-full" onClick={handleAddNote}>
                                        <PenLine />  <span >Agregar nota</span>
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

export default ViewNotas;

