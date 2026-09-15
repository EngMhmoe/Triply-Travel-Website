//import React Icons
import { FiCheckCircle } from "react-icons/fi";

//import framer-motion
import { AnimatePresence, motion } from "framer-motion";

export default function ToastCancelModal({ toast }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -80, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -60, scale: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999]"
        >
          <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[320px]">
            <div className="w-11 h-11 rounded-full bg-emerald-500/40 flex items-center justify-center text-green-500 text-2xl">
              <FiCheckCircle />
            </div>

            {/* ////////////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////////////// */}

            <div>
              <h4 className="font-bold text-lg text-(--primary-colo)">
                Booking Updated
              </h4>

              {/* ////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////// */}

              <p className="text-sm">Reservation cancelled successfully.</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
