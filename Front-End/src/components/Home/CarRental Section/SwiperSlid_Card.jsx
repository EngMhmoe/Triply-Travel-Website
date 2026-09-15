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
import {
  FaUserFriends,
  FaCar,
  FaGasPump,
  FaCogs,
  FaShoppingCart,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

//============================================================
// Hooks
//============================================================
import { useShopActions } from "../../../Hooks/useShopActions";
import { useAddToDetailsPage } from "../../../Hooks/useAddToDetailsPage";

//============================================================
// APIs
//============================================================
import { BASE_URL } from "../../../services/APIs/server_URL";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function SwiperSlid_Card({ car, GetALLFilteredDataCards }) {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t, i18n } = useTranslation();

  const { AddToCart, AddToWishlist } = useShopActions(GetALLFilteredDataCards);

  const { AddToDetailsPage } = useAddToDetailsPage({
    data: GetALLFilteredDataCards,
    navigatePath: "Transport",
  });

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper:
      "capitalize bg-white rounded-4xl rounded-bl-none hover:-translate-y-1 transition-all duration-800 overflow-hidden group",

    ImageWrapper: "relative overflow-hidden",

    Image:
      "w-full h-56 object-cover transition duration-1000 group-hover:scale-110",

    Badge:
      "absolute top-4 right-4 bg-linear-to-r from-red-500 to-(--primary-color) text-white text-xs font-bold px-3 py-1 rounded-full rounded-bl-none",

    WishlistButton:
      "absolute top-45 left-0 border-3 bg-(--primary-color) text-white text-lg p-3 rounded-full rounded-bl-none shadow cursor-pointer",

    CartButton:
      "absolute top-45 right-0 border-3 bg-(--primary-color2) text-white text-lg p-3 rounded-full rounded-br-none shadow cursor-pointer",

    Content: "p-5 space-y-3",

    Title:
      "flex items-center gap-2 font-bold text-xl text-(--primary-pera) group-hover:text-(--primary-color) transition duration-500",

    Location:
      "flex items-center gap-1 text-md font-semibold text-(--primary-pera)",

    LocationIcon: "text-(--primary-color) text-xl font-bold",

    RatingWrapper:
      "flex items-center sm:gap-2 gap-1 sm:text-md text-sm font-semibold text-(--primary-pera)",

    Rating:
      "flex items-center gap-1 bg-(--primary-color2) text-white rounded-full rounded-bl-none py-[0.5px] px-2 text-sm font-bold",

    Tag: "text-(--primary-color) capitalize",

    Specs:
      "grid grid-cols-2 gap-4 mt-4 text-sm font-semibold text-(--primary-pera)",

    SpecItem: "flex items-center gap-1",

    SpecIcon: "text-(--primary-color)",

    Footer: "flex items-center justify-between pt-3",

    Price: "flex items-center gap-1",

    PriceValue: "text-2xl font-bold text-(--primary-color2)",

    PriceLabel: "text-(--primary-pera) text-sm font-semibold",

    DetailsButton:
      "capitalize flex items-center gap-1 text-(--primary-pera) font-bold text-sm hover:text-(--primary-color2) hover:underline transition duration-500 cursor-pointer",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <FadeUpMotion>
      <section
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className={classes.Wrapper}
      >
        {/* ====================================================== */}
        {/* Image */}
        {/* ====================================================== */}

        <div className={classes.ImageWrapper}>
          <img
            src={`${BASE_URL}${car.image.url}`}
            alt={car.title}
            className={classes.Image}
          />

          {/* Badge */}
          {car.badge && (
            <span className={classes.Badge}>{t(car.badge.toLowerCase())}</span>
          )}

          {/* Wishlist */}
          <span
            onClick={() => AddToWishlist(car.documentId)}
            className={classes.WishlistButton}
          >
            <MdFavorite />
          </span>

          {/* Cart */}
          <span
            onClick={() => AddToCart(car.documentId)}
            className={classes.CartButton}
          >
            <FaShoppingCart />
          </span>
        </div>

        {/* ====================================================== */}
        {/* Content */}
        {/* ====================================================== */}

        <div className={classes.Content}>
          {/* Title */}
          <h3 className={classes.Title}>{t(car.title.toLowerCase())}</h3>

          {/* Location */}
          <p className={classes.Location}>
            <CiLocationOn className={classes.LocationIcon} />
            {t(car.location.city.toLowerCase())} /{" "}
            {t(car.location.country.toLowerCase())}
          </p>

          {/* Rating */}
          <section className={classes.RatingWrapper}>
            <div className={classes.Rating}>☆ {car.rating}</div>

            <h2 className={classes.Tag}>{t(car.tag.toLowerCase())}</h2>

            <h2>
              ({car.reviewsCount} {t("reviews")})
            </h2>
          </section>

          {/* Specs */}
          <div className={classes.Specs}>
            <section className={classes.SpecItem}>
              <FaCar className={classes.SpecIcon} />
              {t("model")}: {car.model}
            </section>

            <section className={classes.SpecItem}>
              <FaUserFriends className={classes.SpecIcon} />
              {car.seats} {t("people")}
            </section>

            <section className={classes.SpecItem}>
              <FaGasPump className={classes.SpecIcon} />
              {t(car.fuel.toLowerCase())}
            </section>

            <section className={classes.SpecItem}>
              <FaCogs className={classes.SpecIcon} />
              {t(car.transmission.toLowerCase())}
            </section>
          </div>

          {/* Footer */}
          <div className={classes.Footer}>
            <section
              dir={i18n.language === "ar" ? "ltr" : "ltr"}
              className={classes.Price}
            >
              <h2 className={classes.PriceValue}>${car.price}</h2>

              <span className={classes.PriceLabel}>/{t("pre night")}</span>
            </section>

            <button
              onClick={() => AddToDetailsPage(car.documentId)}
              className={classes.DetailsButton}
            >
              <span>{t("see details")}</span>

              <GoArrowRight />
            </button>
          </div>
        </div>
      </section>
    </FadeUpMotion>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
