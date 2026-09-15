//import React Icons
import { FiLoader } from "react-icons/fi";

//import framer-motion
import { motion } from "framer-motion";

export default function BtnLoadMore({ loadMore, loading }) {
  return (
    <div className="text-center mt-8">
      <motion.button
        whileHover={{ scale: 1.09 }}
        whileTap={{ scale: 0.95 }}
        onClick={loadMore}
        disabled={loading}
        className={
          loading
            ? "px-10 py-3.5 rounded-full duration-800 rounded-bl-none cursor-pointer bg-green-500  text-white font-semibold shadow-lg shadow-red-200 flex items-center gap-4 mx-auto text-xl"
            : "px-10 py-3.5 rounded-full duration-800 rounded-bl-none cursor-pointer bg-(--primary-color2) text-white font-semibold shadow-lg shadow-black/35 flex items-center gap-4 mx-auto text-xl"
        }
      >
        {loading ? (
          <>
            <FiLoader className="animate-spin text-xl" />
            Loading...
          </>
        ) : (
          "Load More"
        )}
      </motion.button>
    </div>
  );
}
