"use client"

import { BookMarked } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import CardTratamientos from "../cardTratamientos"
import { Button } from "@/Components/ui/button"
import { PenLine, Plus, PhoneCall, TriangleAlert, Smile, Award, Apple, Scale } from "lucide-react";

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


import MultiplicateX7 from "../../assets/MultiplicateX7.svg";



function viewPatientHome() {

    function Card({ title, description, linkText, linkHref, icon: Icon, iconClass }) {
        return (
            <div className="p-4 border rounded-lg shadow-md bg-white">
                <div className="flex items-center mb-2">
                    <Icon className={`w-6 h-6 mr-2 ${iconClass}`} />
                    <h2 className="text-md font-bold text-pink600">{title}</h2>
                </div>
                <p className="mb-2 text-grayTableTextSmall">{description}</p>
                <div className="float-end">
                    <a href={linkHref} ><Button size="sm" className="rounded-sm h-6 bg-greenButtonBg text-greenButtonText" Type="link">{linkText}</Button></a>
                </div>
            </div>
        );
    }

    return (
        <div className='flex bg-white'>

            <div className="p-6 bg-bgHome">
                <h1 className="text-3xl font-bold mb-4">Bienvenido/a (USER)</h1>
                <p className="text-lg mb-4">Mirá todo lo que tenemos para vos hoy</p>

                <div className="flex cols-1 gap-4">
                    <div className="flex p-4 bg-white border rounded-lg shadow-md  space-x-4">
                        <div className="image-container  lg:w-2/4 ml-4 mb-4 lg:float-right">
                            <img
                                src={MultiplicateX7}
                                className="shape-image rounded-lg w-full lg:w-auto"
                                alt="Ley Justina"
                            />
                        </div>
                        <div >
                            <h2 className="text-xl font-bold text-pink600 ">Ayudemos a todos los que podamos</h2>
                            <p className='text-grayTableTextSmall'>¡Descubrí todo lo que podés hacer con Justina.io! Ingresá a esta sección para explorar las múltiples herramientas y funcionalidades diseñadas para mejorar el seguimiento de tu tratamiento y mejorar tu calidad de vida.</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 bg-white border rounded-lg shadow-md float-right">
                        <div >
                            <h2 className="text-xl font-bold text-pink600"><span className="flex"><PhoneCall className='mr-4' /> Comunicate</span></h2>
                            <p className='text-grayTableTextSmall'>Equipo de atención a pacientes del INCUCAI de lunes a viernes de 9 a 15 hs. por WhatsApp: <span className='text-blue600'>(+54 9) 11.2156.5667/ 11.2156.4910/ 11.2154.8518 </span>o por e-mail: <span className='text-blue600'>pacientes@incucai.gov.ar</span></p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-6 mb-4">Explorá por categoría</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card
                        title="Adherencia al tratamiento"
                        description="Seguir fielmente el tratamiento médico prescrito puede marcar la diferencia entre el éxito y las complicaciones durante la recuperación o la preparación para tu trasplante. Exploremos juntos cómo la adherencia contribuye a la efectividad de los tratamientos."
                        linkText="Ver más"
                        linkHref="#"
                        icon={TriangleAlert}
                        iconClass="text-red-500"
                    />
                    <Card
                        title="Salud mental y gestión del estrés"
                        description="¡Cuida tu bienestar emocional! Ingresá aquí para descubrir técnicas efectivas de gestión del estrés y recursos para mantener una salud mental óptima. Justina.io te ofrece el apoyo que necesitas."
                        linkText="Ver más"
                        linkHref="#"
                        icon={Smile}
                        iconClass="text-red-500"
                    />
                    <Card
                        title="Historias de éxito y testimonios"
                        description="Inspírate con las historias de éxito y testimonios de personas que han transformado sus vidas. Conocé sus experiencias y descubrí cómo vos también podés lograrlo. ¡No estás solo!"
                        linkText="Ver más"
                        linkHref="#"
                        icon={Award}
                        iconClass="text-red-500"
                    />
                    <Card
                        title="Tips de alimentación"
                        description="Aprendé a nutrir tu cuerpo de manera saludable. Ingresá a esta sección para encontrar recetas y guías sobre una dieta balanceada con Justina.io."
                        linkText="Ver más"
                        linkHref="#"
                        icon={Apple}
                        iconClass="text-red-500"
                    />
                </div>

                <h2 className="text-2xl font-bold mt-6 mb-4">Noticias</h2>
                <div className="p-4 bg-white border rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-pink600"><span className="flex"><Scale className='mr-4'/>Derechos de las personas donantes y receptoras de órganos, tejidos y células </span></h2>
                    <p className='text-grayTableTextSmall'>Informate sobre tus derechos como donante o receptor de órganos, tejidos y células. Justina.io te proporciona toda la información necesaria para tomar decisiones informadas y seguras. ¡Accedé aquí!</p>
                </div>
            </div>

        </div>
    );
}

export default viewPatientHome;

