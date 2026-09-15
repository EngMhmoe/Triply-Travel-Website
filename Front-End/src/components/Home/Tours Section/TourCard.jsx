/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Framer Motion
//============================================================
import { motion, AnimatePresence } from "framer-motion";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// React Icons
//============================================================
import {
  FaUmbrellaBeach,
  FaGlobeAmericas,
  FaShoppingCart,
} from "react-icons/fa";

import { FiMapPin, FiClock } from "react-icons/fi";

import { GoArrowRight } from "react-icons/go";

import { MdFavorite } from "react-icons/md";

//============================================================
// Hooks
//============================================================
import { useShopActions } from "../../../Hooks/useShopActions";
import { useAddToDetailsPage } from "../../../Hooks/useAddToDetailsPage";

//============================================================
// Components ‘÷
//============================================================
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

//============================================================
// APIs
//============================================================
import { BASE_URL } from "../../../services/APIs/server_URL";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function TourCard({ GetALLFilteredDataCards }) {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t } = useTranslation();

  /////////////////////////////////////////////////////////////////

  const { AddToCart, AddToWishlist } = useShopActions(GetALLFilteredDataCards);

  /////////////////////////////////////////////////////////////////

  const { AddToDetailsPage } = useAddToDetailsPage({
    data: GetALLFilteredDataCards,
    navigatePath: "Tour",
  });

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper:
      "capitalize grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-15",

    Card: "bg-white rounded-4xl rounded-bl-none overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-800 group",

    ImageWrapper: "relative overflow-hidden",

    Image: "h-56 w-full transition duration-1000 group-hover:scale-110",

    Badge:
      "absolute top-4 right-4 bg-linear-to-r from-red-500 to-(--primary-color) text-white text-xs font-bold px-3 py-1 rounded-full rounded-bl-none",

    WishlistButton:
      "absolute top-45 left-0 border-3 font-bold bg-(--primary-color) text-lg text-white p-3 rounded-full rounded-bl-none shadow cursor-pointer",

    CartButton:
      "absolute top-45 right-0 border-3 font-bold bg-(--primary-color2) text-lg text-white p-3 rounded-full rounded-br-none shadow cursor-pointer",

    Content: "p-5",

    TopInfo: "flex justify-between text-sm font-semibold text-(--primary-pera)",

    InfoItem:
      "mt-2 flex items-center gap-1 text-md font-semibold text-(--primary-pera)",

    InfoIcon: "text-(--primary-color) text-xl font-bold",

    Title:
      "mt-2 flex items-center gap-2 font-bold text-xl text-(--primary-pera) hover:text-(--primary-color2) mb-2 duration-500 group-hover:text-(--primary-color)",

    Rating:
      "flex flex-wrap items-center xl:gap-1 gap-2 text-md font-semibold text-(--primary-pera) my-3",

    RatingBadge:
      "flex items-center gap-1 rounded-full rounded-bl-none bg-(--primary-color2) font-bold text-white w-fit py-[0.5px] px-2.5 text-sm",

    RatingText: "text-(--primary-color)",

    Reviews: "sm:ms-0",

    Duration: "flex items-center gap-1 text-md text-(--primary-pera)",

    PriceRow: "flex items-center justify-between pt-3",

    Price: "flex items-center gap-1",

    PriceLabel: "text-(--primary-pera) text-xl font-bold",

    PriceValue: "text-2xl font-bold text-(--primary-color2)",

    DetailsButton:
      "capitalize flex items-center gap-1 text-(--primary-pera) font-bold text-sm hover:text-(--primary-color) duration-500",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <motion.div layout className={classes.Wrapper}>
      <AnimatePresence>
        {" "}
        {GetALLFilteredDataCards?.map((tour) => (
          <FadeUpMotion key={tour.documentId}>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={classes.Card}
            >
              {/* ===== Image ===== */}
              <div className={classes.ImageWrapper}>
                <img
                  src={`${BASE_URL}${tour.image.url}`}
                  alt={tour.title}
                  className={classes.Image}
                />

                {/* //////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////// */}

                {tour.badge && (
                  <span className={classes.Badge}>
                    {t(tour.badge.toLowerCase())}
                  </span>
                )}

                {/* //////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////// */}

                <button
                  onClick={() => AddToWishlist(tour.documentId)}
                  className={classes.WishlistButton}
                >
                  <MdFavorite />
                </button>

                {/* //////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////// */}

                <button
                  onClick={() => AddToCart(tour.documentId)}
                  className={classes.CartButton}
                >
                  <FaShoppingCart />
                </button>
              </div>

              {/* ======================================================== */}
              {/* ======================================================== */}

              <div className={classes.Content}>
                {/* Top Info */}
                <section className={classes.TopInfo}>
                  <div className={classes.InfoItem}>
                    <FaUmbrellaBeach className={classes.InfoIcon} />
                    <span>{t(tour.category.toLowerCase())}</span>
                  </div>

                  <div className={classes.InfoItem}>
                    <FaGlobeAmericas className={classes.InfoIcon} />
                    <span>
                      {tour.places} {t("places")}
                    </span>
                  </div>
                </section>

                {/* //////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////// */}

                <h3 className={classes.Title}>{t(tour.title.toLowerCase())}</h3>

                {/* //////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////// */}

                <div className={classes.InfoItem}>
                  <FiMapPin className={classes.InfoIcon} />
                  <span>
                    {t(tour.location.city.toLowerCase())},{" "}
                    {t(tour.location.country.toLowerCase())}
                  </span>
                </div>

                {/* //////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////// */}

                <section className={classes.Rating}>
                  <span className={classes.RatingBadge}>☆ {tour.rating}</span>

                  <span className={classes.RatingText}>
                    {t(tour.tag.trim().toLowerCase())}
                  </span>

                  <span className={classes.Reviews}>
                    ({tour.reviewsCount} {t("reviews")})
                  </span>
                </section>

                {/* //////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////// */}

                <div className={classes.Duration}>
                  <FiClock className={classes.InfoIcon} />
                  <span>{t(tour.durationLabel.toLowerCase())}</span>
                </div>

                {/* //////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////// */}

                <section className={classes.PriceRow}>
                  <div className={classes.Price}>
                    <span className={classes.PriceLabel}>{t("start")}</span>

                    {/* //////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////// */}

                    <h2 className={classes.PriceValue}>${tour.price}</h2>
                  </div>

                  {/* //////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////////////////////////////// */}

                  <button
                    onClick={() => AddToDetailsPage(tour.documentId)}
                    className={classes.DetailsButton}
                  >
                    <span>{t("see details")}</span>
                    <GoArrowRight />
                  </button>
                </section>
              </div>
            </motion.div>
          </FadeUpMotion>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
