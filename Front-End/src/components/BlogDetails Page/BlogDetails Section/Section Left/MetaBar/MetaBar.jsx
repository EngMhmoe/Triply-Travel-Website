//import Component NEW
import { useEffect, useState } from "react";
import Meta from "./Meta";

//import React ICons
import { FaUser, FaComment, FaThumbsUp } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

export default function MetaBar({ BlogDataDetails }) {
  const style = "text-(--primary-color2)";

  const [reviews, setReviews] = useState([]);

  const totalLikes = reviews.reduce((sum, rev) => {
    return sum + (rev.likes || 0);
  }, 0);

  useEffect(() => {
    const saved = localStorage.getItem(`tour_reviews_${BlogDataDetails?.id}`);

    try {
      setReviews(saved ? JSON.parse(saved) : []);
    } catch {
      setReviews([]);
    }
  }, [BlogDataDetails?.id]);

  const MetaBar = [
    { title: BlogDataDetails?.author, icon: <FaUser className={style} /> },
    {
      title: `${BlogDataDetails?.readTime} min read`,
      icon: <IoTime className={style} />,
    },

    {
      title: `${reviews?.length} Comments`,
      icon: <FaComment className={style} />,
    },
    {
      title: `${totalLikes} Likes`,
      icon: <FaThumbsUp className={style} />,
    },
  ];

  return <Meta MetaBar={MetaBar} style={style} />;
}
