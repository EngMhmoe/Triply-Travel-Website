//import React ICons
import { FaSync } from "react-icons/fa";

//import framer-motion
import { motion } from "framer-motion";

export default function LoadMore({ visible, reviews, setVisible }) {
  return (
    <section>
      {visible < reviews?.length && (
        <div className="flex justify-center">
          <motion.button
            onClick={() =>
              setVisible((prev) => Math.min(prev + 2, reviews.length))
            }
            whileHover={{ scale: 1.05 }}
            className="flex group items-center gap-2 cursor-pointer hover:bg-(--primary-pera) duration-1000    bg-(--primary-color) text-white px-7 py-2.5 font-bold rounded-full rounded-bl-none"
          >
            <motion.span
              whileHover={{
                rotate: 180,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <FaSync className=" group-hover:rotate-180 duration-1000" />
            </motion.span>
            Load More
          </motion.button>
        </div>
      )}
    </section>
  );
}
