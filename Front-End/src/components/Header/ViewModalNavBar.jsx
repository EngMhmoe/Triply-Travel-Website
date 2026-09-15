/*====================================================================================================
Start Imports
====================================================================================================*/
//============================================================
// React
//============================================================
import { createPortal } from "react-dom";

//============================================================
// Motion
//============================================================
import { AnimatePresence, motion } from "framer-motion";

//============================================================
// React Router
//============================================================
import { Link } from "react-router-dom";

//============================================================
// React Icons
//============================================================
import { FiX } from "react-icons/fi";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Components
//============================================================
import SelectedLang from "../../UI/Header/SelectedLang";
import DarkModeUI from "../../UI/Header/DarkMode";
import LinksSocialMedia from "../../UI/Header/LinksSocialMedia";
import IsTokenTopNavBar from "./Header_TopNavBar/IsTokenTopNavBar";

//============================================================
// Data
//============================================================
import { HEADER_NAV_LINKS } from "../../Data/Header/headerNavigationLinks";

//============================================================
// Hooks
//============================================================
import useHeaderScroll from "../../Hooks/Header/useHeaderScroll";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../Store/useDarkModeStore";
/*====================================================================================================
End Imports
====================================================================================================*/

export default function ViewModalDetails({
  isMobileDrawerOpen,
  setIsMobileDrawerOpen,
}) {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t } = useTranslation();

  const { DarkMode: darkMode } = useDarkModeStore();

  const isHeaderFixed = useHeaderScroll();

  /*==================================================================================================
  Handlers
  ==================================================================================================*/

  const closeDrawer = () => setIsMobileDrawerOpen(false);

  /*==================================================================================================
  Styles
  ==================================================================================================*/

  const classes = {
    overlay:
      "lg:hidden fixed inset-0 z-[999999] flex items-center justify-center bg-black/75 p-4",

    modal: `absolute top-26 w-full max-w-xl rounded-4xl px-6 py-5 font-bold ${
      darkMode
        ? "bg-(--DarkMode-color) shadow shadow-red-900"
        : "bg-(--secondary-color) shadow-lg shadow-red-200"
    }`,

    logo: "text-4xl font-bold text-(--primary-color)",

    logoText: darkMode ? "text-white/80" : "text-(--primary-pera)",

    closeButton: `cursor-pointer group ms-auto bg-red-200 text-(--primary-color2) flex h-10 w-10 items-center justify-center rounded-xl text-2xl transition duration-1000 hover:bg-(--primary-color2) hover:text-white 
    }`,

    socialSection:
      "md:hidden flex cursor-pointer items-center gap-4 col-span-2 md:col-span-4 lg:col-span-6",

    socialButton: `cursor-pointer  rounded-full border border-black/5 p-1.5 text-xl transition-colors duration-1000 hover:bg-(--primary-color2) hover:text-white ${
      darkMode
        ? "bg-(--DarkMode-color) text-white hover:bg-transparent hover:text-white"
        : "bg-red-100 text-(--primary-color2)"
    }`,

    content: "space-y-4 font-semibold text-(--primary-pera)",

    topSection:
      "flex flex-wrap items-center justify-between gap-y-9 pt-3 sm:pt-0",

    mobileActions:
      "md:hidden flex items-center gap-9 font-bold text-(--DarkMode-color)",

    actionShadow: "rounded-full shadow-lg shadow-black/50",

    navList: `flex w-full flex-wrap items-center gap-x-15 capitalize sm:grid sm:grid-cols-3 ${
      darkMode ? "text-white" : "text-(--primary-pera)"
    }`,

    navItem: "my-6 flex items-stretch",

    navLink: isHeaderFixed
      ? "relative group flex items-center gap-2 py-0 font-bold transition-colors duration-1000 hover:text-(--primary-color) focus:text-(--primary-color) lg:px-5 lg:text-blue-950"
      : "relative group flex items-center gap-2 py-0 font-bold transition-colors duration-1000 hover:text-(--primary-color) focus:text-(--primary-color) lg:px-5 lg:text-white",

    underline:
      "absolute bottom-0 left-0 h-0.5 w-0 bg-(--primary-color2) transition-all duration-1000 group-hover:w-full",
  };

  return createPortal(
    <AnimatePresence>
      {isMobileDrawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
            {/*==========================================================================================
            Header
            ==========================================================================================*/}
            <div dir="ltr" className="mb-5 flex items-center justify-between">
              <section className="hidden md:flex">
                <motion.h1
                  initial={{ y: 70, scale: 5 }}
                  animate={{ y: 0, scale: 1 }}
                  exit={{ y: 50, scale: 0.7 }}
                  transition={{ duration: 0.9 }}
                  className={classes.logo}
                >
                  <span className="text-[55px] font-extrabold text-(--primary-color2)">
                    T
                  </span>
                  <span className={classes.logoText}>Rip</span>
                  <span className="text-green-600">e</span>
                  lo
                </motion.h1>
              </section>

              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <section onClick={closeDrawer} className={classes.socialSection}>
                <LinksSocialMedia
                  LinksSocialMedia_Styling={classes.socialButton}
                />
              </section>

              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <button onClick={closeDrawer} className={classes.closeButton}>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2 }}
                >
                  <FiX className="duration-1000 group-hover:rotate-360" />
                </motion.div>
              </button>
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/*==========================================================================================
            Content
            ==========================================================================================*/}

            <div className={classes.content}>
              <section className={classes.topSection}>
                <section className={classes.mobileActions}>
                  <div className={classes.actionShadow}>
                    <SelectedLang />
                  </div>

                  {/* ////////////////////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////////////////////// */}

                  <div className={classes.actionShadow} onClick={closeDrawer}>
                    <DarkModeUI />
                  </div>
                </section>

                {/* ////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////// */}

                <div className="md:hidden">
                  <IsTokenTopNavBar />
                </div>
              </section>

              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

              {/*==========================================================================================
              Navigation Links
              ==========================================================================================*/}

              <ul className={classes.navList}>
                {HEADER_NAV_LINKS.map((link) => (
                  <motion.li
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    key={link.id}
                    className={classes.navItem}
                  >
                    <Link
                      to={link.href}
                      onClick={closeDrawer}
                      className={classes.navLink}
                    >
                      <span>{t(link.name)}</span>

                      {/* ////////////////////////////////////////////////////////////// */}
                      {/* ////////////////////////////////////////////////////////////// */}

                      <span className={classes.underline}></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
