//import Translation
import { useTranslation } from "react-i18next";

//import Components UI
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import Description from "../../../UI/Description";

//import Components
import FeatureItem from "./FeatureItem";
import GooglePlayBtn from "./GooglePlayBtn";
import AppStoreBtn from "./AppStoreBtn";

export default function AppContent() {
  //Translation
  const { i18n } = useTranslation();

  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Features: "mt-8 space-y-4",

    Buttons: "flex gap-6 mt-10 flex-wrap capitalize",
  };

  return (
    <section dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* ===== Component Header_Title_MainTitle ===== */}
      <Header_Title_MainTitle
        title={"download"}
        mainTitle1={"plan your journey anytime with our travel"}
        mainTitle2={"app download now"}
        mainTitle3={"& explore the world"}
        M="none"
        text="start"
      />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <section>
        <Description Des="Discover destinations, book trips, and manage your travel plans easily from your mobile device" />

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Features */}
        <div className={classes.Features}>
          {[
            "Easy booking & secure payment",
            "Real-time travel updates",
            "Exclusive app-only offers",
          ].map((item, index) => (
            <FeatureItem key={index} text={item} />
          ))}
        </div>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Buttons */}
        <div className={classes.Buttons}>
          <GooglePlayBtn />

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          <AppStoreBtn />
        </div>
      </section>
    </section>
  );
}
