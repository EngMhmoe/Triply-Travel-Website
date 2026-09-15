//import Components UI
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import CustomArrows from "../../../UI/App Slider/CustomArrows";
import CustomPagination from "../../../UI/App Slider/CustomPagination";

//import Components NEW
import TestimonialSlider from "./TestimonialSlider";

export default function TestimonialsSection() {
  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Wrapper:
      "relative py-10 px-6 bg-cover bg-top bg-fixed xl:h-160 lg:h-200 sm:h-160 h-200",

    Overlay: "absolute inset-0 bg-black/60",

    Watermark:
      "Watermark absolute lg:-bottom-15  md:-bottom-5 bottom-0 left-[50%] translate-x-[-50%] lg:text-[215px] md:text-[160px] sm:text-[120px] text-[100px] font-bold text-transparent tracking-widest text-stroke",

    Container: "relative z-10 max-w-7xl mx-auto",

    Slider: "mt-16",
  };

  return (
    <section
      className={classes.Wrapper}
      style={{
        backgroundImage: "url('/Images/Img About/About9.png')",
        backgroundPosition: "fixed",
      }}
    >
      {/* Overlay */}
      <div className={classes.Overlay}></div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Watermark */}
      <h1 className={classes.Watermark}>TRIPELO</h1>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className={classes.Container}>
        {/* ===== Component Header_Title_MainTitle ===== */}
        <Header_Title_MainTitle
          condition="Testimonial"
          title={"TESTIMONIALS".toLowerCase()}
          mainTitle1={"What Travelers Say About Their".toLowerCase()}
          mainTitle2={"Journey".toLowerCase()}
          mainTitle3={"With Us".toLowerCase()}
          M="auto"
          text="center"
        />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ===== Component TestimonialSlider ===== */}
        <section dir="ltr" className={classes.Slider}>
          <TestimonialSlider />
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ===== Component CustomArrows ===== */}
        <CustomArrows />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ===== Component CustomPagination ===== */}
        <CustomPagination customValue={4} />
      </div>
    </section>
  );
}
