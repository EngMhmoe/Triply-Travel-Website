//============================================================
// React Router
//============================================================
import { Link } from "react-router-dom";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Components
//============================================================
import SelectedLang from "../../../UI/Header/SelectedLang";
import DarkModeUI from "../../../UI/Header/DarkMode";

//============================================================
// Hooks
//============================================================
import useHeaderScroll from "../../../Hooks/Header/useHeaderScroll";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../../Store/useDarkModeStore";

//============================================================
// Data
//============================================================
import { HEADER_NAV_LINKS } from "../../../Data/Header/headerNavigationLinks";
import { motion } from "framer-motion";

export default function NavigationLink({ isMobileMenuOpen }) {
  //==========================================================
  // Is Header Fixed
  //==========================================================
  const isHeaderFixed = useHeaderScroll();

  //==========================================================
  // Dark Mode
  //==========================================================
  const { DarkMode: darkMode } = useDarkModeStore();

  //==========================================================
  // Styles
  //==========================================================
  const { t, i18n } = useTranslation();

  //==========================================================
  // Styles
  //==========================================================
  const navigationLinkClasses = {
    menu: "absolute left-0 top-0 z-0 h-240 w-full overflow-y-auto overscroll-contain px-8 pb-12 pt-24 text-white font-medium transition-[opacity,visibility] duration-300 md:h-200 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:gap-0 lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100",

    menuOpen: "visible opacity-100 lg:backdrop-blur-0 backdrop-blur-lg",

    menuOverlay:
      "visible opacity-100 bg-black/30 lg:backdrop-blur-0 backdrop-blur-lg",

    menuClose: "invisible opacity-100",

    authDark: "flex items-stretch text-black md:hidden",

    authLight: "flex items-stretch text-white md:hidden",

    authLink:
      "flex items-center gap-2 py-4 font-bold transition-colors duration-1000 hover:text-(--primary-color) focus:text-(--primary-color) lg:px-8 ",

    navItem: "my-6 flex items-stretch",

    desktopLinkLight:
      "relative group flex items-center capitalize xl:px-5.5 lg:px-3.5 py-0 font-bold text-white text-shadow-lg text-shadow-black transition-colors duration-1000 hover:text-red-300 focus:text-orange-400 3",

    underline:
      "absolute bottom-0 left-0 h-0.5 w-0 bg-red-400 transition-all duration-1000 group-hover:w-full",
  };

  const classes = {
    menu: `
      ${navigationLinkClasses.menu}
      ${
        isMobileMenuOpen
          ? isHeaderFixed
            ? navigationLinkClasses.menuOpen
            : navigationLinkClasses.menuOverlay
          : navigationLinkClasses.menuClose
      }
    `,

    authItem: isHeaderFixed
      ? navigationLinkClasses.authDark
      : navigationLinkClasses.authLight,

    desktopLink: isHeaderFixed
      ? `relative group flex items-center gap-2 py-0 font-bold text-shadow-lg shadow-black
          transition-colors duration-1000
          hover:text-(--primary-color)
          focus:text-(--primary-color)
          focus:outline-none
          xl:px-5 px-3.5
          ${darkMode ? "text-white" : "lg:text-blue-950"}`
      : navigationLinkClasses.desktopLinkLight,
  };

  return (
    <ul className={classes.menu}>
      <section
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className="flex capitalize"
      >
        {HEADER_NAV_LINKS.map((link) => (
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            key={link.id}
            className={navigationLinkClasses.navItem}
          >
            <Link to={link.href} className={classes.desktopLink}>
              <span className="BTN">{t(link.name)}</span>

              {/* <span className={navigationLinkClasses.underline}></span> */}
            </Link>
          </motion.li>
        ))}
      </section>
    </ul>
  );
}
