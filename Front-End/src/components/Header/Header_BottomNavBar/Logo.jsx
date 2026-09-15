//============================================================
// Import Hooks
//============================================================
import useHeaderScroll from "../../../Hooks/Header/useHeaderScroll";
import { useDarkModeStore } from "../../../Store/useDarkModeStore";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

export default function Logo() {
  // Header Scroll
  const isHeaderFixed = useHeaderScroll();

  //==========================================================
  // Dark Mode
  //==========================================================
  const { DarkMode: darkMode } = useDarkModeStore();

  //==========================================================
  // Styles
  //==========================================================
  const LogoClasses = {
    logoWrapper:
      "flex items-center whitespace-nowrap focus:outline-none lg:flex-1",

    logoLight: "w-65 brightness-55 saturate-400",

    logoDark: "w-65 brightness-100 saturate-1000",
  };

  return (
    <div className={LogoClasses.logoWrapper}>
      <FadeUpMotion>
        {/* Logo */}
        <img
          src={
            "Images/ChatGPT_Image_Feb_9__2026__03_03_03_AM-removebg-preview.png"
          }
          className={
            isHeaderFixed
              ? darkMode === false
                ? LogoClasses.logoLight
                : LogoClasses.logoDark
              : LogoClasses.logoDark
          }
        />
      </FadeUpMotion>
    </div>
  );
}
