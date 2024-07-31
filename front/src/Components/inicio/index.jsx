import { Button } from "@/Components/ui/button";
import ImgJustina from "../../assets/justinaLanding.svg";
import ImgCorazonTwo from "../../assets/VectorCorazon.svg";
import ImgCorazon from "../../assets/corazon.svg";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-10 lg:px-0 lg:pl-40 py-10">
      <div className="relative w-full lg:w-1/2 flex flex-col gap-5 z-10">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Ayudemos a todos los que podamos
        </h1>
        <p className="text-lg lg:text-xl font-semibold mb-4">
          En Justina.io, transformamos vidas. Nuestra aplicación facilita la
          donación de órganos y ofrece un seguimiento médico integral para el
          bienestar de donantes y receptores. <br />
          Unite a nuestra comunidad, salva vidas y mantenete informado con
          Justina.io. Cada latido cuenta.
        </p>
        <Link to={"/registro"}>
          <Button className="rounded-3xl bg-inputPrimary w-full lg:w-3/5">
            ¡Unite ahora y salva vidas!
          </Button>
        </Link>
      </div>

      <div className="absolute left-8 top-2 lg:left-16 lg:top-4 z-0">
        <img src={ImgCorazon} alt="Corazon" />
      </div>
      <div className="absolute left-94 bottom-4 lg:bottom-2 z-0">
        <img src={ImgCorazonTwo} alt="Corazon Two" />
      </div>

      <div className="hidden lg:flex w-1/2 justify-end">
        <img className="w-auto" src={ImgJustina} alt="Justina" />
      </div>
    </div>
  );
}

export default Inicio;
