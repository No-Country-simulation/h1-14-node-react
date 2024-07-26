import FormContact from "../formContact";
import DoctorImg from '../../assets/doctor.svg'

function ContactUs() {
  return (
    <div className="w full flex justify-center lg:justify-start items-center py-20 lg:pl-40 sm:py-32">
      <div className=" w-4/5 flex px-2">
        <div className="flex flex-col w-full lg:w-1/2 gap-3">
          <h1 className="text-left font-bold text-4xl w-full">
            Comunicate con nosotros
          </h1>
          <p className='text-left font-semibold mt-2 text-xl w-full '>
            ¿Tenés preguntas o necesitás más información? ¡Estamos aquí para
            ayudarte! En Justina.io, valoramos tu interés y estamos
            comprometidos en brindarte el mejor soporte posible. Podés
            contactarnos a través de nuestro formulario en línea, enviar un
            correo electrónico a tuemail@justina.io, o llamarnos al número de
            atención al cliente. Nuestro equipo de profesionales está listo para
            asistirte en cada paso del camino. ¡No dudes en comunicarte con
            nosotros!
          </p>

          <FormContact />
        </div>
        <div className="  h-auto hidden lg:flex">
        <img className='w-full h-full' src={DoctorImg} />
        </div>
            
      </div>
    </div>
  );
}

export default ContactUs;
