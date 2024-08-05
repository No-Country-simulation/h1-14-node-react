"use client"

import { BookMarked } from 'lucide-react';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import CardTratamientos from "../cardTratamientos"
import CardSintomas from "../cardSintomas"
import { Button } from "@/Components/ui/button"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { PenLine, Plus, Clock, PlusCircle, Mic, Save, CircleStop } from "lucide-react";
import { getHours, getMinutes } from 'date-fns';
import { Calendar } from "@/Components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import { format } from "date-fns"
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

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sintomas = [
    {
        name: "Acidez estomacal (pirosis)",
        noteType: "Sintomas",
        description: "Sensación de ardor en el pecho causada por el ácido del estómago que viaja hacia la garganta (reflujo ácido).",
    },
    {
        name: "Ampollas",
        noteType: "Sintomas",
        description: "Pequeñas bolsas de líquido que se forman en la piel, a menudo causadas por fricción, quemaduras o infecciones.",
    },
    {
        name: "Ansiedad",
        noteType: "Sintomas",
        description: "Sentimientos de preocupación, nerviosismo o inquietud, típicamente sobre un evento inminente o algo con un resultado incierto.",
    },
    {
        name: "Bradicardia (latidos lentos)",
        noteType: "Sintomas",
        description: "Ritmo cardíaco más lento de lo normal, típicamente menos de 60 latidos por minuto en adultos.",
    },

];



const tratamientos = [
    {
        name: "Tacrolimus",
        noteType: "Medicacion Esencial",
        status: "2 mg dos veces al dia",
        instructions: "Tomar con el estomago vacio, 1 hora antes o 2 horas despues de las comidas",
        date: "2024-08-05T21:54:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "8",
        duration: "30",
    },
    {
        name: "Prednisona",
        noteType: "Medicacion Esencial",
        status: "5 mg una vez al dia",
        instructions: "Tomar con alimentos para evitar molestias estomacales",
        date: "2024-08-05T21:53:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "12",
        duration: "30",
    },
    {
        name: "Aspirina",
        noteType: "Tratamiento complementario",
        status: "100 mg una vez al dia",
        instructions: "Tomar con un vaso completo de agua",
        date: "2024-07-21T07:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "12",
        duration: "1",
    },
    {
        name: "Vitamina D",
        noteType: "Tratamiento complementario",
        status: "1000 UI una vez al dia",
        instructions: "Tomar con el desayuno",
        date: "2024-07-27T07:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "8",
        duration: "1",
    },
    {
        name: "Atorvastatina",
        noteType: "Medicacion Esencial",
        status: "20 mg una vez al dia por la noche",
        instructions: "Tomar con o sin alimentos",
        date: "2024-07-22T08:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "8",
        duration: "30",
    },
    {
        name: "Dolor ocular",
        noteType: "Sintomas",
        status: "",
        instructions: "Dolor o incomodidad en el ojo, que puede deberse a varias causas, incluyendo infección, lesión o fatiga ocular.",
        date: "2024-07-23T09:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "12",
        duration: "1",
    },
    {
        name: "Hidratacion",
        noteType: "Otras indicaciones",
        status: "3 litros por dia",
        instructions: "Mantener una ingesta adecuada de liquidos",
        date: "2024-07-20T06:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "48",
        duration: "30",
    },
    {
        name: "Atorvastatina",
        noteType: "Medicacion Esencial",
        status: "2 veces al dia",
        instructions: "Seguir una dieta baja en sal y rica en proteinas segun indicaciones del nutricionista",
        date: "2024-07-21T07:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "8",
        duration: "30",
    },
];

const initialTratamientos = [
    {
        name: "Tacrolimus",
        noteType: "Medicacion Esencial",
        status: "2 mg dos veces al dia",
        instructions: "Tomar con el estomago vacio, 1 hora antes o 2 horas despues de las comidas",
        date: "2024-08-05T22:02:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "8",
        duration: "30",
    },
    {
        name: "Prednisona",
        noteType: "Medicacion Esencial",
        status: "5 mg una vez al dia",
        instructions: "Tomar con alimentos para evitar molestias estomacales",
        date: "2024-08-05T22:01:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "12",
        duration: "30",
    },
    {
        name: "Aspirina",
        noteType: "Tratamiento complementario",
        status: "100 mg una vez al dia",
        instructions: "Tomar con un vaso completo de agua",
        date: "2024-07-21T07:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "12",
        duration: "1",
    },
    {
        name: "Vitamina D",
        noteType: "Tratamiento complementario",
        status: "1000 UI una vez al dia",
        instructions: "Tomar con el desayuno",
        date: "2024-07-27T07:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "8",
        duration: "1",
    },
    {
        name: "Atorvastatina",
        noteType: "Medicacion Esencial",
        status: "20 mg una vez al dia por la noche",
        instructions: "Tomar con o sin alimentos",
        date: "2024-07-22T08:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "8",
        duration: "30",
    },
    {
        name: "Dolor ocular",
        noteType: "Sintomas",
        status: "",
        instructions: "Dolor o incomodidad en el ojo, que puede deberse a varias causas, incluyendo infección, lesión o fatiga ocular.",
        date: "2024-07-23T09:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "12",
        duration: "1",
    },
    {
        name: "Hidratacion",
        noteType: "Otras indicaciones",
        status: "3 litros por dia",
        instructions: "Mantener una ingesta adecuada de liquidos",
        date: "2024-07-20T06:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "48",
        duration: "30",
    },
    {
        name: "Atorvastatina",
        noteType: "Medicacion Esencial",
        status: "2 veces al dia",
        instructions: "Seguir una dieta baja en sal y rica en proteinas segun indicaciones del nutricionista",
        date: "2024-07-21T07:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "8",
        duration: "30",
    },
];

function ViewTratamientosDoctor() {
    const [date1, setDate1] = useState((new Date()));

    const [tratamientos, setTratamientos] = useState(initialTratamientos);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    // const [newNote, setNewNote] = useState({ name: "", date: "", instructions: "", noteType: "", status: "" });
    const [newNote, setNewNote] = useState({
        name: "",
        dose: "",
        via: "",
        frequency: "",
        duration: "",
        noteType: "",
        status: "",
        instructions: "",
        date: ""
    });

    const medicacionEsencial = tratamientos.filter(tratamiento => tratamiento.noteType === "Medicacion Esencial");
    const tratamientoComplementario = tratamientos.filter(tratamiento => tratamiento.noteType === "Tratamiento complementario");
    const otrasIndicaciones = tratamientos.filter(tratamiento => tratamiento.noteType !== "Medicacion Esencial" && tratamiento.noteType !== "Tratamiento complementario");
    const otrosSintomas = tratamientos.filter(tratamiento => tratamiento.noteType === "Sintomas");

    const handleDateSelect = (date) => {
        if (!date || isNaN(new Date(date).getTime())) {
            setDate1(new Date());
        } else {
            setDate1(date);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNote({
            ...newNote,
            [name]: value
        });
    };

    const handleAddNote = () => {
        setTratamientos([...tratamientos, { ...newNote, date: date1.toISOString() }]);
        setIsDialogOpen(false);
        setNewNote({ name: "", dose: "", via: "", frequency: "", duration: "", noteType: "", status: "", instructions: "", date: "" });
    };


    const uniqueNoteTypes = [...new Set(tratamientos.map(tratamientos => tratamientos.noteType))];
    const getBadgeClass = (noteType) => {
        switch (noteType) {
            case "Medicacion Esencial":
                return " bg-greenBadge text-blackCardTitle";
            case "Tratamiento complementario":
                return "bg-yellowBadge text-blackCardTitle";
            case "Otras indicaciones":
                return "bg-purple-500 text-blackCardTitle";

            default:
                return "";
        }
    };

    //record
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const [isRecording, setIsRecording] = useState(false);

    const startListening = () => {
        setIsRecording(true);
        // SpeechRecognition.startListening({ continuous: true });
        SpeechRecognition.startListening({ continuous: true, language: 'es-ES' });
    };

    const stopListening = () => {
        setIsRecording(false);
        SpeechRecognition.stopListening();
    };

    const saveTranscription = () => {
        handleInputChange({ target: { name: 'instructions', value: transcript } });
        resetTranscript();
    };

    // UseEffect for showing toast
    useEffect(() => {
        const interval = setInterval(() => {
            tratamientos.forEach(tratamiento => {
                const tratamientoDate = new Date(tratamiento.date);
                const currentDate = new Date();
                const timeDifference = (tratamientoDate - currentDate) / 1000 / 60; // difference in minutes

                if (timeDifference <= 1 && timeDifference > 0) {
                    toast.info(
                        <div>
                            <h1>{tratamiento.instructions}</h1>
                            <div className='flex'>
                                <Button variant='ghost' className="text-black rounded-3xl bg-inputPrimary space-x-4 w-full" onClick={() => toast.dismiss()}>Confirmar</Button>
                                <Button variant='ghost' className="text-black rounded-3xl bg-pink600 space-x-4 w-full"onClick={() => delayAlert(event)}>Mas tarde</Button>
                            </div>
                        </div>,
                        {
                            autoClose: 30000, // 30 seconds
                        }
                    );
                }
            });
        }, 60000); // Check every minute

        return () => clearInterval(interval);
    }, [tratamientos]);

    const confirmAlert = (tratamiento) => {
        // handle confirmation
    };

    const delayAlert = (tratamiento) => {
        const updatedTratamientos = tratamientos.map(n => {
            if (n === tratamiento) {
                const newDate = new Date(new Date(n.date).getTime() + 60000); // delay by 1 minute
                return { ...n, date: newDate.toISOString() };
            }
            return n;
        });
        setTratamientos(updatedTratamientos);
    };


    return (
        <div className='flex bg-white'>

            <div className='flex bg-white'>
                <div className='bg-secondary p-4'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <h2 className="text-xl font-bold mb-4">Medicacion Esencial</h2>
                            {medicacionEsencial.map(tratamiento => (
                                <div key={tratamiento.name} className="mb-4 break-inside-avoid shadow-md rounded-lg ">
                                    <CardTratamientos
                                        key={tratamiento.name}
                                        noteType={tratamiento.noteType}
                                        date={tratamiento.date}
                                        instructions={tratamiento.instructions}
                                        status={tratamiento.status}
                                        name={tratamiento.name}
                                        dose={tratamiento.dose}
                                        via={tratamiento.via}
                                        frequency={tratamiento.frequency}
                                        duration={tratamiento.duration}
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
                                        instructions={tratamiento.instructions}
                                        status={tratamiento.status}
                                        name={tratamiento.name}
                                        dose={tratamiento.dose}
                                        via={tratamiento.via}
                                        frequency={tratamiento.frequency}
                                        duration={tratamiento.duration}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className='flex'>
                            <div>
                                <h2 className="text-xl font-bold mb-4">Sintomas</h2>
                                {otrosSintomas.map(tratamiento => (
                                    <div key={tratamiento.name} className="mb-4 break-inside-avoid shadow-md rounded-lg ">
                                        <CardSintomas
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
                    </div>

                    <div className='items-baseline'>
                        <div className="">
                            <Dialog className="">
                                <DialogTrigger asChild>
                                    <div>
                                        <Button className="rounded-3xl bg-inputPrimary space-x-4 float-right">
                                            <PenLine /> <span>Agregar tratamiento</span>
                                        </Button>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[500px] md:max-w-[500px] lg:max-w-[500px] gap-2">
                                    <DialogHeader>
                                        <DialogTitle>Nuevo tratamiento</DialogTitle>
                                    </DialogHeader>


                                    <div>
                                        <Label className="block text-sm font-medium mb-2">Nombre</Label>
                                        <Input
                                            name="name"
                                            value={newNote.name}
                                            onChange={handleInputChange}
                                            placeholder="Nombre del tratamiento"
                                            className="p-2 border rounded w-full"
                                        />
                                    </div>
                                    <div className='flex space-x-4'>
                                        <div>
                                            <Label className="block text-sm font-medium mb-2">Dosis</Label>
                                            <Input
                                                name="dose"
                                                value={newNote.dose}
                                                onChange={handleInputChange}
                                                placeholder="Dosis"
                                                className="p-2 border rounded w-full"
                                            />
                                        </div>

                                        <div>
                                            <Label className="block text-sm font-medium mb-2">Vía</Label>
                                            <Input
                                                name="via"
                                                value={newNote.via}
                                                onChange={handleInputChange}
                                                placeholder="Vía"
                                                className="p-2 border rounded w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className='flex space-x-4'>
                                        <div>
                                            <Label className="block text-sm font-medium mb-2">Frecuencia</Label>
                                            <Input
                                                name="frequency"
                                                value={newNote.frequency}
                                                onChange={handleInputChange}
                                                placeholder="Frecuencia"
                                                className="p-2 border rounded w-full"
                                            />
                                        </div>

                                        <div>
                                            <Label className="block text-sm font-medium mb-2">Duración</Label>
                                            <Input
                                                name="duration"
                                                value={newNote.duration}
                                                onChange={handleInputChange}
                                                placeholder="Duración"
                                                className="p-2 border rounded w-full"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            <label className="inline-flex items-center text-sm text-grayTableTextSmall">
                                                <input
                                                    type="radio"
                                                    name="noteType"
                                                    value="Medicacion Esencial"
                                                    checked={newNote.noteType === "Medicacion Esencial"}
                                                    onChange={handleInputChange}
                                                    className="form-radio"
                                                />
                                                <span className="ml-2">Medicacion Esencial</span>
                                            </label>
                                            <label className="inline-flex items-center text-sm text-grayTableTextSmall">
                                                <input
                                                    type="radio"
                                                    name="noteType"
                                                    value="Tratamiento complementario"
                                                    checked={newNote.noteType === "Tratamiento complementario"}
                                                    onChange={handleInputChange}
                                                    className="form-radio"
                                                />
                                                <span className="ml-2">Tratamiento complementario</span>
                                            </label>

                                        </div>
                                    </div>


                                    <div>
                                        <div className=''>
                                            <Label className=" block text-sm font-medium mb-2">Instrucciones
                                                <span className=' flex float-right text-mic space-x-2'>
                                                    {/* <CircleStop stroke='#D92626' /><Mic /><Save /> */}
                                                    {isRecording ? (
                                                        <Button variant="ghost" ><CircleStop stroke='#D92626' onClick={stopListening} /></Button>
                                                    ) : (
                                                        <Button variant="ghost" ><Mic onClick={startListening} /></Button>
                                                    )}
                                                    <Button variant="ghost" ><Save onClick={saveTranscription} /></Button>
                                                </span>
                                            </Label>
                                            <p className='text-xs text-circleStop'>{listening ? 'Escuchando...' : ''}</p>
                                        </div>
                                        <Textarea
                                            name="instructions"
                                            value={newNote.instructions || transcript}
                                            onChange={handleInputChange}
                                            placeholder="Instrucciones"
                                            className="p-2 border rounded w-full"
                                        />
                                    </div>
                                    <div>


                                        <Label className="block text-sm font-medium mb-2">Fecha de reposicion</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[280px] justify-start text-left font-normal",
                                                        !date1 && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date1 ? format(date1, "PPP") : <span>Seleccione fecha</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date1}
                                                    onSelect={handleDateSelect}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div  >
                                        <a href='#'><Button size="sm" className="rounded-sm h-6 bg-greenButtonBg text-greenButtonText space-x-2" Type="link" ><PlusCircle size={16} /><span >  Agregar medicamento</span></Button></a>

                                    </div>
                                    <DialogFooter>
                                        <Button size="sm" className="rounded-3xl bg-secondary text-primary space-x-4 w-full" onClick={""}>Cancelar</Button>
                                        <Button size="sm" className="rounded-3xl bg-inputPrimary space-x-4 w-full" onClick={handleAddNote}>Guardar</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ViewTratamientosDoctor;