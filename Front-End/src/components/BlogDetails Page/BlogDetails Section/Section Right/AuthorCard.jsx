//import React Icons
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

//import motion
import { motion } from "framer-motion";

export default function AuthorCard({ name, bio, socials }) {
  const getInitials = (name = "") =>
    name
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((word, index, arr) =>
        index === 0 || index === arr.length - 1 ? word[0] : "",
      )
      .join("")
      .toUpperCase();

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  const author = {
    name: name,
    bio: bio,
    avatar: "images/author.jpg",
    initials: getInitials(name),
    socials: [
      { icon: <FaFacebookF />, href: socials?.facebook, label: "Facebook" },
      { icon: <FaXTwitter />, href: socials?.twitter, label: "Twitter" },
      { icon: <FaInstagram />, href: socials?.instagram, label: "Instagram" },
      { icon: <FaWhatsapp />, href: socials?.whatsapp, label: "WhatsApp" },
    ],
  };

  return (
    <div
      className="flex gap-4 bg-(--secondary-color) 
                 rounded-3xl p-5 my-8"
    >
      {/* صورة الكاتب */}
      <div
        className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden bg-(--primary-color2) 
                      flex items-center justify-center text-white font-semibold text-xl"
      >
        <img
          src={author.avatar}
          alt={author.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}

        <span>{author.initials}</span>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* المعلومات */}
      <div className="flex-1 font-semibold">
        <p className="uppercase tracking-wide mb-0.5">Author</p>

        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}

        <h4 className="text-base text-(--primary-color) mb-1">{author.name}</h4>

        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}

        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          {author.bio}
        </p>

        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}

        {/* Social Icons */}
        <div className="flex gap-2">
          {author?.socials?.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center 
                         justify-center duration-1000 hover:text-(--primary-color) 
                         hover:border-(--primary-color) transition-colors"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
