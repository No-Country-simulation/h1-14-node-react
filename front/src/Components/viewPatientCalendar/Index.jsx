"use client"

import React, { useState, useMemo } from 'react';

import { Calendar } from "@/Components/ui/calendar"

import {
    Square,
    SquarePen,
    SquareCheckBig,
    Clock,
    Trash2,
    ArrowUpDown,
    ChevronDown,
    MoreHorizontal,
    Badge
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

function ViewPatientCalendar() {

    //Calendar right side
    // const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [date, setDate] = React.useState(null);

    //calendar on the right
    const [date1, setDate1] = useState((new Date()));


    const events = [
        {
            event: "INV001",
            status: "Done",
            dateTime: "2024-07-19 02:50:00",
            eventType: "Medicacion",
        },
        {
            event: "INV002",
            status: "Pending",
            dateTime: "2024-07-19 01:50:00",
            eventType: "Ejercicio",
        },
        {
            event: "INV003",
            status: "Undone",
            dateTime: "2024-07-19 03:50:00",
            eventType: "Alimentacion",
        },
        {
            event: "INV004",
            status: "Done",
            dateTime: "2024-07-19 04:50:00",
            eventType: "Medicacion",
        },
        {
            event: "INV005",
            status: "Done",
            dateTime: "2024-07-19 05:50:00",
            eventType: "Ejercicio",
        },
        {
            event: "INV006",
            status: "Pending",
            dateTime: "2024-07-19 02:00:00",
            eventType: "Alimentacion",
        },
        {
            event: "INV007",
            status: "Undone",
            dateTime: "2024-07-19 03:00:00",
            eventType: "Medicacion",
        },
        {
            event: "INV008",
            status: "Pending",
            dateTime: "2024-07-20 02:00:00",
            eventType: "Alimentacion",
        },
        {
            event: "INV009",
            status: "Undone",
            dateTime: "2024-07-20 03:00:00",
            eventType: "Medicacion",
        },
    ];

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
            case "Medicacion":
                return "bg-purple-500 text-white";
            case "Ejercicio":
                return "bg-yellow-500 text-white";
            case "Alimentacion":
                return "bg-green-500 text-white";
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
    const [selectedTypes, setSelectedTypes] = useState([]);

    // const filteredEvents = useMemo(() => {
    //     if (selectedCategories.length === 0) {
    //         return events;
    //     }
    //     return events.filter(event => selectedCategories.includes(event.eventType));
    // }, [events, selectedCategories]);
    
    const filteredEvents = useMemo(() => {
        return events.filter(event =>
            (selectedCategories.length === 0 || selectedCategories.includes(event.eventType)) &&
            selectedTypes.includes(event.eventType) &&
            new Date(event.dateTime).toDateString() === date1.toDateString()
        );
    }, [events, selectedCategories, selectedTypes, date1]);


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


    return (
        <div className='flex bg-white'>
            <div className='bg-secondary p-4'>
                <h4 className="text-3xl sm:text-2xl font-normal">Fecha:{date1.toLocaleDateString()}</h4>
                <p>Esta es tu agenda de eventos del día.</p>
                <div className="p-4">
                    <button type="text"> type key word to search</button>
                    <button type="submit">Search</button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="float-right">Categoria</Button>
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
                                Unselect All
                            </DropdownMenuCheckboxItem>                           
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className='rounded-lg border bg-white'>

                    <Table>

                        <TableHeader className="bg-pink-600">
                            <TableRow>
                                <TableHead className="w-auto text-white"><Square /></TableHead>
                                <TableHead className="w-auto text-white">Horario</TableHead>
                                <TableHead className="w-auto text-white" >Categoria</TableHead>
                                <TableHead className="w-auto text-white">Detalle</TableHead>
                                <TableHead className="w-auto text-white"></TableHead>
                                <TableHead className="w-auto text-white"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody >
                            {/* {events.map((event) => ( */}
                            {filteredEvents.map((event) => (
                                <TableRow key={event.event}>
                                    <TableCell> {getStatusClass(event.status)}</TableCell>
                                    <TableCell className="">{event.dateTime}</TableCell>
                                    <TableCell><span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/20 ${getBadgeClass(event.eventType)}`}> {event.eventType} </span> </TableCell>

                                    <TableCell className="font-medium">{event.event}</TableCell>
                                    <TableCell><SquarePen /></TableCell>
                                    <TableCell><Trash2 /></TableCell>

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
                    <Button variant="outline" className="float-right">Anterior</Button><Button variant="outline" className="float-right">Siguente</Button>
                </div>
            </div>
            <div className='max-w-min p-4'>

                <h4 className="text-3xl sm:text-2xl font-normal">Selecciona una fecha para ver los eventos del día.</h4>

                <div className='py-4'>
                    <Calendar
                        mode="single"
                        selected={date1}
                        onSelect={setDate1}
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
            </div>
        </div>
    );
}

export default ViewPatientCalendar;

