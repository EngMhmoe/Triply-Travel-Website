//import framer-motion
import { motion } from "framer-motion";

//import Component
import ListingThumb from "./Small presentational pieces/ListingThumb";
import ActionButtons from "./Small presentational pieces/ActionButtons";
import StatusBadge from "./Small presentational pieces/StatusBadge";

//import React icons
import { FiMapPin } from "react-icons/fi";

export default function ListingRow({ listing, onView, onEdit, onDelete }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -24, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35 }}
      className="grid grid-cols-1 gap-4 border-b border-slate-100 px-4 py-4 last:border-b-0 sm:grid-cols-[minmax(0,2.2fr)_0.8fr_0.7fr_0.9fr_0.8fr_auto] sm:items-center sm:px-2"
    >
      {/* Listing info */}
      <div className="flex items-center gap-3">
        <ListingThumb type={listing.type} />
        <div className="min-w-0">
          <p className="truncate font-semibold text-slate-800">
            {listing.title}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
            <FiMapPin size={11} /> {listing.address}
          </p>
          <p className="mt-0.5 text-sm font-bold text-teal-600">
            ${listing.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Mobile meta grid */}
      <div className="grid grid-cols-2 gap-y-2 text-sm sm:hidden">
        <span className="text-slate-400">Type</span>
        <span className="text-right font-medium text-slate-600">
          {listing.type}
        </span>
        <span className="text-slate-400">Views</span>
        <span className="text-right font-medium text-slate-600">
          {listing.views.toLocaleString()}
        </span>
        <span className="text-slate-400">Published</span>
        <span className="text-right font-medium text-slate-600">
          {listing.publishOn}
        </span>
        <span className="text-slate-400">Status</span>
        <span className="text-right">
          <StatusBadge status={listing.status} />
        </span>
      </div>

      <span className="hidden text-sm font-medium text-slate-600 sm:block">
        {listing.type}
      </span>
      <span className="hidden text-sm font-medium text-slate-600 sm:block">
        {listing.views.toLocaleString()}
      </span>
      <span className="hidden text-sm font-medium text-slate-600 sm:block">
        {listing.publishOn}
      </span>
      <div className="hidden sm:block">
        <StatusBadge status={listing.status} />
      </div>

      <div className="flex justify-start sm:justify-end">
        <ActionButtons onView={onView} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </motion.div>
  );
}
