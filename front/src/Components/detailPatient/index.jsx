import React from "react";
import person from "../../assets/iconCardPatient/person.svg";
import card from "../../assets/iconCardPatient/card.svg";
import phone from "../../assets/iconCardPatient/phone.svg";
import mail from "../../assets/iconCardPatient/mail.svg";

function DetailPatient({ data }) {
  if (!data) {
    return <p>No hay información del paciente disponible.</p>;
  }

  return (
    <div>
      <p className="mb-4">Mis pacientes / {data.firstName} {data.lastName}</p>
      <div className="flex flex-col md:flex-row gap-4 border items-center justify-between border-[#CFCFD2] p-4 bg-[#F5F5F6] rounded-lg">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-cyan-600 rounded-full"></div>
          <div>
            <p className="text-lg font-semibold">
              {data.firstName} <br /> {data.lastName}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2.5 md:gap-4">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-1">
              <img src={person} className="w-5 h-5" alt="gender" />
              <p className="text-base">{data.gender === "F" ? "Femenino (ella)," : "Masculino (él), "}</p>
              <p className="text-base">35 años</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={card} className="w-5 h-5" alt="coverage" />
              <p className="text-base">Cobertura médica:</p>
              <p className="text-base">{data.coverage || "Omint"}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-1">
              <img src={phone} className="w-5 h-5" alt="phone" />
              <p className="text-base">{data.phone || "No especificado"}</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={mail} className="w-5 h-5" alt="email" />
              <p className="text-base">{data.email || "No especificado"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPatient;