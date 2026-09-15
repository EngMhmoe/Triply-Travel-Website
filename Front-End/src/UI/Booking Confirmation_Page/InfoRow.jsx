//import motion
import { motion } from "framer-motion";

const InfoRow = ({ label, value }) => {
  return (
    <motion.div className="font-semibold w-full flex items-center justify-between py-2">
      <span className="capitalize">{label}:</span>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      <span className="InfoRow_Value capitalize">{value}</span>
    </motion.div>
  );
};

export default InfoRow;
