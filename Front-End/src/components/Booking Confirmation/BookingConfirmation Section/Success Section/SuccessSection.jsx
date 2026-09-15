//import motion
import { motion } from "framer-motion";

//import Lottie animations
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../../public/animations/Check okey done.json";

//import React Icon
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuccessSection = () => {
  return (
    <motion.div className="w-[80%] m-auto bg-(--secondary-color) sm:rounded-[150px] rounded-4xl sm:rounded-bl-none rounded-bl-none sm:rounded-tr-none rounded-tr-none shadow-xl shadow-orange-500/50 sm:p-10 py-8 px-3  border-8 border-dashed border-orange-500/55 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0, type: "spring", stiffness: 15 }}
        className="flex justify-center"
      >
        <Lottie
          animationData={groovyWalkAnimation}
          className=" w-30"
          loop={1}
        />
      </motion.div>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-(--primary-color2)">
        Your Booking Is Confirmed
      </h1>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      <p className="mt-5 max-w-4xl sm:text-2xl text-xl font-semibold mx-auto">
        Thank you for booking with us. Your reservation has been completed
        successfully.
      </p>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      <Link to={"/Destinations_page"}>
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="m-auto group bg-(--primary-color2) hover:bg-(--primary-pera) text-white sm:px-8 p-4 rounded-full rounded-bl-none cursor-pointer font-semibold
        flex items-center text-lg justify-center gap-3 duration-1000 transition mt-10"
        >
          Explore More Services
          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}
          <div className="bg-white p-0.5 rounded-full">
            <FaArrowRight className="duration-1000 text-(--primary-color) group-hover:scale-115 group-hover:-rotate-90" />
          </div>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default SuccessSection;
