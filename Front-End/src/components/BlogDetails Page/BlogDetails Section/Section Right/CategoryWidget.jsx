//import framer-motion
import { motion } from "framer-motion";

//import react Icons
import { FaArrowRight } from "react-icons/fa";

export default function CategoryWidget({ aLLDataCategories, FilterCategory }) {
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h3 className="text-2xl font-bold border-b-2 border-(--primary-pera) text-(--primary-color) inline-block mb-4">
        Category
      </h3>

      {/* //////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////// */}

      <ul className="divide-y divide-gray-100">
        {aLLDataCategories?.map((cat, i) => (
          <motion.li
            onClick={() => FilterCategory(cat)}
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="flex items-center justify-between py-2.5 capitalize
              duration-1000
                       text-(--primary-pera) cursor-pointer hover:text-(--primary-color2) 
                       group transition-colors"
          >
            <span className="flex items-center gap-2">
              {/* السهم بيتحرك لما نـ hover */}
              <FaArrowRight
                size={12}
                className="transition-transform duration-1000 group-hover:translate-x-1"
              />

              {/* //////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////// */}

              {cat}
              {/* {cat.category} */}
            </span>

            {/* //////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////// */}

            <span className="text-red-500 font-bold px-2 py-0.5 rounded">
              {/* ({cat.count}) */}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
