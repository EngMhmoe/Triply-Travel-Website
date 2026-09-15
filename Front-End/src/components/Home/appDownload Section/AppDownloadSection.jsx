//import Components
import AppImage from "./AppImage";
import AppContent from "./AppContent";

export default function AppDownloadSection() {
  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Wrapper:
      "max-w-7xl mx-auto px-3 flex md:flex-nowrap flex-wrap-reverse gap-16 items-center overflow-hidden",
  };

  return (
    <section dir="ltr" className={classes.Wrapper}>
      <AppImage />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <AppContent />
    </section>
  );
}
