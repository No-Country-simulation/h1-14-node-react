import logoFooter from "../../assets/logopng.webp";
import logoInstagram from '../../assets/instagram.svg'
import logoFacebook from '../../assets/facebook.svg'
import logoLinkedin from '../../assets/linkedin.svg'

import { Link } from "react-router-dom";
import { Input } from "@/Components/ui/input";

function Footer() {
  return (
    <div className="flex flex-col gap-7 justify-between items-center bg-bgNavBar py-5 px-3 lg:px-40">
      <div>
        <Link to="/">
          <div>
            <img className="w-32 h-auto" src={logoFooter} alt="Logo" />
          </div>
        </Link>
      </div>
      <div className="w-full px-4 sm:px-0">
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-center justify-center">
          <li>
            <Link to="/">
              <p className="text-white text-sm">Inicio</p>
            </Link>
          </li>
          <li>
            <Link to="/sobre-la-ley-justina">
              <p className="text-white text-sm">Sobre la Ley Justina</p>
            </Link>
          </li>
          <li>
            <Link to="/funcionalidades">
              <p className="text-white text-sm">Funcionalidades</p>
            </Link>
          </li>
          <li>
            <Link to="/contactanos">
              <p className="text-white text-sm">Contactanos</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full px-4 sm:px-2">
        <ul className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <li className="text-center sm:text-left">
            <p className="text-white text-sm">© 2024, Justina.io. Todos los derechos reservados | Síguenos en:</p>
          </li>
          <li className="flex gap-3">
            <Link to="https://facebook.com">
              <img src={logoFacebook} alt="Facebook" />
            </Link>
            <Link to="https://instagram.com">
              <img src={logoInstagram} alt="Instagram" />
            </Link>
            <Link to="https://linkedin.com">
              <img src={logoLinkedin} alt="LinkedIn" />
            </Link>
          </li>
          <li className="text-center sm:text-left">
            <p className="text-white text-sm">Suscribite a nuestro mail informativo:</p>
          </li>
          <li className="w-full sm:w-auto">
            <Input
              type='email'
              placeholder="Email"
              className='placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder w-full sm:w-70 h-6'
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;