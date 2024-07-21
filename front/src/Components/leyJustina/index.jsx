import leyJustina from "../../assets/leyjustina.svg";
import "./style.css";

function LeyJustina() {
  return (
    <div className=" w-full my-5 py-14 relative overflow-hidden flex justify-end px-4 md:px-0">
      <div className="content pl-12">
        <h1 className="text-3xl font-bold mb-4">Sobre la Ley Justina</h1>
        <div className="image-container float-right w-2/4 ml-4 mb-4">
          <img
            src={leyJustina}
            className="shape-image rounded-lg rotate-5 w-full"
            alt="Ley Justina"
          />
        </div>
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
    </div>
  );
}

export default LeyJustina;
