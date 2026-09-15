//import React Icons
import { FiMapPin, FiX } from "react-icons/fi";

//import Components
import ModalShell from "./ModalShell";
import ListingThumb from "./Small presentational pieces/ListingThumb";
import StatusBadge from "./Small presentational pieces/StatusBadge";

export default function ViewModal({ listing, onClose }) {
  return (
    <ModalShell onClose={onClose}>
      <div className="relative">
        <ListingThumb type={listing.type} size="lg" />
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow hover:bg-white"
        >
          <FiX size={16} />
        </button>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
          {listing.type}
        </p>
        <h3 className="mt-1 text-lg font-bold text-slate-800">
          {listing.title}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-slate-400">
          <FiMapPin size={13} /> {listing.address}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 text-sm">
          <div>
            <p className="text-slate-400">Price</p>
            <p className="font-semibold text-slate-700">
              ${listing.price.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-slate-400">Views</p>
            <p className="font-semibold text-slate-700">
              {listing.views.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-slate-400">Published</p>
            <p className="font-semibold text-slate-700">{listing.publishOn}</p>
          </div>
          <div>
            <p className="text-slate-400">Status</p>
            <StatusBadge status={listing.status} />
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-slate-800 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
        >
          Close
        </button>
      </div>
    </ModalShell>
  );
}
