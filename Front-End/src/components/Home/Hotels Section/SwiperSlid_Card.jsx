/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// React Router
//============================================================
import { Link } from "react-router-dom";

//============================================================
// Icons
//============================================================
import { FaShoppingCart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

//============================================================
// Hooks
//============================================================
import { useShopActions } from "../../../Hooks/useShopActions";
import { useAddToDetailsPage } from "../../../Hooks/useAddToDetailsPage";

//============================================================
// Components
//============================================================
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

//============================================================
// APIs
//============================================================
import { BASE_URL } from "../../../services/APIs/server_URL";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function SwiperSlid_Card({ item, GetALLFilteredDataCards }) {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t, i18n } = useTranslation();

  const { AddToCart, AddToWishlist } = useShopActions(GetALLFilteredDataCards);

  const { AddToDetailsPage } = useAddToDetailsPage({
    data: GetALLFilteredDataCards,
    navigatePath: "Hotel",
  });

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper:
      "bg-white capitalize rounded-4xl rounded-bl-none  hover:-translate-y-1 transition-all duration-800 overflow-hidden group",

    ImageContainer: "relative overflow-hidden",

    Image:
      "w-full h-56 object-cover  transition duration-1000 group-hover:scale-110",

    Badge:
      "absolute top-4 right-4 bg-linear-to-r from-red-500 to-(--primary-color) text-white text-xs font-bold px-3 py-1 rounded-full rounded-bl-none",

    WishlistButton:
      "absolute top-45 border-3 font-bold left-0  bg-(--primary-color) text-lg text-[#ffffff] p-3 rounded-full rounded-bl-none  shadow cursor-pointer",

    CartButton:
      "absolute top-45 border-3 font-bold right-0  bg-(--primary-color2) text-lg text-[#ffffff] p-3 rounded-full rounded-br-none  shadow cursor-pointer",

    Content: "p-5 space-y-3",

    Title:
      "flex items-center gap-2 font-bold text-xl text-(--primary-pera) hover:text-(--primary-color2) mb-2 duration-500 group-hover:text-(--primary-color)",

    RatingSection:
      "flex items-center sm:gap-2 gap-1 sm:text-md text-sm font-semibold text-(--primary-pera)",

    Location:
      "flex items-center gap-1 text-md font-semibold text-(--primary-pera)",

    LocationIcon: "text-(--primary-color) text-xl font-bold",

    RatingBadge:
      "flex items-center gap-1 rounded-full rounded-bl-none bg-(--primary-color2) font-bold text-[#ffffff] w-fit py-[0.5px] px-2  text-sm",

    Tag: "text-(--primary-color) capitalize",

    PriceContainer: "flex items-center justify-between pt-3",

    Price: "flex items-center gap-1",

    PriceValue: "text-2xl font-bold text-(--primary-color2)",

    PriceText: "text-(--primary-pera) text-sm font-semibold",

    DetailsButton:
      "capitalize flex items-center gap-1 text-(--primary-pera) font-bold text-sm hover:text-(--primary-color2) duration-500 cursor-pointer hover:underline",

    Features:
      "grid grid-cols-2 gap-4 mt-4 text-sm font-semibold text-(--primary-pera)",

    Feature: "flex items-center gap-1",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <FadeUpMotion>
      <section
        dir={i18n.language === "ar" && "rtl"}
        className={classes.Wrapper}
      >
        {/* ===== Image ===== */}
        <div className={classes.ImageContainer}>
          <img
            src={`${BASE_URL}${item.image.url}`}
            alt={item.name}
            className={classes.Image}
          />

          {/* ===== Badge ===== */}
          {item.badge && (
            <span className={classes.Badge}>{t(item.badge.toLowerCase())}</span>
          )}

          {/* ===== Wishlist ===== */}
          <span
            onClick={() => AddToWishlist(item.documentId)}
            className={classes.WishlistButton}
          >
            <MdFavorite />
          </span>

          {/* ===== Cart ===== */}
          <span
            onClick={() => AddToCart(item.documentId)}
            className={classes.CartButton}
          >
            <FaShoppingCart />
          </span>
        </div>

        {/* ===== Content ===== */}
        <div className={classes.Content}>
          {" "}
          {/* ===== Title ===== */}
          <h3 className={classes.Title}>{t(item.title.toLowerCase())}</h3>
          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}
          {/* ===== Location ===== */}
          <p className={classes.Location}>
            <CiLocationOn className={classes.LocationIcon} />
            {t(item.location.city.toLowerCase())} _{" "}
            {t(item.location.country.toLowerCase())}
          </p>
          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}
          {/* ===== Rating ===== */}
          <section className={classes.RatingSection}>
            <div className={classes.RatingBadge}>☆ {item.rating}</div>

            {/* //////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////// */}

            <h2 className={classes.Tag}>{t(item.tag.toLowerCase())}</h2>

            {/* //////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////// */}

            <h2>
              ({item.reviewsCount} {t("reviews")})
            </h2>
          </section>
          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}
          {/* ===== Price & Details ===== */}
          <div className={classes.PriceContainer}>
            <section
              dir={i18n.language === "ar" && "ltr"}
              className={classes.Price}
            >
              <h2 className={classes.PriceValue}>${item.price}</h2>

              <span className={classes.PriceText}>/{t("pre night")}</span>
            </section>

            {/* //////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////// */}

            <button
              onClick={() => AddToDetailsPage(item.documentId)}
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
