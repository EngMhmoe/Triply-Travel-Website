//import React ICons
import { FaHotel, FaPlane, FaCar, FaShip } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* Sample Data                                                         */
/* ------------------------------------------------------------------ */
const TYPE_META = {
  Hotel: { icon: FaHotel, from: "#0ea5b7", to: "#0f766e" },
  Flight: { icon: FaPlane, from: "#3b82f6", to: "#1e3a8a" },
  Car: { icon: FaCar, from: "#f59e0b", to: "#b45309" },
  Cruise: { icon: FaShip, from: "#8b5cf6", to: "#5b21b6" },
};

export default function ListingThumb({ type, size = "md" }) {
  const meta = TYPE_META[type] || TYPE_META.Hotel;
  const Icon = meta.icon;
  const dims = size === "md" ? "h-16 w-20" : "h-24 w-full";

  return (
    <div
      className={`flex ${dims} shrink-0 items-center justify-center rounded-xl text-white shadow-sm`}
      style={{
        background: `linear-gradient(135deg, ${meta.from}, ${meta.to})`,
      }}
    >
      <Icon
        className={size === "md" ? "text-xl opacity-90" : "text-3xl opacity-90"}
      />
    </div>
  );
}
