//import React ICons
import { FaShareAlt } from "react-icons/fa";

export default function Meta({ MetaBar, style }) {
  return (
    <section className="flex flex-wrap items-center gap-5 text-(--primary-pera) font-semibold text-sm py-3 border-b border-orange-500/30">
      {MetaBar.map((item) => (
        <span key={item} className="flex items-center gap-1.5">
          {item.icon} {item.title}
        </span>
      ))}

      {/* ////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////// */}

      <button className="ml-auto flex items-center cursor-pointer gap-1.5 hover:text-gray-800 transition-colors">
        <FaShareAlt className={style} /> Share
      </button>
    </section>
  );
}
