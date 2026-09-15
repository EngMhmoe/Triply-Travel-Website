//import framer-motion
import { motion } from "framer-motion";

//import React Icons
import { FiShoppingBag } from "react-icons/fi";

export default function CountOrders({ orders }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 w-fit ms-auto bg-red-500/20 text-(--primary-color2)  px-4 py-1.5 rounded-4xl rounded-bl-none font-semibold"
    >
      <FiShoppingBag />
      {orders.length} Orders
    </motion.div>
  );
}
