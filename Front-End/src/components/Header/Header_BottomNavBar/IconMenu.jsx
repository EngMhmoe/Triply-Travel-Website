//============================================================
// Hooks
//============================================================
import useHeaderScroll from "../../../Hooks/Header/useHeaderScroll";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../../Store/useDarkModeStore";

export default function IconMenu({ isMobileMenuOpen, setIsMobileDrawerOpen }) {
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
  const IconMenuClasses = {
    menuButton:
      "relative order-10 h-10 w-10 self-center cursor-pointer text-white lg:hidden",

    menuButtonActive:
      "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0",

    menuWrapper:
      "absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2",

    lineTopWhite:
      "absolute block h-0.5 w-9/12 -translate-y-2 rounded-full bg-white transition-all duration-300",

    lineCenterWhite:
      "absolute block h-0.5 w-6 rounded-full bg-white transition duration-300",

    lineBottomWhite:
      "absolute block h-0.5 w-1/2 origin-top-left translate-y-2 rounded-full bg-white transition-all duration-300",
  };

  const lineColor = darkMode ? "bg-white" : "bg-(--DarkMode-color)";

  const classes = {
    button: `${IconMenuClasses.menuButton} ${
      isMobileMenuOpen ? IconMenuClasses.menuButtonActive : ""
    }`,

    topLine: isHeaderFixed
      ? `absolute block h-0.5 w-9/12 -translate-y-2 rounded-full transition-all duration-300 ${lineColor}`
      : IconMenuClasses.lineTopWhite,

    centerLine: isHeaderFixed
      ? `absolute block h-0.5 w-6 rounded-full transition duration-300 ${lineColor}`
      : IconMenuClasses.lineCenterWhite,

    bottomLine: isHeaderFixed
      ? `absolute block h-0.5 w-1/2 origin-top-left translate-y-2 rounded-full transition-all duration-300 ${lineColor}`
      : IconMenuClasses.lineBottomWhite,
  };

  return (
    <button
      onClick={() => setIsMobileDrawerOpen(true)}
      className={classes.button}
    >
      <div className={IconMenuClasses.menuWrapper}>
        <span aria-hidden="true" className={classes.topLine} />

        <span aria-hidden="true" className={classes.centerLine} />

        <span aria-hidden="true" className={classes.bottomLine} />
      </div>
    </button>
  );
}
