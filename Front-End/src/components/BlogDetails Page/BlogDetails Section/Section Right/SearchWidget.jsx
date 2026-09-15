//import React
import { useState } from "react";

//import React icon
import { FaClock, FaSearch } from "react-icons/fa";

//import motion
import { motion } from "framer-motion";

//import server_URL Strapi
import { BASE_URL } from "../../../../services/APIs/server_URL";

//import useAddToDetailsPage
import { useAddToDetailsPage } from "../../../../Hooks/useAddToDetailsPage";

export default function SearchWidget({
  GetALLFilteredDataCards,
  FilterSearchTopBar,
}) {
  //Step 6 ==> AddToDetailsPage ==> OK
  const { AddToDetailsPage } = useAddToDetailsPage({
    data: GetALLFilteredDataCards,
    navigatePath: "Blog",
  });

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  const [search, setSearch] = useState("");

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h3 className="text-2xl font-bold border-b-2 border-(--primary-pera) text-(--primary-color) inline-block mb-4">
        Search
      </h3>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
        <input
          value={search}
          id="search"
          onChange={(e) => {
            setSearch(e.target.value);
            FilterSearchTopBar(e.target.value);
          }}
          type="search"
          placeholder="Search Here..."
          className="flex-1 px-4 py-2.5 text-sm outline-none bg-white"
        />

        {/* //////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////// */}

        <button className="px-4 cursor-pointer py-2.5 text-(--primary-color2) transition-colors">
          <FaSearch />
        </button>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <section
        className={
          search.length >= 2 &&
          GetALLFilteredDataCards.length &&
          "space-y-10 py-5 bg-(--secondary-color) px-3 rounded-4xl h-150 overflow-y-scroll"
        }
      >
        {search.length >= 2 &&
          GetALLFilteredDataCards?.map((blog, i) => (
            <motion.div
              key={blog?.documentId}
              onClick={() => AddToDetailsPage(blog?.documentId)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-3 cursor-pointer group hover:ml-5 duration-1200"
            >
              {/* الـ Thumbnail */}
              <div
                className="w-20 h-20 rounded-4xl rounded-bl-none flex-shrink-0 overflow-hidden"
                style={{ backgroundColor: blog?.bgFallback }}
              >
                <img
                  src={`${BASE_URL}${blog?.image?.url}`}
                  alt={blog?.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // لو الصورة مش موجودة، اخفيها وظهر لون الـ fallback
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* //////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////// */}

              {/* المعلومات */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium  leading-snug line-clamp-2">
                  {blog?.title}
                </p>

                {/* //////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////// */}

                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <FaClock size={13} className="text-(--primary-color2)" />
                  {blog?.date}
                </p>
              </div>
            </motion.div>
          ))}
      </section>
    </div>
  );
}
