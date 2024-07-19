import leyJustina from "../../assets/leyjustina.svg";
import './style.css'

function LeyJustina() {
  return (
    <div className="flex  items-center justify-end my-5 py-14  relative">
      <div className="w-1/3 flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Sobre la Ley Justina</h1>
        <p className="font-bold text-xl">
          La Ley n° 27.447 regula el Trasplante de Órganos, Tejidos y Células
          del país. Fue sancionada en 2018 a raíz del caso de Justina Lo Cane,
          una niña de 12 años que falleció en espera de un trasplante de
          corazón. Su historia se hizo conocida gracias a las redes sociales y
          medios de comunicación. Su familia impulsó este proyecto,
          visibilizando el sistema de donación de órganos en Argentina.
        </p>
        <p className="font-bold text-xl">
          La Ley Justina establece la "presunción afirmativa de consentimiento":
          todas las personas mayores de 18 años son consideradas donantes, a
          menos que expresen lo contrario.
        </p>
        <p className="font-bold text-xl flowing-text">
          Este mecanismo busca satisfacer la demanda de órganos en el sistema de
          salud y salvar miles de vidas. Según el Ministerio de Salud de la
          Nación, este cambio redujo la tasa de interrupciones de donación por
          oposición familiar del 40% al 10%, al eliminar el requisito de
          certificación familiar. En 2022, se lanzó el Programa Procurar para
          cumplir con esta ley, instalando centros de detección, selección y
          tratamiento de donantes en diversas instituciones de salud.
        </p>
      </div>
      <div className="w-1/2 flex justify-start items-center ">
        <img
          src={leyJustina}
          className="absolute top-20 -right-8 rotate-5 shape-image rounded-lg  object-cover"
          
        />
      </div>
    </div>
  );
}

export default LeyJustina;
