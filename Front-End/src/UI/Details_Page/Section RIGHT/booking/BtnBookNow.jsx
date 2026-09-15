//import framer-motion
import { motion } from "framer-motion";

//import React Icons
import { FaLock } from "react-icons/fa";

export default function BtnBookNow({ isValid, handleBooking }) {
  return (
    <motion.button
      onClick={handleBooking}
      whileHover={{ scale: isValid ? 1.04 : 1 }}
      transition={{ duration: 1 }}
      className={`w-full py-3 rounded-4xl font-bold cursor-pointer  flex items-center justify-center gap-2 text-white hover:bg-transparent border  hover:border-(--primary-color2) hover:text-(--primary-pera) duration-1500 ${
        isValid ? "bg-(--primary-color)" : "bg-green-600"
      }`}
    >
      <FaLock className="text-red-300" />
      Book Now
    </motion.button>
  );
}
