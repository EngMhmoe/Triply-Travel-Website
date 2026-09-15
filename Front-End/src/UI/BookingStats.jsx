/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Hooks
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// React Icons
//============================================================
import { FaUsers, FaAward, FaGlobe, FaCheckCircle } from "react-icons/fa";

//============================================================
// ReactBits
//============================================================
import CountUp from "../ReactBits/CountUp";

//============================================================
// Data
//============================================================
import { stats } from "../Data/Home/stats";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function BookingStats({ position, rounded = "[0px]" }) {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t, i18n } = useTranslation();

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper: `BookingStats capitalize ${position} m-auto md:-bottom-18 -bottom-70  xl:w-[80%] sm:w-[90%] w-full rounded-${rounded} grid grid-cols-2 md:grid-cols-4 gap-y-10  justify-items-center items-center text-center py-12 bg-(--primary-color) ${i18n.language === "en" ? position === "absolute" && "rounded-tr-[100px]" : position === "absolute" && "rounded-tl-[100px]"}`,

    Card: "lg:flex lg:items-center lg:gap-4",

    IconWrapper: "bg-white p-3 mb-2 rounded-full w-fit m-auto",

    Number: "text-3xl font-bold text-white",

    Label: "text-white",

    Icon: "text-3xl text-(--primary-color)  mx-auto",
  };

  /*==================================================================================================
  Handlers
  ==================================================================================================*/
  const renderIcon = (label) => {
    switch (label) {
      case "Happy Clients":
        return <FaUsers className={classes.Icon} />;

      case "Years Experience":
        return <FaAward className={classes.Icon} />;

      case "Destinations":
        return <FaGlobe className={classes.Icon} />;

      case "Bookings Completed":
        return <FaCheckCircle className={classes.Icon} />;

      default:
        return null;
    }
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={classes.Wrapper}
    >
      {stats.map((item) => (
        <div key={item.id} className={classes.Card}>
          <section className={classes.IconWrapper}>
            {renderIcon(item.label)}
          </section>

          {/* /////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////// */}

          <section>
            <h2 className={classes.Number}>
              <CountUp
                from={0}
                to={item.number}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
                startWhen={true}
              />
              +
            </h2>

            {/* /////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////// */}

            <p className={classes.Label}>{t(item.label.toLowerCase())}</p>
          </section>
        </div>
      ))}
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
