//import framer-motion
import { motion } from "framer-motion";

//import React ICons
import { FiLoader } from "react-icons/fi";

export default function LoadMoreButton({ loading, onClick, remaining }) {
  if (remaining <= 0) return null;

  return (
    <div className="flex justify-center pt-6">
      <motion.button
        whileHover={{ y: loading ? 0 : -2 }}
        whileTap={{ scale: loading ? 1 : 0.96 }}
        onClick={onClick}
        disabled={loading}
        className="flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-teal-600/20 transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-80"
      >
        {loading ? (
          <>
            <FiLoader className="animate-spin" size={15} /> Loading...
          </>
        ) : (
          <>Load More ({remaining})</>
        )}
      </motion.button>
    </div>
  );
}
