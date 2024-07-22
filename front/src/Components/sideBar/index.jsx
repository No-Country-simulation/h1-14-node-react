import ImageLogo from "../../assets/logoNav.svg";
import { Button, Link } from "react-scroll";
import logoHome from "../../assets/iconosSidebar/iconHome.svg";
import logoConfig from "../../assets/iconosSidebar/iconConfig.svg";
import logoCalendar from "../../assets/iconosSidebar/iconCalendar.svg";
import logoCerrar from "../../assets/iconosSidebar/iconClose.svg";
import logoPatient from '../../assets/iconosSidebar/iconPatient.svg'

function SideBar() {
  return (
    <div className="bg-bgNavBar w-[243px] h-screen pl-10 py-6 pr-6 flex flex-col">
      <div className="flex flex-col gap-12 flex-grow">
        <Link to="/">
          <div>
            <img className="w-32 h-auto" src={ImageLogo} />
          </div>
        </Link>
        <div>
          <button className="focus:bg-inputPrimary w-full flex justify-start rounded-lg px-4 py-2">
            <img src={logoHome} />
            <p className="text-white text-sm ml-2">Inicio</p>
          </button>
          <button className="focus:bg-inputPrimary w-full flex justify-start rounded-lg px-4 py-2">
            <img src={logoCalendar} />
            <p className="text-white text-sm ml-2">Calendario</p>
          </button>

          <button className="focus:bg-inputPrimary w-full flex justify-start rounded-lg px-4 py-2">
            <img src={logoPatient} />
            <p className="text-white text-sm ml-2">Mis pacientes</p>
          </button>

          <button className="focus:bg-inputPrimary w-full flex justify-start rounded-lg px-4 py-2">
            <img src={logoConfig} />
            <p className="text-white text-sm ml-2">Configuracion</p>
          </button>
        </div>
      </div>
      <button className="focus:bg-inputPrimary w-full flex justify-start rounded-lg px-4 py-2">
        <img src={logoCerrar} />
        <p className="text-white text-sm ml-2">Cerrar sesión</p>
      </button>
    </div>
  );
}
export default SideBar;
