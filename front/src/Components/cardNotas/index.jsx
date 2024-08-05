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




const CardNotas = ({ noteType, date, description, mark }) => {


  const getBadgeClass = (noteType) => {
    switch (noteType) {
        case "Preguntas":
            return " bg-pink-900 text-white";
        case "Emociones":
            return "bg-blue-600 text-white";
        case "Sintomas":
            return "bg-green-400 text-white";

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
    year: 'numeric'
  }).format(date2);
};

  return (
    <div className='flex justify-center items-center'>
      <div className='flex bg-white flex-col justify-center  w-full h-11/12   border border-solid border-borderCard rounded-lg py-4 px-4'>
        <div className='flex items-center '  >
          <div className='flex items-center w-full space-x-4'>
            {/* <Button size="sm" className="rounded-sm  bg-pink-900 text-white h-6 " Type="submit">{noteType}</Button> */}
            <Button size="sm" className={`rounded-sm  h-6 ${getBadgeClass(noteType)}`} Type="submit">{noteType}</Button>
            <span className='flex items-center' ><Pin size={16} />  {mark}</span>
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
                    <span>Editar</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Files className="mr-2 h-4 w-4" />
                    <span>Duplicar</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PinOff className="mr-2 h-4 w-4" />
                    <span>Desmarcar</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Upload className="mr-2 h-4 w-4" />
                    <span>Enviar</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FolderArchive className="mr-2 h-4 w-4" />
                    <span>Archivar</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Tag className="mr-2 h-4 w-4" />
                      <span>Etiquetar</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSeparator />
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <span>Sintomas</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Preguntas</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Emociones</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex space-x-4 ">
                          <span>Crear etiqueta</span>
                          <Plus className="mr-2 h-4 w-4" />
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4 " />
                    <span>Eliminar</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

              </DropdownMenuContent>
            </DropdownMenu>
          </>

        </div>
        <div className='flex flex-col  mt-4'>
          <h1 className='text-sm py-2'>{(formatDate(date))}</h1>
          <p className='text-sm font'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardNotas;