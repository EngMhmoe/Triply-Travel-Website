//import
import { motion } from "framer-motion";

export default function PopularTagsWidget({ allDataPopularTags, FilterTag }) {
  return (
    <div className="text-(--primary-pera)">
      <h3 className="text-2xl font-bold border-b-2  border-(--primary-pera) text-(--primary-color) inline-block mb-4">
        Popular Tags
      </h3>

      {/* //////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////// */}

      <div className="flex flex-wrap gap-2">
        {allDataPopularTags?.map((tag, i) => (
          <motion.span
            onClick={() => FilterTag(tag)}
            key={tag}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-1.5 border border-(--primary-pera) rounded-full text-sm 
                       justify-center  hover:border-(--primary-color) 
                       hover:text-(--primary-color) transition-colors"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
