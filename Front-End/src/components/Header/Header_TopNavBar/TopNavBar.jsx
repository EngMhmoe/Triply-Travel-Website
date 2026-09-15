/*====================================================================================================*
 * TopNavBar Component
 *======================================================================================================*/

//============================================================
// UI Components
//============================================================
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";
import DarkModeUI from "../../../UI/Header/DarkMode";
import LinksSocialMedia from "../../../UI/Header/LinksSocialMedia";
import SelectedLang from "../../../UI/Header/SelectedLang";

//============================================================
// Components NEW
//============================================================
import IsTokenTopNavBar from "./IsTokenTopNavBar";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../../Store/useDarkModeStore";

export default function TopNavBar() {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { DarkMode: darkMode } = useDarkModeStore();

  //==========================================================
  // Top NavBar Style
  //==========================================================
  const topNavBarClasses = {
    wrapper: "hidden md:flex stack w-full text-blue-50",

    container:
      "mx-auto grid w-full max-w-full grid-cols-4 items-center gap-6 px-6 py-4 text-sm md:grid-cols-8 lg:max-w-5xl lg:grid-cols-12 xl:max-w-7xl 2xl:max-w-384",

    socialSection:
      "col-span-2 flex items-center gap-4 cursor-pointer md:col-span-4 lg:col-span-6",

    actionsSection: "col-span-2 font-bold md:col-span-4 lg:col-span-6",

    actionsContainer: "flex items-center justify-end gap-3 lg:gap-7",

    divider: "h-7 w-[2px] bg-white/30",
  };

  //==========================================================
  // Social Media Styles
  //==========================================================
  const socialMediaClasses = `
    cursor-pointer
    rounded-full
    border
    border-white/30
    p-1.5
    text-xl
    transition-colors
    duration-1000
    ${
      !darkMode
        ? "bg-white text-(--primary-color) hover:bg-[red] hover:text-white"
        : "bg-(--DarkMode-color) text-white hover:bg-transparent hover:text-white"
    }
  `;

  return (
    <nav className={topNavBarClasses.wrapper}>
      <div className={topNavBarClasses.container}>
        {/* Social Media */}
        <section className={topNavBarClasses.socialSection}>
          <LinksSocialMedia LinksSocialMedia_Styling={socialMediaClasses} />
        </section>

        {/* ///////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////// */}

        {/* Header Actions */}
        <section className={topNavBarClasses.actionsSection}>
          <div className={topNavBarClasses.actionsContainer}>
            {/* Language */}
            <SelectedLang />

            {/* ++++++++++++++++++++++++++++++++++++++++++++ */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++ */}

            {/* Divider */}
            <div className={topNavBarClasses.divider} />

            {/* ++++++++++++++++++++++++++++++++++++++++++++ */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++ */}

            {/* Dark Mode */}
            <DarkModeUI />

            {/* ++++++++++++++++++++++++++++++++++++++++++++ */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++ */}

            {/* User Actions */}
            <IsTokenTopNavBar />
          </div>
        </section>
      </div>
    </nav>
  );
}
