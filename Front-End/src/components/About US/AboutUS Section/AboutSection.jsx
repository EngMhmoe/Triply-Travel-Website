/*====================================================================================================
* AboutSection
======================================================================================================*/

//============================================================
// Components
//============================================================
import AboutImages from "./AboutImages";
import AboutContent from "./AboutContent";

export default function AboutSection({ hidden = "" }) {
  //==========================================================
  // Styles
  //==========================================================
  const classes = {
    wrapper:
      "mx-auto grid max-w-7xl items-center gap-10 px-6 xl:gap-0 xl:px-0 md:grid-cols-2",
  };

  return (
    <section dir="ltr">
      <div className={classes.wrapper}>
        {/* About Images */}
        <AboutImages />

        {/* ///////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////// */}

        {/* About Content */}
        <AboutContent hidden={hidden} />
      </div>
    </section>
  );
}
