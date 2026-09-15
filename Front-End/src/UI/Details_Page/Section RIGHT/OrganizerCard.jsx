import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OrganizerCard() {
  const COMPANY = {
    name: "Tripelo Travel",

    image:
      "/Images/ChatGPT_Image_Feb_9__2026__03_03_03_AM-removebg-preview.png",

    memberSince: 2026,

    description: "Travel Agency",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
bg-(--secondary-color)
p-6
rounded-4xl
shadow-lg
shadow-red-200
border-2
border-black/5
space-y-5
"
    >
      <h3 className="text-(--primary-color) text-2xl font-bold">
        Organized By
      </h3>

      <img
        src={COMPANY.image}
        alt={COMPANY.name}
        className="w-72 brightness-55 saturate-400 h-25 mx-auto object-cover"
      />

      <div className="flex flex-col items-center mt-4">
        <h4 className="font-bold text-xl">{COMPANY.name}</h4>

        <p className="mb-3 font-semibold">
          Member Since
          <span className="text-(--primary-color) font-bold text-lg">
            {" "}
            {COMPANY.memberSince}
          </span>
        </p>

        <Link
          to={"/Contact_page"}
          className="
bg-(--primary-color2)
text-white
px-6
py-2
rounded-2xl
cursor-pointer
hover:bg-transparent 
duration-1000
hover:text-black
font-bold
border
 border-(--primary-color)
"
        >
          Send Message
        </Link>
      </div>
    </motion.div>
  );
}
