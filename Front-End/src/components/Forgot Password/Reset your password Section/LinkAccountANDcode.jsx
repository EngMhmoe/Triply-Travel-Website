//import react-router Links
import { Link } from "react-router-dom";

export default function LinkAccountANDcode({ des, link, NameLink }) {
  return (
    <div className="flex gap-2 justify-center text-center text-sm mt-6 text-gray-400">
      <p>{des}</p>

      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}

      <Link
        to={link}
        className="text-(--primary-color2) hover:text-(--primary-color) duration-1000 cursor-pointer"
      >
        {NameLink}
      </Link>
    </div>
  );
}
