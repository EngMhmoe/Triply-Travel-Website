//import React Icons
import { FiAlertTriangle, FiX } from "react-icons/fi";

//import framer-motion
import { motion, AnimatePresence } from "framer-motion";

export default function ViewModalDetails({ viewItem, setViewItem }) {
  return (
    <AnimatePresence>
      {viewItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 20 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: 100, scale: 0.7 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.7 }}
            transition={{ duration: 0.5 }}
            className="bg-(--secondary-color) shadow-lg shadow-red-400 rounded-3xl p-6 max-w-lg w-full"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-2xl text-(--primary-color) font-bold">
                Booking Details
              </h3>

              {/* /////////////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////////////// */}

              {/* X Button */}
              <button
                onClick={() => setViewItem(null)}
                className="group w-10 h-10 rounded-xl text-(--primary-color2) bg-red-200 font-bold text-2xl cursor-pointer hover:bg-(--primary-color2) hover:text-white duration-1000 transition"
              >
                <FiX className="mx-auto group-hover:rotate-360 duration-1000" />
              </button>
            </div>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            {/* Content */}
            <div className="space-y-4 font-semibold">
              <p>
                <strong>ID:</strong> {viewItem.id}
              </p>
              <p>
                <strong>Type:</strong> {viewItem.type}
              </p>
              <p>
                <strong>Date:</strong> {viewItem.date}
              </p>
              <p>
                <strong>Price:</strong> {viewItem.price}
              </p>
              <p>
                <strong>Status:</strong> {viewItem.status}
              </p>
            </div>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            {/* Close Button */}
            <button
              onClick={() => setViewItem(null)}
              className="w-full mt-6 py-3 rounded-2xl  bg-(--primary-color) text-white hover:bg-orange-600 font-bold text-xl cursor-pointer duration-1000 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
