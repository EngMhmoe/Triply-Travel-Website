/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// UI
//============================================================
import FadeUpMotion from "../../UI/FreeMotions/FadeUpMotion";
import LinksSocialMedia from "../../UI/Header/LinksSocialMedia";

//============================================================
// Hooks
//============================================================
import { useTranslation } from "react-i18next";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function FooterBottom() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t, i18n } = useTranslation();

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const FOOTER_BOTTOM_CLASSES = {
    wrapper:
      "mt-20 flex flex-col items-center justify-center gap-y-7 border-t border-dashed border-gray-600 pt-6 px-6 text-center font-semibold text-white sm:flex-row sm:justify-between md:px-40",

    brand: "text-(--primary-color)",

    socialWrapper: "flex justify-center gap-5 text-lg",

    socialButton:
      "flex h-7.5 w-7.5 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-500 transition duration-1000 hover:bg-(--primary-color2) hover:text-white",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section className={FOOTER_BOTTOM_CLASSES.wrapper}>
      <FadeUpMotion>
        {i18n.language === "en" ? (
          <p>
            © 2026 <span className={FOOTER_BOTTOM_CLASSES.brand}>Tripelo</span>{" "}
            All Rights Reserved
          </p>
        ) : (
          <p>{t("© 2026 tripelo all rights reserved")}</p>
        )}
      </FadeUpMotion>

      {/* //////////////////////////////////////////////////////////////////////////////////////// */}

      <div className={FOOTER_BOTTOM_CLASSES.socialWrapper}>
        <LinksSocialMedia
          LinksSocialMedia_Styling={FOOTER_BOTTOM_CLASSES.socialButton}
        />
      </div>
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
