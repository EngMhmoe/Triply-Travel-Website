//import React Icons
import { FiSearch } from "react-icons/fi";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center  gap-2 py-15 text-center w-full">
      <FiSearch className="text-3xl text-slate-300" />

      {/* /////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////// */}

      <p className="font-medium text-slate-500">
        No listings match your search
      </p>

      {/* /////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////// */}

      <p className="text-sm text-slate-400">Try a different title.</p>
    </div>
  );
}
