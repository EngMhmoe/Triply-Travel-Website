/*====================================================================================================
* Hero Content
======================================================================================================*/

//============================================================
// UI
//============================================================
import TextType from "../../../ReactBits/TextType";
import BlurText from "../../../ReactBits/BlurText";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

export default function Data_HerSection() {
  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Styles
  //==========================================================
  const classes = {
    wrapper:
      "flex h-full w-full flex-col items-center justify-center text-center",

    title:
      "Title w-fit text-center font-bold text-shadow-md text-shadow-black/10 lg:text-7xl md:text-5xl text-5xl",

    description:
      "mt-5 md:max-w-[800px] sm:max-w-[600px] max-w-[550px] text-xl font-bold text-white text-shadow-lg text-shadow-[#0033b3] md:text-2xl lg:text-3xl",
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className={classes.wrapper}>
      {/* Hero Title */}
      <h1 className={classes.title}>
        <TextType
          text={t("explore the world together")}
          typingSpeed={200}
          deletingSpeed={100}
          pauseDuration={2500}
          variableSpeedEnabled
          variableSpeedMin={150}
          variableSpeedMax={300}
          showCursor
          cursorCharacter="_"
          cursorBlinkDuration={1}
        />
      </h1>

      {/* ///////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////// */}

      {/* Hero Description */}
      <div className="text-center">
        <BlurText
          text={t(
            "travel is a transformative and enriching experience the allows individuals to explore new destination, cultures, and landscapes",
          )}
          animateBy="words"
          delay={200}
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className={
            "mt-5 md:max-w-[800px] sm:max-w-[600px] max-w-[550px] text-xl font-bold text-white text-shadow-lg text-shadow-[#0033b3] md:text-2xl lg:text-3xl text-center"
          }
        />
      </div>
    </section>
  );
}
