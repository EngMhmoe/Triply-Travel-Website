//import React icon
import { FaClock } from "react-icons/fa";

//import motion
import { motion } from "framer-motion";

//import
import { BASE_URL } from "../../../../services/APIs/server_URL";

//import useAddToDetailsPage
import { useAddToDetailsPage } from "../../../../Hooks/useAddToDetailsPage";

export default function RecentPostWidget({ aLLDataRecentPosts }) {
  //Step 6 ==> AddToDetailsPage ==> OK
  const { AddToDetailsPage } = useAddToDetailsPage({
    data: aLLDataRecentPosts,
    navigatePath: "Blog",
  });

  return (
    <div className="text-(--primary-pera)">
      <h3 className="text-2xl font-bold border-b-2  border-(--primary-pera) text-(--primary-color) inline-block mb-4">
        Recent Post
      </h3>

      {/* //////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////// */}

      <div className="space-y-5">
        {aLLDataRecentPosts?.map((post, i) => (
          <motion.div
            key={post?.documentId}
            onClick={() => AddToDetailsPage(post?.documentId)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-3 cursor-pointer group"
          >
            {/* الـ Thumbnail */}
            <div
              className="w-20 h-20 rounded-4xl rounded-bl-none flex-shrink-0 overflow-hidden"
              style={{ backgroundColor: post.bgFallback }}
            >
              <img
                src={`${BASE_URL}${post?.image?.url}`}
                alt={post?.title}
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
                {post.title}
              </p>

              {/* //////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////// */}

              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <FaClock size={13} className="text-(--primary-color2)" />
                {post.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
