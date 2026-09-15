import { motion } from "framer-motion";

//import React Icons
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 10, y: 0 }}
      transition={{ duration: 4 }}
      className="bg-(--secondary-color) p-6 rounded-4xl shadow-lg shadow-red-200 border-2 border-black/5 space-y-4"
    >
      <h3 className="text-(--primary-color) text-2xl font-bold">
        Get A Question?
      </h3>

      <p className="font-semibold">
        It is a long established fact that a reader will be distracted.
      </p>

      <div className="space-y-3 font-semibold">
        <div className="flex items-center gap-2">
          <h1 className="bg-(--primary-color2) p-2 rounded-full rounded-bl-none text-white">
            <IoCallSharp />
          </h1>
          +20 100 258 3746
        </div>

        <div className="flex items-center gap-2">
          <h1 className="bg-(--primary-color2) p-2 rounded-full rounded-bl-none text-white">
            <MdEmail />
          </h1>
          lwanym144@Google.Com
        </div>
      </div>
    </motion.div>
  );
}
