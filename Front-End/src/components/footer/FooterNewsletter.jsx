/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// UI
//============================================================
import BtnSendMassage from "../../UI/BtnSendMassage";
import FadeUpMotion from "../../UI/FreeMotions/FadeUpMotion";

//============================================================
// Data
//============================================================
import { paymentMethods } from "../../Data/Footer/paymentMethods";

//============================================================
// Hooks
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// React Icons
//============================================================
import { TbLock } from "react-icons/tb";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function FooterNewsletter() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/
  const { t } = useTranslation();

  /*==================================================================================================
  Classes
  ==================================================================================================*/
  const NEWSLETTER_CLASSES = {
    title: "text-white font-bold text-lg mb-10 relative",

    titleLineLarge: "absolute left-0 -bottom-4 w-9 h-0.5 bg-(--primary-color)",

    titleLineSmall: "absolute left-11 -bottom-4 w-3 h-0.5 bg-(--primary-color)",

    description: "text-gray-200 mb-4",

    inputWrapper:
      "input validator w-full rounded-xl border-0 bg-white font-semibold text-(--primary-pera)",

    inputIcon: "h-[1em] opacity-50",

    validatorHint: "validator-hint hidden mb-1 font-semibold",

    secureWrapper: "mt-4 flex items-center gap-1 text-xs font-semibold",

    secureIcon: "text-xl text-(--primary-color2)",

    paymentWrapper: "mt-4 flex items-center gap-2",

    paymentTitle: "text-xs font-semibold",

    paymentImages: "flex items-center gap-2",

    paymentImage: "h-7 w-7",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section>
      <FadeUpMotion>
        <h3 className={NEWSLETTER_CLASSES.title}>
          {t("newsletter")}

          <span className={NEWSLETTER_CLASSES.titleLineLarge}></span>

          <span className={NEWSLETTER_CLASSES.titleLineSmall}></span>
        </h3>
      </FadeUpMotion>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <FadeUpMotion>
        <p className={NEWSLETTER_CLASSES.description}>
          {t("subscribe to get travel offers and latest updates")}.
        </p>
      </FadeUpMotion>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <form>
        <FadeUpMotion>
          <section>
            <label className={NEWSLETTER_CLASSES.inputWrapper}>
              <svg
                className={NEWSLETTER_CLASSES.inputIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />

                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </g>
              </svg>

              <input type="email" required placeholder={t("your email")} />
            </label>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className={NEWSLETTER_CLASSES.validatorHint}>
              {t("enter valid email address")}
            </div>
          </section>
        </FadeUpMotion>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <BtnSendMassage title="subscribe now" />
      </form>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div>
        <FadeUpMotion>
          <section className={NEWSLETTER_CLASSES.secureWrapper}>
            <TbLock className={NEWSLETTER_CLASSES.secureIcon} />

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <p>{t("your information is safe with us")}.</p>
          </section>
        </FadeUpMotion>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <FadeUpMotion>
          <section className={NEWSLETTER_CLASSES.paymentWrapper}>
            <h4 className={NEWSLETTER_CLASSES.paymentTitle}>
              {t("we accept")}:
            </h4>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className={NEWSLETTER_CLASSES.paymentImages}>
              {paymentMethods.map((method) => (
                <img
                  key={method}
                  src={`/Images/${method}.svg`}
                  alt={method}
                  className={NEWSLETTER_CLASSES.paymentImage}
                />
              ))}
            </div>
          </section>
        </FadeUpMotion>
      </div>
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
