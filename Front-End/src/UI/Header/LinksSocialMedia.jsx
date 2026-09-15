/*====================================================================================================*
 * LinksSocialMedia Component
 *======================================================================================================*/

//============================================================
// Data
//============================================================
import { SOCIAL_MEDIA_LINKS } from "../../Data/Header/socialMediaLinks";

//============================================================
// React Icons
//============================================================
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

//============================================================
// UI / Animations
//============================================================
import { motion } from "framer-motion";

export default function LinksSocialMedia({
  LinksSocialMedia_Styling: socialMediaClassName = "",
}) {
  return (
    <>
      {SOCIAL_MEDIA_LINKS.map(({ id, href }) => (
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 2 }}
          transition={{ duration: 1 }}
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`shadow shadow-white ${socialMediaClassName}`}
        >
          {id === "facebook" && <FaFacebookF />}

          {/* ///////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////// */}

          {id === "instagram" && <AiFillInstagram className="text-[23px]" />}

          {/* ///////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////// */}

          {id === "linkedin" && <FaLinkedin />}

          {/* ///////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////// */}

          {id === "twitter" && <FaTwitter />}
        </motion.a>
      ))}
    </>
  );
}
