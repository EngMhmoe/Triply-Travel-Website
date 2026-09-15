/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// React Icons
//============================================================
import { FiMapPin } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

//============================================================
// APIs
//============================================================
import { BASE_URL } from "../../../services/APIs/server_URL";
import { TOUR_POPULATE } from "../../../services/APIs/Independent Populates API/tour_Populate";
import { BuildAPI_HomeFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_HomeFilter";

//============================================================
// Hooks
//============================================================
import { useAddToDetailsPage } from "../../../Hooks/useAddToDetailsPage";
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function Offers_Card() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t, i18n } = useTranslation();

  const { GetALLFilteredDataCards } = useGetALLDataPagesAPIS({
    endpoint: "tours",
    populate: TOUR_POPULATE,
    customPageFilters: BuildAPI_HomeFilter,
    pageSize: 3,
  });

  const { AddToDetailsPage } = useAddToDetailsPage({
    data: GetALLFilteredDataCards,
    navigatePath: "Tour",
  });

  /*==================================================================================================
  Styles
  ==================================================================================================*/

  const styles = {
    Wrapper:
      "capitalize grid xl:grid-cols-3 lg:grid-cols-2 xl:gap-5 gap-x-5 gap-y-10 max-w-7xl mx-auto px-3 sm:justify-center mt-15",

    Card: "offer bg-white rounded-4xl shadow-md flex sm:flex-row gap-3 items-center hover:shadow-xl transition",

    Image: "img h-45 w-55 rounded-4xl rounded-tr-none rounded-br-none",

    Content: `Content flex flex-col justify-around items-start w-full h-full ${
      i18n.language === "ar" ? "pr-2" : ""
    }`,

    Title: "font-bold text-xl text-(--primary-pera)",

    Location:
      "my-2 flex items-center gap-1 text-[15.5px] font-semibold text-(--primary-pera)",

    LocationIcon: "text-(--primary-color) text-xl font-bold",

    Button:
      "group text-center flex items-center justify-center gap-2 bg-(--primary-color2) hover:bg-(--primary-pera) duration-800 text-white w-fit px-2 py-1.5 rounded-2xl transition text-lg",

    ButtonIcon:
      "bg-white text-(--primary-color) p-0.5 group-hover:text-(--primary-color2) rounded-full flex justify-center items-center",
  };

  /*==================================================================================================
  Return
  ==================================================================================================*/ return (
    <section className={styles.Wrapper}>
      {GetALLFilteredDataCards.map((offer) => (
        <article key={offer.documentId} className={styles.Card}>
          {/* ====================================================== */}
          {/* Image */}
          {/* ====================================================== */}

          <img
            src={`${BASE_URL}${offer.image.url}`}
            alt={offer.title}
            className={styles.Image}
          />

          {/* ====================================================== */}
          {/* Content */}
          {/* ====================================================== */}

          <div
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            className={styles.Content}
          >
            {/* ================= Title ================= */}

            <h3 className={styles.Title}>{t(offer.title.toLowerCase())}</h3>

            {/* ================= Location ================= */}

            <p className={styles.Location}>
              <FiMapPin className={styles.LocationIcon} />
              {t(offer.location.city.toLowerCase())} _{" "}
              {t(offer.location.address.toLowerCase())}
            </p>

            {/* ================= Button ================= */}

            <button
              onClick={() => AddToDetailsPage(offer.documentId)}
              className={styles.Button}
            >
              {t("view details")}

              <span className={styles.ButtonIcon}>
                <GoArrowRight />
              </span>
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
