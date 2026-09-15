export default function SectionRight() {
  const classes = {
    Wrapper:
      "RIGHT_IMAGES relative flex md:justify-end justify-center items-center",

    Plane:
      "lg:w-70 md:w-60 absolute lg:-top-7 lg:left-[38%] md:-top-10 md:left-[25%] w-55 top-0 left-[38%] translate-[-50%]",

    ImagesWrapper: "relative",

    MainImage:
      "WhyChooseUs_img1 lg:w-65 md:w-60 w-65 object-cover rounded-full absolute xl:right-57 md:right-50 top-10 right-57 border-8 border-white",

    SecondImage:
      "WhyChooseUs_img2 lg:w-73 md:w-70 w-73 md:ms-0 sm:ms-49 ms-48.5 object-cover rounded-full",
  };

  return (
    <div dir="ltr" className={classes.Wrapper}>
      {/* Decorative Plane */}
      <section className={classes.Plane}>
        <img src="/Images/Img About/About5.png" alt="" />
      </section>

      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}

      {/* Images */}
      <div className={classes.ImagesWrapper}>
        <img
          src="/Images/Img About/About3.jpg"
          alt="travel1"
          className={classes.MainImage}
        />

        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////// */}

        <img
          src="/Images/Img About/About4.jpg"
          alt="travel2"
          className={classes.SecondImage}
        />
      </div>
    </div>
  );
}
