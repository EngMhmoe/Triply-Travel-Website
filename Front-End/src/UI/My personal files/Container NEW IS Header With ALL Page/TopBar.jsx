//import Component UI
import Title from "../Title";

//import react-icons/md
import { MdMenu, MdNotifications } from "react-icons/md";

//import framer-motion
import { motion } from "framer-motion";

//IMPORT Link
import { Link } from "react-router-dom";

//import getInitialsUserName
import getInitialsUserName from "../../../services/APIs/getInitialsUserName";

export default function TopBar({ mainText = "", userData = {} }) {
  const x = getInitialsUserName(userData.username);

  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 10, y: 0 }}
      transition={{ duration: 1.2 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left: Menu + Title */}
      <Title mainText={mainText} userData={userData} />

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Right: Notification + Avatar */}
      <div
        to={"/DashBoard_Page"}
        style={{ display: "flex", alignItems: "center", gap: 10 }}
      >
        <motion.section
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center items-center rounded-full bg-(--primary-pera) cursor-pointer text-white"
          style={{
            width: 40,
            height: 40,
          }}
        >
          <Link to={"/MyDashBoard_Page"}>
            <MdNotifications style={{ fontSize: 23 }} />
            {/*  */}
            <span
              style={{
                position: "absolute",
                top: 6,
                right: 7,
                width: 9,
                height: 9,
                background: "red",
                borderRadius: "50%",
                border: "1.5px solid #fff",
              }}
            />
          </Link>
        </motion.section>

        {/*  */}

        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ff6200, #ff6200, red)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
          className="uppercase"
        >
          {x}
        </motion.div>
      </div>
    </motion.div>
  );
}
