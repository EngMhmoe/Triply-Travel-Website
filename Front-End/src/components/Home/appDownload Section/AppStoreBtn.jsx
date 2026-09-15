//import Translation
import { useTranslation } from "react-i18next";

//import React Icons
import { FaApple } from "react-icons/fa";

//import React Router
import { Link } from "react-router-dom";

export default function AppStoreBtn() {
  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Button:
      "flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:scale-105 transition duration-1000",

    Icon: "text-4xl text-(--primary-color2)",

    Content: "text-left",

    SmallText: "text-sm",

    MainText: "text-lg font-semibold",
  };

  //Translation
  const { t } = useTranslation();

  return (
    <Link to="/" className={classes.Button}>
      <FaApple className={classes.Icon} />

      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

      <div className={classes.Content}>
        <p className={classes.SmallText}>{t("download on the")}</p>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        <p className={classes.MainText}>{t("app store")}</p>
      </div>
    </Link>
  );
}
