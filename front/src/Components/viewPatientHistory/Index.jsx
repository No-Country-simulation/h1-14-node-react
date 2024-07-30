"use client"

import React, { useState, useMemo } from 'react';
import { Calendar } from "@/Components/ui/calendar"
import mascota from "../../assets/mascota.svg";
import rectangle_78 from "../../assets/rectangle_78.svg";
import { Link } from 'react';
import {
    Square,
    SquarePen,
    SquareCheckBig,
    Clock,
    Trash2,
    PenLine,
    Search,
    Plus,
    User,
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

const stories = [
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Done",
        dateTime: "2024-07-19T05:50:00Z",
        storyType: "Cardiologia",
    },
    {
        specialist: "Lic.Sofía Alamo",
        story: "Enfermeria",
        status: "Pending",
        dateTime: "2024-07-19T04:50:00Z",
        storyType: "Vacunacion",
    },
    {
        specialist: "Tec. Andrés Gutiérrez",
        story: "Laboratorio",
        status: "Undone",
        dateTime: "2024-07-19T06:50:00Z",
        storyType: "Laboratorio",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Done",
        dateTime: "2024-07-19T07:50:00Z",
        storyType: "Consulta",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Done",
        dateTime: "2024-07-19T08:50:00Z",
        storyType: "Consulta",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Pending",
        dateTime: "2024-07-19T05:00:00Z",
        storyType: "Consulta",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Undone",
        dateTime: "2024-07-19T06:00:00Z",
        storyType: "Consulta",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Pending",
        dateTime: "2024-07-19T05:00:00Z",
        storyType: "Medico general",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Undone",
        dateTime: "2024-07-19T06:00:00Z",
        storyType: "Psicoterapia",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Pending",
        dateTime: "2024-07-20T05:00:00Z",
        storyType: "Alimentacion",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Undone",
        dateTime: "2024-07-20T06:00:00Z",
        storyType: "Medicacion",
    },
];

const initialStories = [
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Done",
        dateTime: "2024-07-19T05:50:00Z",
        storyType: "Cardiologia",
    },
    {
        specialist: "Lic.Sofía Alamo",
        story: "Enfermeria",
        status: "Pending",
        dateTime: "2024-07-19T04:50:00Z",
        storyType: "Vacunacion",
    },
    {
        specialist: "Tec. Andrés Gutiérrez",
        story: "Laboratorio",
        status: "Undone",
        dateTime: "2024-07-19T06:50:00Z",
        storyType: "Laboratorio",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Done",
        dateTime: "2024-07-19T07:50:00Z",
        storyType: "Consulta",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Done",
        dateTime: "2024-07-19T08:50:00Z",
        storyType: "Consulta",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Pending",
        dateTime: "2024-07-19T05:00:00Z",
        storyType: "Consulta",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Undone",
        dateTime: "2024-07-19T06:00:00Z",
        storyType: "Consulta",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Pending",
        dateTime: "2024-07-19T05:00:00Z",
        storyType: "Medico general",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Undone",
        dateTime: "2024-07-19T06:00:00Z",
        storyType: "Psicoterapia",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Pending",
        dateTime: "2024-07-20T05:00:00Z",
        storyType: "Alimentacion",
    },
    {
        specialist: "Dra.María Gutiérrez",
        story: "Conslulta",
        status: "Undone",
        dateTime: "2024-07-20T06:00:00Z",
        storyType: "Medicacion",
    },
];


function ViewPatientHistory() {

    //Calendar right side
    // const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [date, setDate] = React.useState(null);

    const subtractDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() - days);
        return result;
      };
      const x = 10; // Replace this with the number of days you want to subtract
      const initialDate = subtractDays(new Date(), x);

    //calendar on the right
    const [date1, setDate1] = useState(new Date('2024-07-20'));

    const handleDateSelect = (date) => {
        if (!date || isNaN(new Date(date).getTime())) {
            setDate1(new Date());
        } else {
            setDate1(date);
        }
    };
    const [stories, setStories] = useState(initialStories);


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


    const getBadgeClass = (storyType) => {
        switch (storyType) {
            case "Consulta":
                return "bg-purple500 text-blackBadgeTexte";
            case "Cardiologia":
                return "bg-yellowBadge text-blackBadgeText";
            case "Laboratorio":
                return "bg-yellowBadge text-blackBadgeText";
            case "Medico general":
                return "bg-greenBadge text-blackBadgeText";
            case "Psicoterapia":
                return "bg-greenBadge text-blackBadgeText";
            default:
                return "";
        }
    };


    // Extract unique story types
    // const uniqueEventTypes = [...new Set(stories.map(story => story.storyType))];   //unsorted list
    const uniqueEventTypes = useMemo(() => [...new Set(stories.map(story => story.storyType))].sort(), [stories]);

    const doneCount = stories.filter(story => story.status === "Done").length;
    const pendingCount = stories.filter(story => story.status === "Pending").length;
    const undoneCount = stories.filter(story => story.status === "Undone").length;
    const totalCount = stories.length;

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState(uniqueEventTypes);

    const [searchKeyword, setSearchKeyword] = useState("");

    // const filteredStories = useMemo(() => {
    //     let filtered = stories;

    //     if (selectedCategories.length > 0) {
    //         filtered = filtered.filter(story => selectedCategories.includes(story.storyType));
    //     }

    //     if (searchKeyword) {
    //         filtered = filtered.filter(story => story.story.toLowerCase().includes(searchKeyword.toLowerCase()));
    //     }

    //     return filtered;
    // }, [stories, selectedCategories, searchKeyword]);

    // const filteredStories = useMemo(() => {
    //     if (selectedCategories.length === 0) {
    //         return stories;
    //     }
    //     return stories.filter(story => selectedCategories.includes(story.storyType));
    // }, [stories, selectedCategories]);

    const filteredStories = useMemo(() => {


        let filtered = stories.filter(story =>
            (selectedCategories.length === 0 || selectedCategories.includes(story.storyType)) &&
            selectedTypes.includes(story.storyType) &&
            new Date(story.dateTime).toDateString() === date1.toDateString()
        );

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(story => selectedCategories.includes(story.storyType));
        }

        if (searchKeyword) {
            filtered = filtered.filter(story => story.story.toLowerCase().includes(searchKeyword.toLowerCase()));
        }

        return filtered;
    }, [stories, , selectedCategories, selectedTypes, date1, searchKeyword]);


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

    const formatDateToES = (dateTime) => {
        const date = new Date(dateTime);
        return new Intl.DateTimeFormat('es-ES', {
            // hour: 'numeric',
            // minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
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

    // Agregar storyos    
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ storyType: "", dateTime: "", story: "", status: "Undone", specialist: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({
            ...newEvent,
            [name]: value
        });
    };

    const handleAddEvent = (currentDate) => {
        setStories((prevStories) => [
            ...prevStories,
            { ...newEvent, dateTime: currentDate.toISOString() }
        ]);
        setIsDialogOpen(false);
        setNewEvent({ storyType: "", dateTime: "", story: "", status: "Undone", specialist: "" });
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

    const addStories = () => {
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

    const totalPages = Math.ceil(filteredStories.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedStories = filteredStories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);



    return (
        <div className=' flex  '>
            <div className='flex-grow bg-home p-4 w-2/3'>
                {/* <h4 className="text-3xl sm:text-2xl font-normal">Historia clinica</h4> */}
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

                <div>
                    <div className=''>
                        <div className='w-full rounded-lg border bg-white'>

                            <Table >

                                <TableHeader className="bg-orangeTableTittle">
                                    <TableRow>
                                        <TableHead className="w-auto text-white"><Square /></TableHead>
                                        <TableHead className="w-auto text-white">Especialista</TableHead>
                                        <TableHead className="w-auto text-white">Fecha</TableHead>
                                        <TableHead className="w-auto text-white" >Descripcion</TableHead>
                                        <TableHead className="w-auto text-white"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody >
                                    {/* {stories.map((story) => ( */}
                                    {/* {filteredStories.map((story) => ( */}
                                    {paginatedStories.map((story) => (
                                        <TableRow key={story.story} >
                                            <TableCell> {getStatusClass(story.status)}</TableCell>
                                            <TableCell className="flex space-x-2 items-center py-2">
                                                <div >
                                                    <User stroke="#C1C7CD" className='bg-grayUserIconBg rounded-full p-2 ' size={44}/>
                                                </div>
                                                <div >
                                                    <p className='text-lg'>{story.specialist}</p>
                                                    <p className='text-sm text-grayTableTextSmall'>{story.storyType}</p>
                                                </div>
                                                
                                                
                                            </TableCell>
                                            <TableCell className="">{formatDateToES(story.dateTime)}</TableCell>
                                            <TableCell className="font-medium">{story.story}</TableCell>
                                            {/* <TableCell><span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/20 ${getBadgeClass(story.storyType)}`}> {story.storyType} </span> </TableCell> */}
                                            <TableCell className="font-medium"><Button size="sm" className="rounded-sm h-6 bg-greenButtonBg text-greenButtonText"  Type="submit">Ver detalle </Button></TableCell>


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
                                                    href="#" onClick={(e) => {
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
                                                className="rounded-md text-blue500" />
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
                </div>

            </div>
            <div className=" p-4 " >
                <div className=" rounded-md bg-white  p-2 outline outline-border ">
                    <ul className=' '>
                        <li className="">
                            <Button variant="ghost" className="text-md">Enviar</Button>
                        </li>
                        <li className="">
                            <Button variant="ghost" className="text-md">Generar resumen</Button>
                        </li>
                        <li className="">
                            <Button variant="ghost" className="text-md">Descargar datos</Button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default ViewPatientHistory;

