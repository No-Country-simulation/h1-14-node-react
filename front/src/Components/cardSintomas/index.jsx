// import { Button } from "react-scroll";
import {
  Pin,
  PinOff,
  PenLine,
  Files,
  CopyPlus,
  Upload,
  FolderArchive,
  Tag,
  Plus,
  Trash2
} from "lucide-react"

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/Components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { formatDate } from "date-fns"




const CardSintomas = ({ noteType, date, description, status, name, }) => {

  const getBadgeClass = (noteType) => {
    switch (noteType) {
      case "Medicacion Escencial":
        return " bg-greenBadge text-blackCardTitle";
      case "Tratamiento complementario":
        return "bg-yellowBadge text-blackCardTitle";
      case "Otras indicaciones":
        return "bg-purple-500 text-blackCardTitle";
        case "Sintomas":
          return "bg-blue-300 text-blackCardTitle";
      default:
        return "";
    }
  };

  const formatDate = (date) => {
    const date2 = new Date(date);
    return new Intl.DateTimeFormat('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).format(date2);
  };


  return (
    <div className='flex justify-center items-center'>

      <div className='flex bg-white flex-col justify-center  w-full h-11/12   border border-solid border-borderCard rounded-lg py-4 px-4'>
        <div className='flex  '  >
          <div className=' w-full space-x-4'>
            <h1 className='text-lg font-semibold text-blackCardTitle py-2'>{name}</h1>

          </div>

          <>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost" className="rounded-sm h-6" >...</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Opciones</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <PenLine className="mr-2 h-4 w-4" />
                    <span>Crear Notificación</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>Agregar reposicion</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FolderArchive className="mr-2 h-4 w-4" />
                    <span>Archivar</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

              </DropdownMenuContent>
            </DropdownMenu>
          </>

        </div>
        <div className=' flex-col'>
          {/* <Button size="sm" className={`rounded-sm  h-6 ${getBadgeClass(noteType)}`} Type="submit">{noteType}</Button>
          <p className='flex ' >  {noteType}</p> */}
          {/* <p className='text-sm font text-blackCardText'>
            Dosis: {status}
          </p> */}
          <p className='text-sm font text-blackCardText'>
            Instrucciones: {description}
          </p>
          <p className='text-xs font text-blackCardText text-right'>
            <span>{(formatDate(date))}</span>
          </p>
        </div>
      </div>
    </div >
  );
};

export default CardSintomas;