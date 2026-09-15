//
import { motion } from "framer-motion";

//import React Icons
import {
  FaFacebookF,
  FaXTwitter,
  FaRedditAlien,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

export default function FollowUsWidget() {
  //
  const socials = [
    { icon: <FaFacebookF />, label: "Facebook", href: "#" },
    { icon: <FaXTwitter />, label: "X (Twitter)", href: "#" },
    { icon: <FaRedditAlien />, label: "Reddit", href: "#" },
    { icon: <FaWhatsapp />, label: "WhatsApp", href: "#" },
    { icon: <FaYoutube />, label: "YouTube", href: "#" },
  ];

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="text-(--primary-pera)">
      <h3 className="text-2xl font-bold border-b-2  border-(--primary-pera) text-(--primary-color) inline-block mb-4">
        Follow Us
      </h3>

      {/* //////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////// */}

      <div className="flex gap-2 flex-wrap">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-(--primary-pera) flex items-center 
                       justify-center  hover:border-(--primary-color) 
                       hover:text-(--primary-color) transition-colors"
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
