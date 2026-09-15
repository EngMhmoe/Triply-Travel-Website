/*====================================================================================================*
 * Header Component
 *======================================================================================================*/

//============================================================
// Header Components
//============================================================
import "../../styles/header.css";

//============================================================
// Header Components
//============================================================
import TopNavBar from "./Header_TopNavBar/TopNavBar";
import HeaderNavBar from "./Header_BottomNavBar/HeaderNavBar";
import ViewModalDetails from "./ViewModalNavBar";

//============================================================
// Hooks
//============================================================
import useHeader from "../../Hooks/Header/useHeader";
import useHeaderScroll from "../../Hooks/Header/useHeaderScroll";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../Store/useDarkModeStore";

//============================================================
// UI / Animations Component
//============================================================
import FadeUpMotion from "../../UI/FreeMotions/FadeUpMotion";

export default function Header() {
  //==========================================================
  // Header State
  //==========================================================
  const { isMobileMenuOpen, isMobileDrawerOpen, setIsMobileDrawerOpen } =
    useHeader();

  //==========================================================
  // Header Scroll
  //==========================================================
  const isHeaderFixed = useHeaderScroll();

  //==========================================================
  // Dark Mode
  //==========================================================
  const { DarkMode: darkMode } = useDarkModeStore();

  //==========================================================
  // Header Style
  //==========================================================
  const headerClasses = {
    headerStyle: isHeaderFixed
      ? `fixed top-0 z-1000 w-full duration-500 shadow-xl ${
          darkMode
            ? "bg-(--DarkMode-color) shadow-red-300/60"
            : "bg-white shadow-orange-300/60"
        }`
      : "absolute z-90 w-full border-t-2 border-white/20 pt-6",

    mobileModalStyle: "flex lg:hidden",
  };

  return (
    <header>
      {/* Top Navbar*/}
      <TopNavBar />

      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////// */}

      {/* Main Navbar */}
      <section className={headerClasses.headerStyle}>
        <HeaderNavBar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileDrawerOpen={setIsMobileDrawerOpen}
        />
      </section>

      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////// */}

      {/* Mobile Navigation Drawer */}
      <section className={headerClasses.mobileModalStyle}>
        <ViewModalDetails
          isMobileDrawerOpen={isMobileDrawerOpen}
          setIsMobileDrawerOpen={setIsMobileDrawerOpen}
        />
      </section>
    </header>
  );
}
