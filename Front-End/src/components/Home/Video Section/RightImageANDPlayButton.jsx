/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Icons
//============================================================
import { FaPlay } from "react-icons/fa";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function RightImageANDPlayButton({ setOpen }) {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { i18n } = useTranslation();

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper: "relative h-full md:px-0 pl-6",

    Image: `${
      i18n.language === "en"
        ? "rounded-tl-full rounded-bl-full"
        : "rounded-tr-full rounded-br-full"
    } shadow-lg h-full w-full`,

    Overlay: "absolute inset-0 flex items-center justify-center",

    PlayContainer: "relative flex items-center justify-center",

    PulseOne:
      "absolute w-20 h-20 rounded-full bg-(--primary-color2) opacity-30",

    PulseTwo:
      "absolute w-28 h-28 rounded-full bg-(--primary-color2) opacity-20 animate-ping [animation-delay:0.5s]",

    PlayButton:
      "relative z-10 bg-(--primary-color2) cursor-pointer w-16 h-16 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition duration-1000",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <div className={classes.Wrapper}>
      {/* ===== Image ===== */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Travel"
        className={classes.Image}
      />

      {/* //////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////// */}

      {/* ===== Play Button ===== */}
      <div className={classes.Overlay}>
        <div className={classes.PlayContainer}>
          {/* Pulse 1 */}
          <span className={classes.PulseOne}></span>

          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* Pulse 2 */}
          <span className={classes.PulseTwo}></span>

          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* Play */}
          <button onClick={() => setOpen(true)} className={classes.PlayButton}>
            <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
