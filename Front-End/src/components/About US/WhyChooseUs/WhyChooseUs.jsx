//import Components UI
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";

//import Components NEW
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

export default function WhyChooseUs() {
  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Wrapper: "overflow-hidden xl:m-0 mx-3",

    Container: "max-w-7xl mx-auto",

    Grid: "grid md:grid-cols-2 gap-x-15 gap-y-30 mt-20 items-center",
  };

  return (
    <section dir="lt" className={classes.Wrapper}>
      <div className={classes.Container}>
        {/* ===== Component Header_Title_MainTitle ===== */}
        <Header_Title_MainTitle
          title={"Why Choose Us".toLowerCase()}
          mainTitle1={"Travel Smarter With".toLowerCase()}
          mainTitle2={"Tripelo".toLowerCase()}
          M="auto"
          text="center"
        />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ===== Grid ===== */}
        <div className={classes.Grid}>
          {/* ===== Left Side ===== */}
          <FadeUpMotion>
            <SectionLeft />
          </FadeUpMotion>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* ===== Right Side ===== */}
          <FadeUpMotion>
            <SectionRight />
          </FadeUpMotion>
        </div>
      </div>
    </section>
  );
}
