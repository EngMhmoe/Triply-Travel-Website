//import framer-motion
import { motion } from "framer-motion";

//import React ICons
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function ActionButtons({ onView, onEdit, onDelete }) {
  const base =
    "flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors";

  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ y: -1 }}
        onClick={onView}
        className={`${base} hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600`}
        aria-label="View"
      >
        <FiEye size={14} />
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ y: -1 }}
        onClick={onEdit}
        className={`${base} hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600`}
        aria-label="Edit"
      >
        <FiEdit2 size={14} />
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ y: -1 }}
        onClick={onDelete}
        className={`${base} hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600`}
        aria-label="Delete"
      >
        <FiTrash2 size={14} />
      </motion.button>
    </div>
  );
}
