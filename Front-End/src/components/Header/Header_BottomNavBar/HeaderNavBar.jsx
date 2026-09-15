//============================================================
// Components NEW
//============================================================
import Logo from "./Logo";
import IconMenu from "./IconMenu";
import NavigationLink from "./NavigationLink";

export default function HeaderNavBar({
  isMobileMenuOpen,
  setIsMobileDrawerOpen,
}) {
  //==========================================================
  // Styles
  //==========================================================
  const headerNavBarClasses = {
    wrapper: "",

    container:
      "mx-auto max-w-full lg:px- px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-384",

    nav: "flex h-22 items-center justify-between font-medium text-slate-700",

    logoWrapper:
      "flex items-center whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1",

    logoLight: "w-60 brightness-55 saturate-400",

    logoDark: "w-60 brightness-130 saturate-1000",

    menuButton:
      "relative order-10 h-10 w-10 self-center cursor-pointer text-white lg:hidden",

    menuButtonActive:
      "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0",

    menuWrapper:
      "absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2",

    lineTopBlack:
      "absolute block h-0.5 w-9/12 -translate-y-2 rounded-full bg-black transition-all duration-300",

    lineTopWhite:
      "absolute block h-0.5 w-9/12 -translate-y-2 rounded-full bg-white transition-all duration-300",

    lineCenterBlack:
      "absolute block h-0.5 w-6 rounded-full bg-black transition duration-300",

    lineCenterWhite:
      "absolute block h-0.5 w-6 rounded-full bg-white transition duration-300",

    lineBottomBlack:
      "absolute block h-0.5 w-1/2 origin-top-left translate-y-2 rounded-full bg-black transition-all duration-300",

    lineBottomWhite:
      "absolute block h-0.5 w-1/2 origin-top-left translate-y-2 rounded-full bg-white transition-all duration-300",

    menu: "absolute left-0 top-0 z-0 h-240 w-full overflow-y-auto overscroll-contain px-8 pb-12 pt-24 text-white font-medium transition-[opacity,visibility] duration-300 md:h-200 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:gap-0 lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100",

    menuOpen: "visible opacity-100 lg:backdrop-blur-0 backdrop-blur-lg",

    menuOverlay:
      "visible opacity-100 bg-black/30 lg:backdrop-blur-0 backdrop-blur-lg",

    menuClose: "invisible opacity-100",

    mobileTop: "flex items-stretch md:hidden",

    mobileActions:
      "w-full flex items-center gap-2 py-4 transition-colors duration-1000 hover:text-(--primary-color) focus:text-(--primary-color) lg:px-8",

    mobileNav: "w-full font-bold",

    mobileRow: "flex items-center justify-between",

    langShadow: "shadow-lg shadow-black",

    darkMode:
      "rounded-full border-white/30 bg-white p-1.5 text-xl text-(--primary-color) shadow-lg shadow-black transition-colors duration-1000",

    authDark: "flex items-stretch text-black md:hidden",

    authLight: "flex items-stretch text-white md:hidden",

    authLink:
      "flex items-center gap-2 py-4 font-bold transition-colors duration-1000 hover:text-(--primary-color) focus:text-(--primary-color) lg:px-8 ",

    navItem: "my-6 flex items-stretch",

    desktopLinkLight:
      "relative group flex items-center capitalize gap-5 xl:px-5 lg:px-4 py-0 font-bold text-white text-shadow-lg text-shadow-black transition-colors duration-1000 hover:text-red-300 focus:text-orange-400 3",

    underline:
      "absolute bottom-0 left-0 h-0.5 w-0 bg-red-400 transition-all duration-1000 group-hover:w-full",
  };

  return (
    <header className={headerNavBarClasses.wrapper}>
      <div className={headerNavBarClasses.container}>
        <nav dir="ltr" className={headerNavBarClasses.nav}>
          {/* Logo */}
          <Logo />

          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}

          {/* Mobile Menu Button */}
          <IconMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileDrawerOpen={setIsMobileDrawerOpen}
          />

          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}

          {/* Navigation Links */}
          <NavigationLink isMobileMenuOpen={isMobileMenuOpen} />
        </nav>
      </div>
    </header>
  );
}
