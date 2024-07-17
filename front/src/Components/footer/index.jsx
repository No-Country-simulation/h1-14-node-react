import logoFooter from "../../assets/logopng.webp";
import logoInstagram from '../../assets/instagram.svg'
import logoFacebook from '../../assets/facebook.svg'
import logoLinkedin from '../../assets/linkedin.svg'

import { Link } from "react-router-dom";
import { Input } from "@/Components/ui/input";

function Footer() {
  return (
    <div className="flex flex-col gap-7 justify-center items-center bg-bgNavBar py-5">
      <div>
        <Link to="/">
          <div>
            <img class="w-32 h-auto" src={logoFooter} />
          </div>
        </Link>
      </div>
      <div className=''>
        <ul className="flex gap-12 items-center">
          <li>
            <Link>
              <p className="text-white text-sm">Inicio</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className="text-white text-sm">Sobre la Ley Justina</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className="text-white text-sm">Funcionalidades</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className="text-white text-sm">Contactanos</p>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='flex gap-3 items-center'>
            <li>
                <p className="text-white text-sm">© 2024, Justina.io. Todos los derechos reservados   |   Síguenos en:</p>
            </li>
            <li>
                <ul className='flex gap-3'>
                    <li>
                        <img  src={logoFacebook}/>
                    </li>
                    <li>
                        <img  src={logoInstagram}/>
                    </li>
                    <li>
                        <img  src={logoLinkedin}/>
                    </li>
                    
                </ul>
            </li>
            <li>
                <p className="text-white text-sm">Suscribite a nuestro mail informativo:</p>
            </li>
            <li >
                <Input
                    type='email'
                    placeholder="Email"
                    className='placeholder-inputPlaceholder border border-colorInputBorder placeholder-text-inputPlaceholder w-70 h-6'
                ></Input>
                
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
