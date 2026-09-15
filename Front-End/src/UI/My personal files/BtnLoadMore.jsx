//import React Icons
import { FiLoader } from "react-icons/fi";

//import framer-motion
import { motion } from "framer-motion";

export default function BtnLoadMore({ loadMore, loading }) {
  return (
    <div className="text-center mt-10 mb-5">
      <motion.button
        whileHover={{ scale: 1.07, color: "#fff" }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.5 }}
        onClick={loadMore}
        disabled={loading}
        style={
          loading === false
            ? {
                background: "#0c2c7a",
                border: "none",
                borderRadius: 10,
                padding: "12px 35px",
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }
            : {
                background: "green",
                border: "none",
                borderRadius: 10,
                padding: "12px 35px",
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }
        }
        className={"flex items-center gap-4 mx-auto"}
      >
        {loading ? (
          <>
            <FiLoader className="animate-spin text-xl" />
            Loading...
          </>
        ) : (
          "View All"
        )}
      </motion.button>
    </div>
  );
}
