//import Translation
import { useTranslation } from "react-i18next";

//import React Icons
import { FaShieldAlt, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

//import Data
import { WhyChooseUsFeatures } from "../../../Data/Home/whyChooseUsFeatures";
import Description from "../../../UI/Description";

export default function SectionLeft() {
  //Translation
  const { t, i18n } = useTranslation();

  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Wrapper: "space-y-18 capitalize",

    Item: "relative",

    Number: `absolute -top-9 text-4xl font-bold text-gray-200 ${
      i18n.language === "ar" ? "right-2" : "left-2"
    }`,

    Card: "relative flex gap-3 z-10 w-full px-5 py-7 bg-white rounded-r-full rounded-tl-full shadow-lg border border-black/7",

    Icon: "bg-(--primary-color) h-fit rounded-full p-2.5 text-white text-3xl",

    Content: "flex flex-col gap-1",

    Title: "text-(--primary-pera) font-extrabold sm:text-2xl text-xl",

    Description:
      "text-(--primary-pera) font-semibold  text-[15px] sm:max-w-md max-w-sm",
  };

  return (
    <section className={classes.Wrapper}>
      {WhyChooseUsFeatures.map((item) => (
        <div key={item.id} className={classes.Item}>
          <span className={classes.Number}>0{item.id}</span>

          {/* //////////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////////// */}

          <div className={classes.Card}>
            <div className={classes.Icon}>
              {item.title === "Secure & Instant Booking" ? (
                <FaShieldAlt />
              ) : item.title === "No Hidden Fees — Ever" ? (
                <FaMoneyBillWave />
              ) : item.title === "Travel Support That Never Sleeps" ? (
                <FaHeadset />
              ) : null}
            </div>

            {/* //////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////// */}

            <section className={classes.Content}>
              <h4 className={classes.Title}>{t(item.title.toLowerCase())}</h4>

              {/* //////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////// */}

              <p className={classes.Description}>
                {t(item.description.toLowerCase())}
              </p>
            </section>
          </div>
        </div>
      ))}
    </section>
  );
}
