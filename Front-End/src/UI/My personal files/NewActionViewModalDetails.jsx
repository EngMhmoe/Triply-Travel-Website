//import React icon
import { MdVisibility } from "react-icons/md";

//import framer-motion
import { motion } from "framer-motion";

export default function NewActionViewModalDetails({ booking, setViewItem }) {
  return (
    <motion.button
      onClick={() => setViewItem(booking)}
      whileHover={{ scale: 1.12, background: "red", color: "#fff" }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "#f1f5f9",
        border: "none",
        borderRadius: 8,
        width: 34,
        height: 34,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#64748b",
        transition: "background 0.2s, color 0.2s",
      }}
    >
      <MdVisibility style={{ fontSize: 17 }} />
    </motion.button>
  );
}
