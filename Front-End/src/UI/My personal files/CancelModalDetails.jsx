//import React Icons
import { FiAlertTriangle } from "react-icons/fi";

//import framer-motion
import { motion, AnimatePresence } from "framer-motion";
import BtnCancel from "./BtnCancel";

export default function CancelModalDetails({
  cancelItem,
  setCancelItem,
  confirmCancel,
}) {
  return (
    <AnimatePresence>
      {cancelItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 20 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: 100, scale: 0.7 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.7 }}
            transition={{ duration: 0.5 }}
            className="bg-(--secondary-color) shadow-lg shadow-red-400 rounded-3xl p-6 max-w-lg w-full"
          >
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-(--primary-color2) text-4xl border border-red-300 shadow-lg shadow-red-300">
                <FiAlertTriangle />
              </div>
            </div>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <h3 className="text-3xl font-bold text-(--primary-color) text-center">
              Cancel Booking?
            </h3>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <p className="font-semibold text-center mt-2">
              Are you sure you want to cancel booking{" "}
              <span className="font-bold text-rose-500">{cancelItem.id}</span>?
            </p>

            {/* /////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <div className="grid grid-cols-2 gap-3 mt-6 text-lg font-bold">
              <BtnCancel text={"Back"} setCancelItem={setCancelItem} />

              {/* /////////////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////////////// */}

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                onClick={confirmCancel}
                className="py-2.5 rounded-2xl bg-green-200/80 cursor-pointer duration-1000 border border-green-400 text-green-600 hover:bg-green-600 hover:text-white"
              >
                Confirm
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
