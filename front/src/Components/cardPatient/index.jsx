import person from "../../assets/iconCardPatient/person.svg";
import card from "../../assets/iconCardPatient/card.svg";
import phone from "../../assets/iconCardPatient/phone.svg";
import mail from "../../assets/iconCardPatient/mail.svg";
import iconButton from "../../assets/iconCardPatient/buttonicon.svg";
function CardPatient() {
  return (
    <div className="flex items-center gap-6 border border-[#CFCFD2] justify-between p-4 bg-[#F5F5F6] rounded-lg">
      <div className="flex gap-6">
        <div className="flex">
          <div className=" w-16 h-16 bg-cyan-600 rounded-full mr-4"></div>
          <div>
            <p className="text-xl font-semibold text-left">
              Andres <br /> Julian
            </p>
          </div>
        </div>
        <div className="flex flex-col   gap-2.5">
          <div className="flex gap-1 items-center justify-start">
            <img src={person} />
            <p className="text-base"> Masculino</p>
            <p className="text-base">(el)</p>
            <p className="text-base">34 años</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={card} />
            <p className="text-base"> Cubertura medica:</p>
            <p className="text-base">Omint</p>
          </div>
        </div>
        <div className="flex flex-col   gap-2.5">
          <div className="flex gap-1 items-center justify-start">
            <img src={phone} />
            <p className="text-base"> +54 9 291 7485277</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={mail} />
            <p className="text-base">juan.perez86@gmail.com</p>
          </div>
        </div>
      </div>
      <button className=" bg-[#ddeee6] py-2 pr-2 pl-4 rounded-md flex items-center">
        <p className="text-[#2E6D5D] text-base ">ver paciente</p>
        <img src={iconButton} />
      </button>
    </div>
  );
}

export default CardPatient;
