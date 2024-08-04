"use client"

import { BookMarked } from 'lucide-react';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import CardTratamientos from "../cardTratamientos"
import CardSintomas from "../cardSintomas"
import { Button } from "@/Components/ui/button"
import { PenLine, Plus, Clock, PlusCircle, Mic, Save, CircleStop } from "lucide-react";
import { getHours, getMinutes } from 'date-fns';

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

import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/Components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import {
    // Select,
    // SelectContent,
    // SelectItem,
    // SelectTrigger,
    // SelectValue,

    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,

} from "@/Components/ui/select"

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const listaSintomas = [
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
    {
        name: "Calambres musculares",
        noteType: "Sintomas",
        description: "Contracciones o espasmos repentinos e involuntarios en uno o más músculos.",
    },
    {
        name: "Cambios en el apetito",
        noteType: "Sintomas",
        description: "Variaciones en el deseo de comer, que pueden incluir aumento o disminución del apetito.",
    },
    {
        name: "Cambios de humor",
        noteType: "Sintomas",
        description: "Cambios frecuentes y severos en el estado de ánimo, que pueden incluir episodios de depresión, ansiedad o irritabilidad.",
    },
    {
        name: "Cambios en el estado mental (confusión, delirios, alucinaciones)",
        noteType: "Sintomas",
        description: "Alteraciones en la función cognitiva que pueden llevar a confusión, delirios o alucinaciones.",
    },
    {
        name: "Cianosis (coloración azulada de la piel)",
        noteType: "Sintomas",
        description: "Decoloración azulada de la piel o mucosas debido a niveles bajos de oxígeno en la sangre.",
    },
    {
        name: "Convulsiones",
        noteType: "Sintomas",
        description: "Alteraciones eléctricas incontroladas en el cerebro que pueden causar cambios en el comportamiento, movimientos, sentimientos y conciencia.",
    },
    {
        name: "Debilidad general",
        noteType: "Sintomas",
        description: "Falta general de fuerza física y energía, que puede acompañarse de sentimientos de fatiga.",
    },
    {
        name: "Debilidad muscular",
        noteType: "Sintomas",
        description: "Reducción de la fuerza en uno o más músculos, lo que a menudo dificulta la realización de tareas que requieren el uso muscular.",
    },
    {
        name: "Decoloración de la piel",
        noteType: "Sintomas",
        description: "Cambios en el color de la piel, que pueden indicar varias condiciones de salud subyacentes.",
    },
    {
        name: "Depresión",
        noteType: "Sintomas",
        description: "Un trastorno de salud mental caracterizado por sentimientos persistentes de tristeza, pérdida de interés y otros síntomas emocionales y físicos.",
    },
    {
        name: "Desmayos",
        noteType: "Sintomas",
        description: "Pérdida temporal del conocimiento, típicamente debido a una caída en el flujo sanguíneo al cerebro.",
    },
    {
        name: "Diarrea",
        noteType: "Sintomas",
        description: "Evacuaciones frecuentes, sueltas o acuosas.",
    },
    {
        name: "Diarrea o estreñimiento",
        noteType: "Sintomas",
        description: "Evacuaciones frecuentes y sueltas o heces infrecuentes, duras y difíciles de evacuar.",
    },
    {
        name: "Dificultad para hablar",
        noteType: "Sintomas",
        description: "Problemas al hablar, que pueden incluir habla arrastrada, incapacidad para articular palabras o pérdida completa del habla.",
    },
    {
        name: "Dificultad para moverse",
        noteType: "Sintomas",
        description: "Desafíos en el movimiento, que pueden incluir rigidez, debilidad o falta de coordinación.",
    },
    {
        name: "Dificultad para respirar (disnea)",
        noteType: "Sintomas",
        description: "Falta de aire o sensación de no poder respirar profundamente o cómodamente.",
    },
    {
        name: "Dolor abdominal",
        noteType: "Sintomas",
        description: "Dolor localizado en el área entre el pecho y la pelvis.",
    },
    {
        name: "Dolor al orinar (disuria)",
        noteType: "Sintomas",
        description: "Dolor, incomodidad o sensación de ardor durante la micción.",
    },
    {
        name: "Dolor articular",
        noteType: "Sintomas",
        description: "Dolor en las articulaciones, que puede deberse a varias causas, incluyendo artritis, lesiones o infecciones.",
    },
    {
        name: "Dolor de cabeza",
        noteType: "Sintomas",
        description: "Dolor o incomodidad en el área de la cabeza o la cara, que puede variar en intensidad y duración.",
    },
    {
        name: "Dolor de oído",
        noteType: "Sintomas",
        description: "Dolor en el oído, que puede ser causado por infección, lesión u otras condiciones.",
    },
    {
        name: "Dolor de pecho",
        noteType: "Sintomas",
        description: "Dolor o incomodidad en el área del pecho, que puede ser un signo de problemas cardíacos, respiratorios u otras condiciones.",
    },
    {
        name: "Dolor durante las relaciones sexuales (dispareunia)",
        noteType: "Sintomas",
        description: "Dolor experimentado durante el acto sexual, que puede ser causado por factores físicos o psicológicos.",
    },
    {
        name: "Dolor muscular (mialgia)",
        noteType: "Sintomas",
        description: "Dolor o incomodidad en los músculos, que puede resultar de uso excesivo, lesión o condiciones médicas.",
    },
    {
        name: "Dolor ocular",
        noteType: "Sintomas",
        description: "Dolor o incomodidad en el ojo, que puede deberse a varias causas, incluyendo infección, lesión o fatiga ocular.",
    },
    {
        name: "Dolor pélvico",
        noteType: "Sintomas",
        description: "Dolor en la parte inferior del abdomen o pelvis, que puede ser causado por diversas condiciones que afectan los sistemas reproductivo, urinario o digestivo.",
    },
    {
        name: "Dolor torácico",
        noteType: "Sintomas",
        description: "Dolor o incomodidad en el área del pecho, a menudo relacionado con condiciones del corazón o los pulmones.",
    },
    {
        name: "Erupciones cutáneas",
        noteType: "Sintomas",
        description: "Cambios en la piel que pueden incluir enrojecimiento, protuberancias, ampollas u otras alteraciones en la apariencia o textura.",
    },
    {
        name: "Escalofríos",
        noteType: "Sintomas",
        description: "Sensación de frío acompañada de temblores, a menudo asociada con fiebre o enfermedad.",
    },
    {
        name: "Estornudos frecuentes",
        noteType: "Sintomas",
        description: "Estornudos repetidos, que pueden ser causados por alergias, infecciones o irritantes.",
    },
    {
        name: "Estreñimiento",
        noteType: "Sintomas",
        description: "Heces infrecuentes, duras y difíciles de evacuar.",
    },
    {
        name: "Fatiga",
        noteType: "Sintomas",
        description: "Cansancio extremo o falta de energía, a menudo acompañado de una sensación de agotamiento.",
    },
    {
        name: "Fiebre",
        noteType: "Sintomas",
        description: "Elevación de la temperatura corporal, generalmente un signo de infección o enfermedad.",
    },
    {
        name: "Hemoptisis (tos con sangre)",
        noteType: "Sintomas",
        description: "Tos con sangre, que puede ser un signo de una condición médica grave.",
    },
    {
        name: "Hinchazón de extremidades (edema)",
        noteType: "Sintomas",
        description: "Hinchazón de los brazos o las piernas, a menudo debido a retención de líquidos o inflamación.",
    },
    {
        name: "Hinchazón en las articulaciones",
        noteType: "Sintomas",
        description: "Hinchazón en las articulaciones, que puede ser causada por artritis, lesión u otras condiciones.",
    },
    {
        name: "Hinchazón (distensión abdominal)",
        noteType: "Sintomas",
        description: "Hinchazón o agrandamiento del abdomen, a menudo debido a gases, líquidos u otras causas.",
    },
    {
        name: "Ictericia (coloración amarillenta de la piel y los ojos)",
        noteType: "Sintomas",
        description: "Coloración amarillenta de la piel y los ojos, a menudo causada por problemas hepáticos.",
    },
    {
        name: "Incontinencia urinaria",
        noteType: "Sintomas",
        description: "Incapacidad para controlar la micción, lo que resulta en pérdida involuntaria de orina.",
    },
    {
        name: "Insomnio",
        noteType: "Sintomas",
        description: "Dificultad para conciliar el sueño o permanecer dormido.",
    },
    {
        name: "Mareo",
        noteType: "Sintomas",
        description: "Sensación de aturdimiento, inestabilidad o desmayo.",
    },
    {
        name: "Mareos al ponerse de pie (hipotensión ortostática)",
        noteType: "Sintomas",
        description: "Mareos o aturdimiento al ponerse de pie, a menudo debido a una caída repentina en la presión arterial.",
    },
    {
        name: "Menstruación dolorosa (dismenorrea)",
        noteType: "Sintomas",
        description: "Dolorosos calambres menstruales, a menudo acompañados de otros síntomas como náuseas o fatiga.",
    },
    {
        name: "Náuseas",
        noteType: "Sintomas",
        description: "Sensación de malestar o incomodidad en el estómago, a menudo con una urgencia de vomitar.",
    },
    {
        name: "Náuseas y vómitos",
        noteType: "Sintomas",
        description: "Sensación de malestar acompañada de la acción de vomitar.",
    },
    {
        name: "Necesidad urgente de orinar",
        noteType: "Sintomas",
        description: "Deseo repentino y fuerte de orinar, a menudo difícil de controlar.",
    },
    {
        name: "Palpitaciones",
        noteType: "Sintomas",
        description: "Latidos cardíacos irregulares, rápidos o fuertes que a menudo son perceptibles.",
    },
    {
        name: "Parálisis",
        noteType: "Sintomas",
        description: "Pérdida de función muscular en una parte del cuerpo.",
    },
    {
        name: "Parestesia (entumecimiento u hormigueo)",
        noteType: "Sintomas",
        description: "Sensaciones anormales como hormigueo, entumecimiento o pinchazos, a menudo en las extremidades.",
    },
    {
        name: "Pérdida de la conciencia",
        noteType: "Sintomas",
        description: "Pérdida temporal de la conciencia o capacidad de respuesta.",
    },
    {
        name: "Pérdida de apetito",
        noteType: "Sintomas",
        description: "Reducción del deseo de comer, que puede llevar a la pérdida de peso y desnutrición.",
    },
    {
        name: "Pérdida de audición",
        noteType: "Sintomas",
        description: "Incapacidad parcial o total para escuchar.",
    },
    {
        name: "Pérdida de cabello",
        noteType: "Sintomas",
        description: "Adelgazamiento o pérdida de cabello del cuero cabelludo u otras partes del cuerpo.",
    },
    {
        name: "Pérdida de coordinación",
        noteType: "Sintomas",
        description: "Dificultad para controlar los movimientos de manera suave y precisa.",
    },
    {
        name: "Pérdida de memoria",
        noteType: "Sintomas",
        description: "Deterioro en la capacidad de recordar información o experiencias pasadas.",
    },
    {
        name: "Pérdida de peso involuntaria",
        noteType: "Sintomas",
        description: "Pérdida de peso no intencional, a menudo un signo de una condición médica subyacente.",
    },
    {
        name: "Picazón (prurito)",
        noteType: "Sintomas",
        description: "Sensación incómoda de picazón en la piel.",
    },
    {
        name: "Problemas de memoria",
        noteType: "Sintomas",
        description: "Dificultades para recordar o retener información.",
    },
    {
        name: "Prurito genital",
        noteType: "Sintomas",
        description: "Sensación de picazón en el área genital.",
    },
    {
        name: "Psicosis (alucinaciones, delirios)",
        noteType: "Sintomas",
        description: "Trastorno mental grave caracterizado por una desconexión de la realidad, que incluye alucinaciones y delirios.",
    },
    {
        name: "Reacciones alérgicas (erupción cutánea, urticaria)",
        noteType: "Sintomas",
        description: "Respuesta inmune que causa erupciones cutáneas, urticaria u otros síntomas alérgicos.",
    },
    {
        name: "Rigidez",
        noteType: "Sintomas",
        description: "Incapacidad para mover un músculo de manera normal debido a la rigidez o inflexibilidad.",
    },
    {
        name: "Sangrado menstrual anormal",
        noteType: "Sintomas",
        description: "Sangrado inusual o irregular durante el ciclo menstrual.",
    },
    {
        name: "Sangre en las heces (hematocuecia o melena)",
        noteType: "Sintomas",
        description: "Presencia de sangre en las heces, que puede indicar sangrado gastrointestinal.",
    },
    {
        name: "Sangre en la orina (hematuria)",
        noteType: "Sintomas",
        description: "Presencia de sangre en la orina, a menudo un signo de un problema en el tracto urinario.",
    },
    {
        name: "Secado ocular",
        noteType: "Sintomas",
        description: "Sequedad en los ojos, que lleva a irritación e incomodidad.",
    },
    {
        name: "Sección vaginal",
        noteType: "Sintomas",
        description: "Sequedad o falta de humedad en el área vaginal.",
    },
    {
        name: "Secreción del oído",
        noteType: "Sintomas",
        description: "Secreción del oído, que puede ser un signo de infección u otras condiciones.",
    },
    {
        name: "Secreción genital",
        noteType: "Sintomas",
        description: "Secreción inusual del área genital, a menudo indicando una infección u otro problema de salud.",
    },
    {
        name: "Secreción ocular",
        noteType: "Sintomas",
        description: "Secreción del ojo, que puede ser un signo de infección u otras condiciones.",
    },
    {
        name: "Sequedad de boca",
        noteType: "Sintomas",
        description: "Falta de saliva, que lleva a sequedad e incomodidad en la boca.",
    },
    {
        name: "Sensación de oído tapado",
        noteType: "Sintomas",
        description: "Sensación de plenitud o bloqueo en el oído, que puede afectar la audición.",
    },
    {
        name: "Sensibilidad a la luz (fotofobia)",
        noteType: "Sintomas",
        description: "Incomodidad o dolor en los ojos debido a la exposición a la luz.",
    },
    {
        name: "Sibilancias",
        noteType: "Sintomas",
        description: "Sonidos agudos y sibilantes que se producen al respirar, a menudo debido a vías respiratorias estrechas.",
    },
    {
        name: "Somnolencia",
        noteType: "Sintomas",
        description: "Somnolencia o adormecimiento excesivos.",
    },
    {
        name: "Sudoración nocturna",
        noteType: "Sintomas",
        description: "Sudoración excesiva durante la noche, a menudo asociada con condiciones médicas o medicamentos.",
    },
    {
        name: "Taquicardia (latidos rápidos)",
        noteType: "Sintomas",
        description: "Ritmo cardíaco anormalmente rápido, generalmente más de 100 latidos por minuto en adultos.",
    },
    {
        name: "Temblor",
        noteType: "Sintomas",
        description: "Sacudidas o temblores involuntarios, a menudo debido a trastornos del sistema nervioso.",
    },
    {
        name: "Temblores",
        noteType: "Sintomas",
        description: "Contracciones musculares rítmicas e involuntarias que llevan a movimientos temblorosos en una o más partes del cuerpo.",
    },
    {
        name: "Tinnitus (zumbido en los oídos)",
        noteType: "Sintomas",
        description: "Zumbidos, pitidos u otros ruidos en uno o ambos oídos no causados por un sonido externo.",
    },
    {
        name: "Tos (seca o con flema)",
        noteType: "Sintomas",
        description: "Expulsión de aire de los pulmones con un sonido característico, que puede ser seca o productiva (con flema).",
    },
    {
        name: "Tos persistente",
        noteType: "Sintomas",
        description: "Tos continua o recurrente que no desaparece.",
    },
    {
        name: "Úlceras en la boca",
        noteType: "Sintomas",
        description: "Lesiones abiertas y dolorosas en el interior de la boca.",
    },
    {
        name: "Vértigo",
        noteType: "Sintomas",
        description: "Sensación de mareo o que todo gira a tu alrededor, a menudo causada por problemas en el oído interno.",
    },
    {
        name: "Visión borrosa",
        noteType: "Sintomas",
        description: "Pérdida de la agudeza visual, resultando en la incapacidad de ver objetos claramente.",
    },
    {
        name: "Visión doble",
        noteType: "Sintomas",
        description: "Percepción de dos imágenes de un solo objeto, típicamente causada por problemas oculares o neurológicos.",
    },
    {
        name: "Zumbido en los oídos (tinnitus)",
        noteType: "Sintomas",
        description: "Sensation of ringing, buzzing, or other noises in one or both ears not caused by an external sound."
    },
];


const sintomas = [
    {
        name: "Tos persistente",
        noteType: "Sintomas",
        description: "Tos continua o recurrente que no desaparece.",
        date: "2024-07-20T06:00:00Z",
        status: "",
    },
    {
        name: "Úlceras en la boca",
        noteType: "Sintomas",
        description: "Lesiones abiertas y dolorosas en el interior de la boca.",
        date: "2024-07-23T09:00:00Z",
        status: "",
    },
    {
        name: "Ansiedad",
        noteType: "Sintomas",
        description: "Sentimientos de preocupación, nerviosismo o inquietud, típicamente sobre un evento inminente o algo con un resultado incierto.",
        date: "2024-07-20T06:00:00Z",
        status: "",
    },
    {
        name: "Dolor ocular",
        noteType: "Sintomas",
        status: "",
        description: "Dolor o incomodidad en el ojo, que puede deberse a varias causas, incluyendo infección, lesión o fatiga ocular.",
        date: "2024-07-23T09:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "12",
        duration: "1",
    },
];


const initialSintomas = [
    {
        name: "Tos persistente",
        noteType: "Sintomas",
        description: "Tos continua o recurrente que no desaparece.",
        date: "2024-07-20T06:00:00Z",
        status: "",
    },
    {
        name: "Úlceras en la boca",
        noteType: "Sintomas",
        description: "Lesiones abiertas y dolorosas en el interior de la boca.",
        date: "2024-07-23T09:00:00Z",
        status: "",
    },
    {
        name: "Ansiedad",
        noteType: "Sintomas",
        description: "Sentimientos de preocupación, nerviosismo o inquietud, típicamente sobre un evento inminente o algo con un resultado incierto.",
        date: "2024-07-20T06:00:00Z",
        status: "",
    },
    {
        name: "Dolor ocular",
        noteType: "Sintomas",
        status: "",
        description: "Dolor o incomodidad en el ojo, que puede deberse a varias causas, incluyendo infección, lesión o fatiga ocular.",
        date: "2024-07-23T09:00:00Z",
        dose: "60 mg",
        via: "oral",
        frequency: "12",
        duration: "1",
    },
];

const tratamientos = [
    {
        name: "Tacrolimus",
        noteType: "Medicacion Esencial",
        status: "2 mg dos veces al dia",
        instructions: "Tomar con el estomago vacio, 1 hora antes o 2 horas despues de las comidas",
        date: "2024-07-19T05:50:00Z",
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
        date: "2024-07-20T06:00:00Z",
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
        date: "2024-07-19T05:50:00Z",
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
        date: "2024-07-20T06:00:00Z",
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

function ViewTratamientos() {
    const [date, setDate] = React.useState(null);
    // const [date, setDate] = React.useState<Date>();
    //calendar on the right
    const [date1, setDate1] = useState((new Date()));

    const [tratamientos, setTratamientos] = useState(initialTratamientos);
    const [sintomas, setSintomas] = useState(initialSintomas);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newNote, setNewNote] = useState({ name: "", date: "", description: "", noteType: "", status: "" });
    const [newSintoma, setNewSintoma] = useState({ name: "", date: "", description: "", noteType: "", status: "" });

    const medicacionEsencial = tratamientos.filter(tratamiento => tratamiento.noteType === "Medicacion Esencial");
    const tratamientoComplementario = tratamientos.filter(tratamiento => tratamiento.noteType === "Tratamiento complementario");
    const otrasIndicaciones = tratamientos.filter(tratamiento => tratamiento.noteType !== "Medicacion Esencial" && tratamiento.noteType !== "Tratamiento complementario");
    const otrosSintomas = sintomas.filter(sintoma => sintoma.noteType === "Sintomas");


    const handleDateSelect = (date) => {
        if (!date || isNaN(new Date(date).getTime())) {
            setDate1(new Date());
        } else {
            setDate1(date);
        }
    };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewNote({
    //         ...newNote,
    //         [name]: value
    //     });
    // };

    // const handleAddNote = () => {
    //     setTratamientos([...tratamientos, { ...newNote, date: new Date().toISOString() }]);
    //     setIsDialogOpen(false);
    //     setNewNote({ name: "", date: "", description: "", noteType: "", status: "" });
    // };

    // const uniqueNoteTypes = [...new Set(tratamientos.map(tratamientos => tratamientos.noteType))];
    // const getBadgeClass = (noteType) => {
    //     switch (noteType) {
    //         case "Medicacion Esencial":
    //             return " bg-greenBadge text-blackCardTitle";
    //         case "Tratamiento complementario":
    //             return "bg-yellowBadge text-blackCardTitle";
    //         case "Otras indicaciones":
    //             return "bg-purple-500 text-blackCardTitle";
    //         case "Sintomas":
    //             return "bg-pink600 text-blackCardTitle";
    //         default:
    //             return "";
    //     }
    // };

    // sintomas
    const [searchKeyword, setSearchKeyword] = useState('');

    const filteredSintomas = useMemo(() => {
        return listaSintomas.filter(sintoma =>
            sintoma.name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }, []);

    const handleInputSintomaChange = (e) => {
        const { name, value } = e.target;
        setNewSintoma({
            ...newSintoma,
            [name]: value
        });
    };
    const handleAddSintoma = () => {
        setSintomas([...sintomas, { ...newSintoma, date: date1 }]);
        setIsDialogOpen(false);
        setNewSintoma({ name: "", date: "", description: "", noteType: "Sintomas", status: "" });
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
        handleInputSintomaChange({ target: { name: 'description', value: transcript } });
        resetTranscript();
    };


    return (
        <div className='flex bg-white'>

            <div className='bg-secondary p-4'>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div >
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
                        <div >
                            <h2 className="text-xl font-bold mb-4">Sintomas</h2>
                            {otrosSintomas.map(sintoma => (
                                <div key={sintoma.name} className="mb-4 break-inside-avoid shadow-md rounded-lg ">
                                    <CardSintomas
                                        key={sintoma.name}
                                        noteType={sintoma.noteType}
                                        date={sintoma.date}
                                        description={sintoma.description}
                                        status={sintoma.status}
                                        name={sintoma.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

                <div className=' items-baseline'>
                    <div className="">
                        <Dialog className="">
                            <DialogTrigger asChild>
                                <div>
                                    <Button className="rounded-3xl bg-inputPrimary space-x-4 float-right " >
                                        <PenLine />  <span >Agregar sintoma</span>
                                    </Button>
                                </div>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-[328px] md:max-w-[328px] lg:max-w-[328px] gap-2" >
                                <DialogHeader>
                                    <DialogTitle>Sintomas</DialogTitle>
                                    <DialogDescription>
                                        ¿Como te sentis?
                                    </DialogDescription>
                                </DialogHeader>
                                <div >
                                    <Select name="name" onValueChange={(value) => setNewSintoma({ ...newSintoma, name: value })} value={newSintoma.name}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue
                                                placeholder={`${"Seleccione sintoma"}`} />
                                        </SelectTrigger>
                                        <SelectContent className="w-full max-h-60 overflow-x-auto">
                                            <SelectGroup>
                                                <SelectLabel>Síntomas</SelectLabel>
                                                {filteredSintomas.map(sintoma => (
                                                    <SelectItem key={sintoma.name} value={sintoma.name}>
                                                        {sintoma.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>



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
                                            onChange={handleInputSintomaChange}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>




                                <div>


                                </div>


                                {/* <div>
                                    <Label className="block text-sm font-medium mb-2">Status</Label>
                                    <div className="flex flex-col space-y-2">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="Better than yesterday"
                                                checked={newSintoma.status === "Better than yesterday"}
                                                onChange={handleInputSintomaChange}
                                                className="form-radio"
                                            />
                                            <span className="ml-2">Better than yesterday</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="Same as yesterday"
                                                checked={newSintoma.status === "Same as yesterday"}
                                                onChange={handleInputSintomaChange}
                                                className="form-radio"
                                            />
                                            <span className="ml-2">Same as yesterday</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="Worse than yesterday"
                                                checked={newSintoma.status === "Worse than yesterday"}
                                                onChange={handleInputSintomaChange}
                                                className="form-radio"
                                            />
                                            <span className="ml-2">Worse than yesterday</span>
                                        </label>
                                    </div>
                                </div> */}


                                <div>
                                    <div className=''>
                                        <Label className="block text-sm font-medium mb-2">Detalle
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
                                        name="description"
                                        value={newSintoma.description || transcript}
                                        onChange={handleInputSintomaChange}
                                        placeholder="Información sobre el sintoma"
                                        className=" p-2 border rounded w-full"
                                    />
                                </div>

                                <DialogFooter>
                                    <Button className="rounded-3xl bg-inputPrimary space-x-4 w-full" onClick={handleAddSintoma}>
                                        <PenLine />  <span >Agregar Sintoma</span>
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

