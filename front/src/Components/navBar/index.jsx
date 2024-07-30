import { Link as ScrollLink } from 'react-scroll';
import ImageLogo from "../../assets/logoNav.svg";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full h-16 bg-bgNavBar sticky top-0 z-50 px-10 md:px-40  flex items-center justify-between">
      <ul className="flex gap-2 items-center">
        <li>
          <Link to='/'>
            <div>
              <img className="w-32 h-auto" src={ImageLogo} alt="Logo" />
            </div>
          </Link>
        </li>
      </ul>
      
      <ul className="hidden xl:flex gap-4 items-center">
        <li>
          <ScrollLink to="inicio" smooth={true} duration={500}>
            <p className="text-white text-sm cursor-pointer">Inicio</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="leyJustina" smooth={true} duration={500}>
            <p className="text-white text-sm cursor-pointer">Sobre la Ley Justina</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="funcionalidades" smooth={true} duration={500}>
            <p className="text-white text-sm cursor-pointer">Funcionalidades</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contactUs" smooth={true} duration={500}>
            <p className="text-white text-sm cursor-pointer">Contactanos</p>
          </ScrollLink>
        </li>
      </ul>

      <ul className="flex gap-4 items-center">
        <li>
          <Link to="/registro">
            <Button
              className="rounded-3xl h-9 bg-inputSecundaryColor1"
              type="button"
              variant="secondary"
            >
              Registrarme
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <Button
              className="rounded-3xl h-9 bg-inputPrimary"
              type="submit"
            >
              Ingresar
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;