//import framer-motion
import { motion } from "framer-motion";

//import React Icons
import { MdVisibility } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function NewActionMyBooking({
  booking,
  setViewItem,
  setCancelItem,
}) {
  return (
    <div className="flex justify-center items-center gap-2">
      {/* View */}
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

      {/* /////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////// */}

      {/* Cancel */}
      {booking.status !== "Cancelled" && (
        <motion.button
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
          onClick={() => setCancelItem(booking)}
          className="px-2 h-10 rounded-full border border-(--primary-color2) font-bold text-2xl text-(--primary-color2) hover:bg-(--primary-color2) cursor-pointer duration-800 hover:text-white transition"
        >
          <MdOutlineDeleteForever className="mx-auto" />
        </motion.button>
      )}
    </div>
  );
}
