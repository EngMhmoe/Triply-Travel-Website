//import React Icons
import { FiCheckCircle } from "react-icons/fi";

export default function ToastCancelModal() {
  return (
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
  );
}
