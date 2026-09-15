//import React Icons
import { FaArrowRight } from "react-icons/fa";

export default function BtnConfirmBooking({ handleSubmit, title }) {
  return (
    <button
      onClick={handleSubmit}
      className="group bg-(--primary-color2) hover:bg-(--primary-pera) text-white py-3 px-7 rounded-3xl rounded-bl-none cursor-pointer font-semibold
              flex items-center text-lg justify-center gap-3 duration-1000 transition mt-13 shadow shadow-red-300"
    >
      {title}
      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}
      <div className="bg-white p-0.5 rounded-full">
        <FaArrowRight className="duration-1000 text-(--primary-color) group-hover:scale-115 group-hover:-rotate-90" />
      </div>
    </button>
  );
}
