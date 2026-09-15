/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Components
//============================================================
import Description from "../../../UI/Description";

//============================================================
// UI Components
//============================================================
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import BtnLink from "../../../UI/BtnLink";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function LeftContent() {
  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper: "md:px-0 px-6",

    ButtonSection: "mt-5",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <div className={classes.Wrapper}>
      {/* ===== Header ===== */}
      <Header_Title_MainTitle
        title="discover tripelo"
        mainTitle1="explore the world with confidence and comfort"
        mainTitle2="your journey starts with us"
        M="none"
        text="start"
      />

      {/* //////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////// */}

      {/* ===== Description ===== */}
      <Description Des="at tripelo, we create unforgettable travel experiences tailored just for you. from booking flights and luxury hotels to curated tours and seamless transportation, we handle every detail so you can focus on enjoying the adventure. travel smarter, travel easier, travel with tripelo" />

      {/* //////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////// */}

      {/* ===== Button ===== */}
      <section className={classes.ButtonSection}>
        <BtnLink title="discover more" href="aboutUs_page" />
      </section>
    </div>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
