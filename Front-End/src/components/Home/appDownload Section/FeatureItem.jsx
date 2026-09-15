//import Translation
import { useTranslation } from "react-i18next";

//import React Icons
import { FaCheck } from "react-icons/fa";

//import Components
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

export default function FeatureItem({ text }) {
  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Wrapper: "flex items-center gap-3 capitalize",

    IconWrapper:
      "w-7 h-7 bg-(--primary-color) text-white flex items-center justify-center rounded-full text-sm",

    Text: "text-lg font-semibold",
  };

  //Translation
  const { t } = useTranslation();

  return (
    <FadeUpMotion>
      <div className={classes.Wrapper}>
        <div className={classes.IconWrapper}>
          <FaCheck />
        </div>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        <p className={classes.Text}>{t(text.toLowerCase())}</p>
      </div>
    </FadeUpMotion>
  );
}
