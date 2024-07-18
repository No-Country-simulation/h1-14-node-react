import { Button } from "@/Components/ui/button"
import ImgJustina from '../../assets/justinaLanding.svg';
import ImgCorazonTwo from '../../assets/VectorCorazon.svg';
import ImgCorazon from '../../assets/corazon.svg';

function Inicio() {
  return (
    <div className=" my-10 w-screen flex  items-center relative justify-end">
        <div>
        <img className='absolute  left-40 top-2' src={ImgCorazon} />
      </div>
      <div className='w-1/3 flex flex-col gap-5 relative '>
      <div>
        <img className='absolute right-2 w-14 inver h-14 bottom-2' src={ImgCorazonTwo} />
      </div>
        <h1 className='text-5xl font-bold'>Ayudemos a todos los que podamos</h1>
        <p className='font-bold text-xl '>
          En Justina.io, transformamos vidas. Nuestra aplicación facilita la
          donación de órganos y ofrece un seguimiento médico integral para el
          bienestar de donantes y receptores. <br/>Unite a nuestra comunidad, salva
          vidas y mantenete informado con Justina.io. Cada latido cuenta.
        </p>
        <Button
        className='rounded-3xl bg-inputPrimary w-3/5 '
        > ¡Unite ahora y salva vidas! </Button>
      </div>
      <div className='w-auto flex justify-end items-center'>
        <img className='' src={ImgJustina} />
      </div>
    </div>
  );
}

export default Inicio;
