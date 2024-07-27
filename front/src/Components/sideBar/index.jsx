import ImageLogo from "../../assets/logoNav.svg";
import { Button, Link } from "react-scroll";
import logoHome from "../../assets/iconosSidebar/iconHome.svg";
import logoConfig from "../../assets/iconosSidebar/iconConfig.svg";
import logoCalendar from "../../assets/iconosSidebar/iconCalendar.svg";
import logoCerrar from "../../assets/iconosSidebar/iconClose.svg";
import logoPatient from '../../assets/iconosSidebar/iconPatient.svg';

function SideBar() {
  return (
    <div className="bg-bgNavBar w-[243px] md:w-[200px] lg:w-[243px] h-full p-4 flex flex-col">
      <div className="flex flex-col gap-12 flex-grow ">
        <Link to="/">
          <div className="flex justify-center md:justify-start">
            <img className="w-24 md:w-32 h-auto" src={ImageLogo} alt="Logo" />
          </div>
        </Link>
        <div className="space-y-4">
          <button className="focus:bg-inputPrimary w-full flex justify-start items-center rounded-lg px-4 py-2">
            <img className="w-6 h-6" src={logoHome} alt="Inicio" />
            <p className="text-white text-sm ml-2">Inicio</p>
          </button>
          <button className="focus:bg-inputPrimary w-full flex justify-start items-center rounded-lg px-4 py-2">
            <img className="w-6 h-6" src={logoCalendar} alt="Calendario" />
            <p className="text-white text-sm ml-2">Calendario</p>
          </button>
          <button className="focus:bg-inputPrimary w-full flex justify-start items-center rounded-lg px-4 py-2">
            <img className="w-6 h-6" src={logoPatient} alt="Mis pacientes" />
            <p className="text-white text-sm ml-2">Mis pacientes</p>
          </button>
          <button className="focus:bg-inputPrimary w-full flex justify-start items-center rounded-lg px-4 py-2">
            <img className="w-6 h-6" src={logoConfig} alt="Configuracion" />
            <p className="text-white text-sm ml-2">Configuracion</p>
          </button>
        </div>
      </div>
      <button className="focus:bg-inputPrimary w-full flex justify-start items-center rounded-lg px-4 py-2">
        <img className="w-6 h-6" src={logoCerrar} alt="Cerrar sesión" />
        <p className="text-white text-sm ml-2">Cerrar sesión</p>
      </button>
    </div>
  );
}

export default SideBar;