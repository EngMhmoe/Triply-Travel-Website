/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Components UI
//============================================================
import BtnLink from "../../../UI/BtnLink";
import Description from "../../../UI/Description";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function DiscountBannerSection() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t } = useTranslation();

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper: "max-w-7xl mx-auto px-3 capitalize",

    ImageWrapper: "relative",

    ImageContainer: "rounded-full overflow-hidden",

    Image: "w-full h-105 object-cover",

    Overlay:
      "absolute -top-20 left-1/2 -translate-x-1/2 flex items-center justify-center w-full",

    Card: "bg-white/30 backdrop-blur-2xl rounded-tr-[120px] rounded-bl-[120px] border border-black/5 shadow-xl shadow-black/50 xl:max-w-xl md:max-w-2xl text-center p-10",

    Title: "text-3xl font-bold text-orange-400",

    ButtonWrapper: "flex justify-center md:mt-10 mt-5",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <FadeUpMotion>
      <section>
        <div className={classes.Wrapper}>
          <div className={classes.ImageWrapper}>
            {/* ====================================================== */}
            {/* Background Image */}
            {/* ====================================================== */}

            <div className={classes.ImageContainer}>
              <img
                src="/Images/Img About/About15.jpg"
                alt="travel"
                className={classes.Image}
              />
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////// */}

            {/* ====================================================== */}
            {/* Overlay Card */}
            {/* ====================================================== */}

            <div className={classes.Overlay}>
              <div className={classes.Card}>
                {/* Title */}
                <FadeUpMotion>
                  <h2 className={classes.Title}>
                    {t("special offer for first travelers")}
                  </h2>
                </FadeUpMotion>

                {/* //////////////////////////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////////////////////////// */}

                {/* Description */}
                <Description Des="Enjoy exclusive discounts on your first booking with us. Discover amazing destinations and create unforgettable memories." />

                {/* //////////////////////////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////////////////////////// */}

                {/* Button */}
                <section className={classes.ButtonWrapper}>
                  <BtnLink title="book now" href="Contact_page" />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeUpMotion>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
