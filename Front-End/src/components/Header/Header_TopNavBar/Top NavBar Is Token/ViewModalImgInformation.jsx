/*====================================================================================================
Start Imports
====================================================================================================*/
//============================================================
// React
//============================================================
import { useEffect } from "react";
import { createPortal } from "react-dom";

//============================================================
// React Router
//============================================================
import { Link, useNavigate } from "react-router-dom";

//============================================================
// React Icons
//============================================================
import { FaRegUser, FaHistory } from "react-icons/fa";
import { RiDashboard3Line } from "react-icons/ri";
import { IoBagCheckOutline, IoSettingsOutline } from "react-icons/io5";
import { FiLogOut, FiX } from "react-icons/fi";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../../../Store/useDarkModeStore";
import { useAuthStore } from "../../../../Store/useAuthStore";

//============================================================
// Data
//============================================================
import { PROFILE_LINKS } from "../../../../Data/Header/profileLinks";

//============================================================
// Motion
//============================================================
import { AnimatePresence, motion } from "framer-motion";
/*====================================================================================================
End Imports
====================================================================================================*/

export default function ViewModalImgInformation({
  ViewModalImgInformationValue,
  setViewModalImgInformationValue,
}) {
  //==========================================================
  // navigate
  //==========================================================
  const navigate = useNavigate();

  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Dark Mode
  //==========================================================
  const { DarkMode: darkMode } = useDarkModeStore();

  //==========================================================
  // Logout
  //==========================================================
  const { logout } = useAuthStore();

  //==========================================================
  // useEffect
  //==========================================================
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60.2) {
        setViewModalImgInformationValue(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setViewModalImgInformationValue]);

  //==========================================================
  // Handlers
  //==========================================================
  const closeModal = () => {
    setViewModalImgInformationValue(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  //==========================================================
  // Styles
  //==========================================================
  const classes = {
    overlay:
      "fixed inset-0 z-[999999] flex items-center justify-center p-4 font-bold md:bg-transparent bg-black capitalize",

    modal: `absolute md:top-21 md:right-10 md:translate-y-0 top-1/2 -translate-y-1/2
            w-full max-w-xl md:w-fit rounded-3xl p-6 shadow shadow-red-300
            ${
              darkMode
                ? "bg-(--DarkMode-color) text-white/90"
                : "bg-(--secondary-color) text-(--primary-pera)"
            }`,

    header: "mb-5 flex items-center justify-between",

    logo: "text-3xl font-bold text-(--primary-color)",

    closeButton:
      "group ms-auto h-10 w-10 rounded-xl text-2xl duration-1000 bg-red-200 text-(--primary-color2) hover:bg-(--primary-color2) hover:text-white",

    list: "flex flex-col gap-4 ",

    item: "group rounded-4xl py-2.5 px-4 duration-1000 hover:bg-(--primary-color) hover:text-white",

    link: "flex items-center gap-2.5 cursor-pointer",

    icon: "text-xl text-(--primary-color2) duration-700 group-hover:ml-2 group-hover:text-white",

    title: "text-xl",
  };

  //==========================================================
  // Logo Text Style
  //==========================================================
  const logoTextClass = darkMode ? "text-white/80" : "text-(--primary-pera)";

  return createPortal(
    <AnimatePresence>
      {ViewModalImgInformationValue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className={classes.overlay}
        >
          <motion.div
            initial={{ y: 150, scale: 0.7 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.9 }}
            transition={{ duration: 1.2 }}
            onClick={(e) => e.stopPropagation()}
            className={classes.modal}
          >
            {/* Header */}
            <div dir="ltr" className={classes.header}>
              <motion.h1
                initial={{ y: 70, scale: 5 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.7 }}
                transition={{ duration: 0.9 }}
                className={classes.logo}
              >
                <span className="text-[50px] font-extrabold text-(--primary-color2)">
                  T
                </span>
                <span className={logoTextClass}>Rip</span>
                <span className="text-green-600">e</span>
                lo
              </motion.h1>

              {/* ///////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////// */}

              <button onClick={closeModal} className={classes.closeButton}>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2 }}
                >
                  <FiX className="mx-auto duration-1000 group-hover:rotate-360 cursor-pointer" />
                </motion.div>
              </button>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* Links */}
            <ul className={classes.list}>
              {PROFILE_LINKS.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={closeModal}
                    className={classes.item}
                  >
                    <Link to={`/${item.href}`} className={classes.link}>
                      {item.name === "my profile" && (
                        <FaRegUser className={classes.icon} />
                      )}
                      {item.name === "my dashboard" && (
                        <RiDashboard3Line className={classes.icon} />
                      )}
                      {item.name === "my booking" && (
                        <IoBagCheckOutline className={classes.icon} />
                      )}
                      {item.name === "booking history" && (
                        <FaHistory className={classes.icon} />
                      )}
                      {item.name === "my settings" && (
                        <IoSettingsOutline className={classes.icon} />
                      )}

                      <h1 className={classes.title}>{t(item.name)}</h1>
                    </Link>
                  </li>
                );
              })}

              {/* ///////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////// */}

              {/* Logout */}
              <li className={classes.item}>
                <button onClick={handleLogout} className={classes.link}>
                  <FiLogOut className={classes.icon} />

                  <h1 className={classes.title}>{t("log out")}</h1>
                </button>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
