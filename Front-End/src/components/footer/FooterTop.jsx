//============================================================
// Data
//============================================================
import { PERSONAL_TOP_DATA } from "../../Data/Footer/personal_Top_Data";

//============================================================
// React Icons
//============================================================
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

//============================================================
// Hooks
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// FadeUpMotion
//============================================================
import FadeUpMotion from "../../UI/FreeMotions/FadeUpMotion";

export default function FooterTop() {
  /*==================================================================================================
    Hooks
    ==================================================================================================*/
  const { t } = useTranslation();

  /*==================================================================================================
  Classes
  ==================================================================================================*/
  const FOOTER_TOP_CLASSES = {
    logo: "text-4xl font-bold mb-5 text-(--primary-color)",

    description: "text-gray-200 mb-6 leading-relaxed",

    list: "space-y-4 text-white font-semibold",

    item: "flex items-center gap-3",

    icon: "text-(--primary-color2)",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section>
      <FadeUpMotion>
        <h1 className={FOOTER_TOP_CLASSES.logo}>
          <span className="text-[55px] font-extrabold text-(--primary-color2)">
            T
          </span>
          <span className="text-white">Trip</span>
          <span className="text-green-500">e</span>
          lo
        </h1>
      </FadeUpMotion>

      {/* /////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////// */}

      <FadeUpMotion>
        <p className={FOOTER_TOP_CLASSES.description}>
          {t(
            "explore the world with tripelo. discover the best tours, hotels, transports, and restaurants for unforgettable trips",
          )}
          .
        </p>
      </FadeUpMotion>

      {/* /////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////// */}

      <div className={FOOTER_TOP_CLASSES.list}>
        {PERSONAL_TOP_DATA.map((item) => (
          <FadeUpMotion>
            <div key={item.id} className={FOOTER_TOP_CLASSES.item}>
              {item.icon === "phone" ? (
                <FaPhoneAlt className={FOOTER_TOP_CLASSES.icon} />
              ) : item.icon === "mapMarker" ? (
                <FaMapMarkerAlt className={FOOTER_TOP_CLASSES.icon} />
              ) : (
                <FaEnvelope className={FOOTER_TOP_CLASSES.icon} />
              )}

              {/* /////////////////////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////////////////////// */}

              <span>{t(item.title)}</span>
            </div>
          </FadeUpMotion>
        ))}
      </div>
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
