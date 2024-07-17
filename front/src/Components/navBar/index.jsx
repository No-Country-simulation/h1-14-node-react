import ImageLogo from "../../assets/logoNav.svg";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";

function navBar() {
  return (
    <nav className="flex w-full h-16 px-28 items-center justify-between bg-bgNavBar">
      <ul className="flex w-auto gap-2">
        <li>
          <Link>
            <div>
              <img class="w-32 h-auto" src={ImageLogo} />
            </div>
          </Link>
        </li>
      </ul>
      
      <ul className="flex gap-2 items-center">
        <li>
        <ul className="flex gap-4 items-center">
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
        </li>
        <li className="ml-4">
          <Link to="/registro">
            <Button
              className="rounded-3xl  h-9 bg-inputSecundaryColor1"
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

export default navBar;

