import IconTratamientos from '../../assets/icon.svg';
import IconLogin from '../../assets/iconLogin.svg';
import IconGestion from '../../assets/iconGestion.svg';
import IconTurnos from '../../assets/iconTurnos.svg';
import IconTransplates from '../../assets/iconTransplates.svg';
import IconListado from '../../assets/iconListado.svg';
import Card from '../cardLanding'


const features = [
  {
    logo: IconLogin,
    title: "Ingreso y registro",
    description: "Regístrate y accede de forma segura con credenciales protegidas. Utilizamos prácticas de seguridad como la encriptación de contraseñas y la validación de correos electrónicos para mantener tus datos a salvo."

  },
  {
    logo: IconGestion,
    title: "Gestión de usuarios",
    description: "Creación de usuarios con diferentes roles, como administradores, médicos y pacientes. Cada rol tiene permisos específicos para acceder y gestionar funciones según sus responsabilidades en el sistema."

  },
  {
    logo: IconTurnos,
    title: "Turnos médicos",
    description: "Organizá tus citas médicas con una agenda integrada en tu perfil. Reprogramá o cancelá turnos fácilmente, asegurando una comunicación fluida y eficiente entre médicos y pacientes."

  },
  {
    logo: IconTratamientos,
    title: "Tratamientos y recetas",
    description: "Los médicos pueden registrar tratamientos, medicamentos y recetas directamente en la app. Esta información se adjunta a la historia clínica del paciente, accesible para su revisión."

  },
  {
    logo: IconTransplates,
    title: "Trasplante cruzado",
    description: "Gestioná y actualizá los datos de donantes y receptores en tiempo real. Esto aumenta las probabilidades de éxito en los trasplantes al asegurar las mejores combinaciones posibles."

  },
  {
    logo: IconListado,
    title: "Listado de centros de salud",
    description: "Mantené una base de datos actualizada de todos los hospitales e instituciones de salud, facilitando la búsqueda y referencia de centros médicos disponibles para donantes y receptores."

  }

]

function Funcionalidades() {
  return (
    <div className="bg-bgLanding w-full h-auto flex flex-col justify-start items-center py-40  lg:p-40">
      <div className='flex flex-col justify-center items-center gap-5 mb-8'>
        <h1 className="text-4xl pl-8 font-semibold md:font-bold">Principales Funcionalidades</h1>
        <p className="text-xl font-semibold md:font-bold md:text-center w-4/5">
          Justina.io ofrece una interfaz omnicanal para la integración de las
          distintas partes del ecosistema de salud.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-auto lg:grid-cols-3  gap-4 ">
        {features.map((feature, index) => (
          <Card
            key={index}
            logo={feature.logo}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

    </div>
  );
}

export default Funcionalidades;
