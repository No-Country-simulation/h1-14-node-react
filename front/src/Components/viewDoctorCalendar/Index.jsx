"use client"

import React, { useState, useMemo, useEffect } from 'react';
import { Calendar } from "@/Components/ui/calendar"
import mascota from "../../assets/mascota.svg";
import rectangle_78 from "../../assets/rectangle_78.svg";

import {
    Square,
    SquarePen,
    SquareCheckBig,
    Clock,
    Trash2,
    PenLine,
    Search,
    Plus,
    ArrowUpDown,
    ChevronDown,
    MoreHorizontal,
    Badge,
    SeparatorHorizontal
} from "lucide-react"

import { Button } from "@/Components/ui/button"
import { Checkbox } from "@/Components/ui/checkbox"
import { Label } from "@/Components/ui/label"
import { Input } from "@/Components/ui/input"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/Components/ui/dropdown-menu"

import { es } from "date-fns/locale";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { datetimeRegex } from 'zod';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog"
import { Textarea } from '@/Components/ui/textarea';
import { getHours, getMinutes } from 'date-fns';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination"

const events = [
    {
        event: "Juan Pérez",
        status: "Done",
        dateTime: "2024-07-19T05:50:00Z",
        eventType: "Consulta",
    },
    {
        event: "Cristina López",
        status: "Pending",
        dateTime: "2024-07-19T04:50:00Z",
        eventType: "Consulta",
    },
    {
        event: "Lic. Maristella González",
        status: "Undone",
        dateTime: "2024-07-19T06:50:00Z",
        eventType: "Sobreturno",
    },
    {
        event: "Amelia Ferreyra",
        status: "Done",
        dateTime: "2024-07-19T07:50:00Z",
        eventType: "Sobreturno",
    },
    {
        event: "Tacrolimus 1 mg",
        status: "Done",
        dateTime: "2024-07-19T08:50:00Z",
        eventType: "Junta medica",
    },
    {
        event: "INV006",
        status: "Pending",
        dateTime: "2024-07-19T05:00:00Z",
        eventType: "Junta medica",
    },
    {
        event: "Amilcar Ramírez",
        status: "Undone",
        dateTime: "2024-07-19T06:00:00Z",
        eventType: "Consulta",
    },
    {
        event: "Amelia Ferreyra",
        status: "Pending",
        dateTime: "2024-07-19T05:00:00Z",
        eventType: "Sobreturno",
    },
    {
        event: "Valganciclovir 450mg",
        status: "Undone",
        dateTime: "2024-07-19T06:00:00Z",
        eventType: "Consulta",
    },
    {
        event: "INV010",
        status: "Pending",
        dateTime: "2024-07-20T05:00:00Z",
        eventType: "Junta medica",
    },
    {
        event: "INV011",
        status: "Undone",
        dateTime: "2024-07-20T06:00:00Z",
        eventType: "Consulta",
    }
];

const initialEvents = [
    {
        event: "Juan Pérez",
        status: "Done",
        dateTime: "2024-07-19T05:50:00Z",
        eventType: "Consulta",
    },
    {
        event: "Cristina López",
        status: "Pending",
        dateTime: "2024-07-19T04:50:00Z",
        eventType: "Consulta",
    },
    {
        event: "Lic. Maristella González",
        status: "Undone",
        dateTime: "2024-07-19T06:50:00Z",
        eventType: "Sobreturno",
    },
    {
        event: "Amelia Ferreyra",
        status: "Done",
        dateTime: "2024-07-19T07:50:00Z",
        eventType: "Sobreturno",
    },
    {
        event: "Tacrolimus 1 mg",
        status: "Done",
        dateTime: "2024-07-19T08:50:00Z",
        eventType: "Junta medica",
    },
    {
        event: "INV006",
        status: "Pending",
        dateTime: "2024-07-19T05:00:00Z",
        eventType: "Junta medica",
    },
    {
        event: "Amilcar Ramírez",
        status: "Undone",
        dateTime: "2024-07-19T06:00:00Z",
        eventType: "Consulta",
    },
    {
        event: "Amelia Ferreyra",
        status: "Pending",
        dateTime: "2024-07-19T05:00:00Z",
        eventType: "Sobreturno",
    },
    {
        event: "Valganciclovir 450mg",
        status: "Undone",
        dateTime: "2024-07-19T06:00:00Z",
        eventType: "Consulta",
    },
    {
        event: "INV010",
        status: "Pending",
        dateTime: "2024-07-20T05:00:00Z",
        eventType: "Junta medica",
    },
    {
        event: "INV011",
        status: "Undone",
        dateTime: "2024-07-20T06:00:00Z",
        eventType: "Consulta",
    }
];


function ViewDoctorCalendar() {

    //Calendar right side
    // const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [date, setDate] = React.useState(null);

    //calendar on the right
    const [date1, setDate1] = useState(new Date());
    // const [date1, setDate1] = useState(() => {
    //     const initialDate = new Date(date1);
    //     return initialDate && !isNaN(initialDate) ? initialDate : new Date();
    // });

    const handleDateSelect = (date) => {
        if (!date || isNaN(new Date(date).getTime())) {
            setDate1(new Date());
        } else {
            setDate1(date);
        }
    };

    const [events, setEvents] = useState(initialEvents);


    const getStatusClass = (status) => {
        switch (status) {
            case "Done":
                return <SquareCheckBig />;
            case "Pending":
                return <Clock />;
            case "Undone":
                return <Square />;
            default:
                return "";
        }
    };


    const getBadgeClass = (eventType) => {
        switch (eventType) {
            case "Consulta":
                return "bg-purple500 text-blackBadgeText";
            case "Junta medica":
                return "bg-yellowBadge text-blackBadgeText";
            case "Sobreturno":
                return "bg-greenBadge text-blackBadgeText";

            default:
                return "";
        }
    };


    // Extract unique event types
    // const uniqueEventTypes = [...new Set(events.map(event => event.eventType))];   //unsorted list
    const uniqueEventTypes = useMemo(() => [...new Set(events.map(event => event.eventType))].sort(), [events]);

    const doneCount = events.filter(event => event.status === "Done").length;
    const pendingCount = events.filter(event => event.status === "Pending").length;
    const undoneCount = events.filter(event => event.status === "Undone").length;
    const totalCount = events.length;

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState(uniqueEventTypes);

    const [searchKeyword, setSearchKeyword] = useState("");

    // const filteredEvents = useMemo(() => {
    //     if (selectedCategories.length === 0) {
    //         return events;
    //     }
    //     return events.filter(event => selectedCategories.includes(event.eventType));
    // }, [events, selectedCategories]);

    // const filteredEvents = useMemo(() => {
    //     return events.filter(event =>
    //         (selectedCategories.length === 0 || selectedCategories.includes(event.eventType)) &&
    //         selectedTypes.includes(event.eventType) &&
    //         new Date(event.dateTime).toDateString() === date1.toDateString()
    //     );
    // }, [events, selectedCategories, selectedTypes, date1]);

    const filteredEvents = useMemo(() => {


        let filtered = events.filter(event =>
            (selectedCategories.length === 0 || selectedCategories.includes(event.eventType)) &&
            selectedTypes.includes(event.eventType) &&
            new Date(event.dateTime).toDateString() === date1.toDateString()
        );

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(event => selectedCategories.includes(event.eventType));
        }

        if (searchKeyword) {
            filtered = filtered.filter(event => event.event.toLowerCase().includes(searchKeyword.toLowerCase()));
        }

        return filtered;
    }, [events, selectedCategories, selectedTypes, date1, searchKeyword]);


    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const toggleType = (type) => {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const formatDateToES = (date) => {
        return new Intl.DateTimeFormat('es-ES', {
            // hour: 'numeric',
            // minute: '2-digit',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(date);
    };
    const formatDateTimeToHHmm = (dateTime) => {
        const date = new Date(dateTime);
        return new Intl.DateTimeFormat('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            // day: 'numeric',
            // month: 'numeric',
            // year: 'numeric'
        }).format(date);
    };


    // Agregar eventos    
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ eventType: "", dateTime: "", event: "", status: "Undone" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({
            ...newEvent,
            [name]: value
        });
    };

    const handleAddEvent = (currentDate) => {
        setEvents((prevEvents) => [
            ...prevEvents,
            { ...newEvent, dateTime: currentDate.toISOString() }
        ]);
        setIsDialogOpen(false);
        setNewEvent({ eventType: "", dateTime: "", event: "", status: "Undone" });
    };

    //Hora
    const [time, setTime] = useState({ hour: '', minute: '' });
    const handleTimeChange = (e) => {
        const { name, value } = e.target;
        setTime((prev) => ({ ...prev, [name]: value }));

        // Update the date1 state to include the selected time
        const updatedDate = new Date(date1);
        if (name === 'hour') {
            updatedDate.setHours(value);
        } else if (name === 'minute') {
            updatedDate.setMinutes(value);
        }
        setDate1(updatedDate);
    };

    //Repetir
    const [repeatSettings, setRepeatSettings] = useState({ day: '', repetition: '', totalTimes: '' });
    const handleRepeatSettingsChange = (e) => {
        const { name, value } = e.target;
        setRepeatSettings((prev) => ({ ...prev, [name]: value }));
    };


    //     for (let i = 1; i < totalTimes; i++) {
    //         handleAddEvent(currentDate);
    //         const deltaTimeInMilliseconds = deltaTime * 24 * 60 * 60 * 1000;
    //         currentDate = new Date(currentDate.getTime() + deltaTimeInMilliseconds);
    //         // currentDate = new Date(currentDate);
    //         console.log("deltaTime: " + deltaTime);
    //         currentDate.setDate(currentDate.getDate() + deltaTime);
    //         console.log("CurrentDate + deltaTime: " + currentDate);
    //     }
    // };

    const addEvents = () => {
        const { day, repetition, totalTimes } = repeatSettings;

        if (!repeatSettings.day || repeatSettings.day === "") {
            setRepeatSettings((prevSettings) => ({
                ...prevSettings,
                day: 1
            }));
        }
        if (!repeatSettings.repetition || repeatSettings.repetition === "") {
            setRepeatSettings((prevSettings) => ({
                ...prevSettings,
                repetition: 1
            }));
        }
        if (!repeatSettings.totalTimes || repeatSettings.totalTimes === "") {
            setRepeatSettings((prevSettings) => ({
                ...prevSettings,
                totalTimes: 1
            }));
        }

        const deltaTime = day / repetition;
        console.log(deltaTime);

        let currentDate = new Date(date1);
        console.log("CurrentDate: " + currentDate);

        for (let i = 0; i < totalTimes; i++) {
            handleAddEvent(currentDate);

            // Increment currentDate by deltaTime days (converted to milliseconds)
            const deltaTimeInMilliseconds = deltaTime * 24 * 60 * 60 * 1000;
            currentDate = new Date(currentDate.getTime() + deltaTimeInMilliseconds);

            console.log("deltaTime: " + deltaTime);
            console.log("CurrentDate + deltaTime: " + currentDate);
        }
    };

//Pagination
const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // You can adjust this value

    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedEvents = filteredEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);



    return (
        <div className=' flex  '>
            <div className='flex-grow bg-secondary p-4 w-2/3'>
                <h4 className="text-3xl sm:text-2xl font-normal">Dia: {formatDateToES(date1)}</h4>
                <p>Esta es tu agenda de eventos del día.</p>
                <div className="flex pt-4 space-x-20 ">
                    <div className='relative w-full'>
                        <Input
                            type="text"
                            placeholder="Buscar en tabla"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            className="px-12 mb-4"
                        /> <span className='absolute bottom-4 left-4  py-2 '> <Search /></span>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="">Categoria</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Seleccione Categorias</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {uniqueEventTypes.map(type => (
                                <DropdownMenuCheckboxItem
                                    key={type}
                                    checked={selectedCategories.includes(type)}
                                    onCheckedChange={() => toggleCategory(type)}
                                >
                                    {type}
                                </DropdownMenuCheckboxItem>
                            ))}
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem
                                checked={selectedCategories.length === 0}
                                onCheckedChange={() => setSelectedCategories([])}
                            >
                                Mostrar todas
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className='w-full rounded-lg border bg-white'>

                    <Table >

                        <TableHeader className="bg-greenTableTittle">
                            <TableRow>
                                <TableHead className="w-auto text-white"><Square /></TableHead>
                                <TableHead className="w-auto text-white">Horario</TableHead>
                                <TableHead className="w-auto text-white" >Categoria</TableHead>
                                <TableHead className="w-auto text-white">Paciente</TableHead>
                                <TableHead className="w-auto text-white"></TableHead>
                                <TableHead className="w-auto text-white"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody  >
                            {/* {events.map((event) => ( */}
                            {/* {filteredEvents.map((event) => ( */}
                            {paginatedEvents.map((event) => (
                                <TableRow key={event.event}>
                                    <TableCell> {getStatusClass(event.status)}</TableCell>
                                    <TableCell className="">{formatDateTimeToHHmm(event.dateTime)}</TableCell>
                                    <TableCell><span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/20 ${getBadgeClass(event.eventType)}`}> {event.eventType} </span> </TableCell>

                                    <TableCell className="font-medium">{event.event}</TableCell>
                                    <TableCell><SquarePen stroke="#5666bf" /></TableCell>
                                    <TableCell><Trash2 stroke="#DA286D" /></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                        {/* <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell colSpan={3}><Button variant="outline">Anterior</Button><Button variant="outline">Siguente</Button></TableCell>
                            </TableRow>
                        </TableFooter>
                        <TableCaption></TableCaption> */}
                    </Table>
                </div>

                <div className="p-4">
                    <span className='text-sm text-blue-500 text-left'> {`${doneCount}`} evento(s) de {`${totalCount}`} registrados.</span>
                    <div className="float-right">
                        <Pagination >
                            <PaginationContent className="space-x-4">
                                <PaginationItem>
                                    <PaginationPrevious 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (currentPage > 1) handlePageChange(currentPage - 1);
                                    }}
                                     className="rounded-md bg-white outline-gray-700 text-blue500"
                                     />
                                </PaginationItem>
                                {Array.from({ length: totalPages }).map((_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink 
                                    href="#"onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(index + 1);
                                    }}
                                     className="rounded-md bg-blue500 outline-gray-700 text-white"
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                                ))}
                                <PaginationItem>
                                    <PaginationEllipsis 
                                    className="rounded-md text-blue500"/>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (currentPage < totalPages) handlePageChange(currentPage + 1);
                                    }}
                                    className="rounded-md bg-white outline-gray-700 text-blue500"
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>

                    </div>
                    {/* <Button variant="outline" className="float-right">Anterior</Button><Button variant="outline" className="float-right">Siguente</Button> */}
                </div>
            </div>

            <div className='flex-grow max-w-min  p-4  bg-white'>

                <h4 className="text-3xl sm:text-2xl font-normal">Selecciona una fecha para ver los eventos del día.</h4>

                <div className='py-4'>
                    <Calendar
                        mode="single"
                        selected={date1}
                        onSelect={handleDateSelect}
                        className=" w-fit rounded-md border"
                    />
                </div>
                <div >
                    <h4 className="text-3xl sm:text-2xl font-normal">Tipo de evento</h4>
                    <ul className='py-4'>
                        {uniqueEventTypes.map((type, index) => (
                            <li key={index} className="mb-2">
                                <Checkbox id={`eventType-${type}`}
                                    checked={selectedTypes.includes(type)}
                                    onCheckedChange={() => toggleType(type)}
                                />
                                <Label htmlFor={`eventType-${type}`} className="ml-2">{type}</Label>
                            </li>
                        ))}
                    </ul>

                </div>

                <div >
                    <div className='relative px-10'>
                        <img
                            src={rectangle_78}
                            className="w-full h-auto "
                            alt="rectangle_78"
                        />
                        <span className='absolute bottom-4 left-4 px-10 py-2 '>¡No hagas esperar a ningún paciente!</span>
                    </div>
                    <div className='flex items-baseline space-x-4'>
                        <img
                            src={mascota}
                            className=""
                            alt="mascota"
                        />
                        {/* <Button className="rounded-3xl bg-inputPrimary space-x-4" type="submit">
                            <PenLine />  <span >Agregar evento</span>
                        </Button> */}


                        {/* //agregar evento */}
                        <div className=' items-baseline'>
                            <div className="">
                                <Dialog className="">
                                    <DialogTrigger asChild>
                                        <div>
                                            <Button className="rounded-3xl bg-inputPrimary space-x-4 float-right " >
                                                <PenLine />  <span >Agregar evento</span>
                                            </Button>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[350px] md:max-w-[350px] lg:max-w-[350px] gap-2 overflow-y-auto max-h-[80vh]">
                                        <DialogHeader>
                                            <DialogTitle>Nuevo evento</DialogTitle>
                                            <DialogDescription>
                                                Selecciona la fecha y el horario del evento
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className='py-4 rounded-md border  items-center'>
                                            <div className='items-center'>
                                                <Calendar
                                                    mode="single"
                                                    selected={date1}
                                                    onSelect={setDate1}
                                                    className=" w-fit"
                                                />
                                                <div className=" px-4  ">
                                                    <hr >
                                                    </hr>

                                                </div>

                                            </div>
                                            {/* Campos de hora  */}
                                            <div className=' pt-2 px-4'>
                                                <div className='flex space-x-4 align-baseline'>
                                                    <div>
                                                        <Label className="block text-sm font-medium mb-2 text-blue-500">Hora</Label>
                                                        <input
                                                            type="number"
                                                            name="hour"
                                                            value={time.hour}
                                                            onChange={handleTimeChange}
                                                            placeholder={getHours(date1)}
                                                            className="py-2 px-1 border rounded-md w-16  text-center"
                                                            min="0"
                                                            max="23"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label className="block text-sm font-medium mb-2  text-blue-500">Minutos</Label>

                                                        <div className='flex'>
                                                            <input
                                                                type="number"
                                                                name="minute"
                                                                value={time.minute}
                                                                onChange={handleTimeChange}
                                                                placeholder={getMinutes(date1)}
                                                                className="py-2 px-1 border rounded w-16 text-center"
                                                                min="0"
                                                                max="59"
                                                            /> <span className='bottom-4 pl-4 py-2 '> <Clock stroke="#5666bf" /></span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        {/* Campos repetir evento */}
                                        <div className='py-2'>
                                            <Label className="block text-sm font-medium mb-2">Días</Label>
                                            <input
                                                type="number"
                                                name="day"
                                                value={repeatSettings.day}
                                                onChange={handleRepeatSettingsChange}
                                                placeholder="¿Cada cuantos dias?"
                                                className="p-2 border rounded w-full"
                                                min="1"
                                                max="365"
                                            />
                                        </div>
                                        <div className='py-2'>
                                            <Label className="block text-sm font-medium mb-2">Veces por dia</Label>
                                            <input
                                                type="number"
                                                name="repetition"
                                                value={repeatSettings.repetition}
                                                onChange={handleRepeatSettingsChange}
                                                placeholder="¿Cuantas veces por dia?"
                                                className="p-2 border rounded w-full"
                                                min="1"
                                                max="99"
                                            />
                                        </div>

                                        <div className='py-2'>
                                            <Label className="block text-sm font-medium mb-2">Total de Veces</Label>
                                            <input
                                                type="number"
                                                name="totalTimes"
                                                value={repeatSettings.totalTimes}
                                                onChange={handleRepeatSettingsChange}
                                                placeholder="Numero total de veces"
                                                className="p-2 border rounded w-full"
                                                min="1"
                                                max="365"
                                            />
                                        </div>



                                        <div className=' '>
                                            <div className=" ">
                                                <div className='columns-2 sm:columns-2 lg:columns-2'>
                                                    {uniqueEventTypes.map((eventType) => (
                                                        <div className='  '>
                                                            <Button
                                                                className={` my-1 h-6 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/20 ${getBadgeClass(eventType)} {${newEvent.eventType === eventType ? "bg-gray-200 text-base " : "bg-gray-200"}}`}
                                                                onClick={() => setNewEvent({ ...newEvent, eventType: eventType })}
                                                            >
                                                                {eventType}
                                                            </Button>
                                                            {/* <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/20 ${getBadgeClass(eventType)}`}
                                                                onClick={() => setNewEvent({ ...newEvent, eventType: eventType })}
                                                            > {eventType} </span> */}
                                                        </div>
                                                    ))}




                                                </div>
                                                <Button variant="ghost" className="rounded-sm h-6 "><span className='text-green-700 flex underline'>Agregar etiqueta <Plus size={18} className='pt-1' /></span></Button>

                                            </div>
                                        </div>
                                        <div>
                                            <Label className="block text-sm font-medium mb-2">Detalle</Label>
                                            <Textarea
                                                name="event"
                                                value={newEvent.event}
                                                onChange={handleInputChange}
                                                placeholder="Información sobre el evento"
                                                className=" p-2 border rounded w-full"
                                            />
                                        </div>

                                        <DialogFooter>
                                            {/* <Button className="rounded-3xl bg-inputPrimary space-x-4 w-full" onClick={handleAddEvent}> */}
                                            <Button className="rounded-3xl bg-inputPrimary space-x-4 w-full" onClick={addEvents}>
                                                <PenLine />  <span >Agregar evento</span>
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>








    );
}

export default ViewDoctorCalendar;

