/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// ReactBits
//============================================================
import CountUp from "../../../ReactBits/CountUp";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function AboutImages() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t } = useTranslation();

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper:
      "AboutImages relative flex items-center  xl:w-135 lg:w-125 md:w-full w-160 md:m-0 m-auto",

    DecorativeCircle:
      "Decorative absolute w-85 h-105 lg:w-[320px] lg:h-100 md:w-75 md:h-85 left-[50%] translate-x-[-50%] lg:-top-50 md:-top-40 top-[50%]  font-bold border-2 border-(--primary-color) rounded-full",

    DecorativeCircleInner:
      "absolute w-82.5 h-102.5 lg:w-77.5 lg:h-97.5 md:w-72.5 md:h-85  m-1 border-2 border-(--primary-color) rounded-full",

    FirstImage:
      "img1 absolute md:left-0 md:-bottom-40 left-0 -bottom-110  xl:w-65 lg:w-60 md:w-53 w-75  rounded-full overflow-hidden",

    Image: "w-full h-full object-cover",

    SecondImage:
      "img2 absolute md:right-0 md:-bottom-55 right-0 -bottom-125  xl:w-65 lg:w-60 md:w-53 w-75  rounded-full overflow-hidden",

    ExperienceBadge:
      "Experience absolute left-[50%] md:top-[50%] translate-[-50%] top-60  border-7 border-white  bg-(--primary-color) font-bold text-white rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-2xl z-2",

    ExperienceNumber: "text-3xl font-bold ",

    ExperienceText: "text-sm text-center leading-tight capitalize",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section className={classes.Wrapper}>
      <div className={classes.DecorativeCircle}>
        <div className={classes.DecorativeCircleInner}></div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////// */}

      <div className={classes.FirstImage}>
        <img
          src="/public/Images/Img About/About1.jpg"
          alt="travel"
          className={classes.Image}
        />
      </div>

      {/* ////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////// */}

      <div className={classes.SecondImage}>
        <img
          src="/public/Images/Img About/About2.jpg"
          alt="travel"
          className={classes.Image}
        />
      </div>

      {/* ////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////// */}

      <div className={classes.ExperienceBadge}>
        <span className={classes.ExperienceNumber}>
          <CountUp
            from={0}
            to={30}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text"
            startWhen={true}
          />
          +
        </span>

        {/* ////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////// */}

        <span className={classes.ExperienceText}>
          {t("years of experience")}
        </span>
      </div>
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
