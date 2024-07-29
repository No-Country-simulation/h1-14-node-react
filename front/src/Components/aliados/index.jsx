import logo1 from "../../assets/aliados/logo1.svg";
import logo2 from "../../assets/aliados/logo2.svg";
import logo3 from "../../assets/aliados/logo3.svg";
import logo4 from "../../assets/aliados/logo4.svg";
import logo5 from "../../assets/aliados/logo5.svg";
import logo6 from "../../assets/aliados/logo6.svg";
import logo7 from "../../assets/aliados/logo7.svg";
import logo8 from "../../assets/aliados/logo8.svg";
import logo9 from "../../assets/aliados/logo9.svg";
import logo10 from "../../assets/aliados/logo10.svg";
import logo11 from "../../assets/aliados/logo11.svg";
import logo12 from "../../assets/aliados/logo12.svg";
import logo13 from "../../assets/aliados/logo13.svg";
import logo14 from "../../assets/aliados/logo14.svg";
import CardAliados from "../cardAliados";

import './stile.css'

const datos = [
  {
    logo: logo1,
    descripcion: "logo1",
  },
  {
    logo: logo2,
    descripcion: "logo2",
  },
  {
    logo: logo3,
    descripcion: "logo3",
  },
  {
    logo: logo4,
    descripcion: "logo4",
  },
  {
    logo: logo5,
    descripcion: "logo5",
  },
  {
    logo: logo6,
    descripcion: "logo6",
  },
  {
    logo: logo7,
    descripcion: "logo7",
  },
  {
    logo: logo8,
    descripcion: "logo8",
  },
  {
    logo: logo9,
    descripcion: "logo9",
  },
  {
    logo: logo10,
    descripcion: "logo10",
  },
  {
    logo: logo11,
    descripcion: "logo11",
  },
  {
    logo: logo12,
    descripcion: "logo12",
  },
  {
    logo: logo13,
    descripcion: "logo13",
  },
  {
    logo: logo14,
    descripcion: "logo14",
  },
];

const listaLogos = [...datos, ...datos];

function Aliados() {
  return (
    <div className="bg-bgLanding py-12">
      <div className='overflow-hidden w-full'>
      <div className=' flex justify-center items-center mt-4'>
        <h2 className=' font-semibold md:font-bold text-center  text-4xl'>Nuestros valiosos aliados</h2>
      </div>
        <div className="flex whitespace-nowrap gap-16 justify-center items-center animate-scroll-left mt-6">
          {listaLogos.map((item, index) => (
            <CardAliados
              key={index}
              logo={item.logo}
              descripcion={item.descripcion}
            />
          ))}
        </div>
        <div className="flex whitespace-nowrap gap-16 justify-center items-center animate-scroll-right mt-4">
          {listaLogos.map((item, index) => (
            <CardAliados
              key={index}
              logo={item.logo}
              descripcion={item.descripcion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aliados;
