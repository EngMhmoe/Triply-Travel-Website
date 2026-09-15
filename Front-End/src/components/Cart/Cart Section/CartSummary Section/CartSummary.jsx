//import Components
import SectionLeft from "./SectionLeft";
import SectionRight from "./sectionRight";

//import framer-motion
import { motion } from "framer-motion";

export default function CartSummary() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 2, x: 0 }}
      transition={{ duration: 2 }}
      className="flex lg:flex-row flex-col justify-between lg:items-start items-center gap-39 mb-20 bg-white shadow-xl rounded-2xl p-6 h-fit sticky top-50"
    >
      {/* section Left */}
      <SectionLeft />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* section Right */}
      <SectionRight />
    </motion.section>
  );
}
