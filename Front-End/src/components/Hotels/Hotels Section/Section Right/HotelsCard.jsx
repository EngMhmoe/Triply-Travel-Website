//import motion
import { motion } from "framer-motion";

//import React Icons
import { FaShoppingCart } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

//import react-router-dom
import { Link } from "react-router-dom";

//import server_URL Strapi
import { BASE_URL } from "../../../../services/APIs/server_URL";

export default function HotelsCard({
  Item,
  AddToCart,
  AddToWishlist,
  AddToDetailsPage,
  t,
}) {
  /*===========================================================================
  Start Styling App_Slider
  =============================================================================*/
  const CarSwiperSlidCard_Styling = {
    Styling1:
      "bg-white rounded-4xl rounded-bl-none  hover:-translate-y-1 transition-all duration-800 overflow-hidden group",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "relative overflow-hidden",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3:
      "w-full h-56 object-cover  transition duration-1000 group-hover:scale-110",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4:
      "absolute top-4 right-4 bg-linear-to-r from-red-500 to-(--primary-color) text-white text-xs font-bold px-3 py-1 rounded-full rounded-bl-none",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5:
      "absolute top-45 border-3 font-bold left-0  bg-(--primary-color2) text-lg text-[#ffffff] p-3 rounded-full rounded-bl-none  shadow cursor-pointer",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling6: "p-5 space-y-3",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling7:
      "mt-2 flex items-center gap-2 font-bold text-xl text-(--primary-pera) hover:text-(--primary-color2) mb-2 duration-500 group-hover:text-(--primary-color)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling8:
      "flex items-center sm:gap-2 gap-1 sm:text-md text-sm font-semibold text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling9:
      "flex items-center gap-1 text-md font-semibold text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling10: "text-(--primary-color) text-xl font-bold",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling11:
      "flex items-center gap-1 rounded-full rounded-bl-none bg-(--primary-color2) font-bold text-[#ffffff] w-fit py-[0.5px] px-2  text-sm",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling12: "text-(--primary-color)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling13: "flex items-center  justify-between pt-3",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling14: "flex items-center gap-1",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling16: "text-lg font-bold text-(--primary-color2)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling17: "text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling18:
      "flex items-center gap-1 text-(--primary-pera) cursor-pointer   hover:underline hover:text-(--primary-color) duration-500",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling19:
      "grid grid-cols-2 gap-4 mt-4 text-sm font-semibold text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling20: "flex Items-center gap-1",
  };

  /////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  return (
    <motion.div layout className="bg-white rounded-2xl shadow overflow-hidden">
      {/* Image */}
      <div className={CarSwiperSlidCard_Styling.Styling2}>
        <img
          src={`${BASE_URL}${Item.image.url}`}
          className={CarSwiperSlidCard_Styling.Styling3}
        />

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Badge */}
        {Item.badge && (
          <span className={CarSwiperSlidCard_Styling.Styling4}>
            {t(Item.badge.trim().toLowerCase())}
          </span>
        )}

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* WishList */}
        <span
          onClick={() => AddToWishlist(Item.documentId)}
          className={
            "absolute top-45 border-3 font-bold left-0  bg-(--primary-color) text-lg text-[#ffffff] p-3 rounded-full rounded-bl-none  shadow cursor-pointer"
          }
        >
          <MdFavorite />
        </span>

        {/* Cart */}
        <span
          onClick={() => AddToCart(Item.documentId)}
          className={
            "absolute top-45 border-3 font-bold right-0  bg-(--primary-color2) text-lg text-[#ffffff] p-3 rounded-full rounded-br-none  shadow cursor-pointer"
          }
        >
          <FaShoppingCart />
        </span>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Content */}
      <div className={CarSwiperSlidCard_Styling.Styling6}>
        <h3 className={CarSwiperSlidCard_Styling.Styling7}>
          {" "}
          {t(Item.title.trim().toLowerCase())}{" "}
        </h3>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Date */}
        <p
          className={
            "mt-2  flex Items-center gap-1 text-[15.5px] font-semibold text-(--primary-pera)"
          }
        >
          <FiMapPin className={"text-(--primary-color) text-xl font-bold"} />
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {t(Item.location.city.trim().toLowerCase())} ,{" "}
          {t(Item.location.country.trim().toLowerCase())}
        </p>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Rating */}
        <section
          className={
            "flex flex-wrap  Items-center gap-2 text-md font-semibold text-(--primary-pera) my-3"
          }
        >
          <div
            className={
              "flex Items-center gap-1 rounded-full rounded-bl-none bg-(--primary-color2) font-bold text-[#ffffff] w-fit py-[0.5px] px-2.5  text-sm"
            }
          >
            ☆ {Item.rating}
          </div>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          <h2 className={"text-(--primary-color) capitalize"}>
            {" "}
            {t(Item.tag.trim().toLowerCase())}
          </h2>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          <h2>
            {" "}
            ({Item.reviewsCount} {t("Reviews".toLowerCase())})
          </h2>
        </section>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Price + CTA */}
        <div className={CarSwiperSlidCard_Styling.Styling13}>
          <section className={CarSwiperSlidCard_Styling.Styling14}>
            <h2 className={CarSwiperSlidCard_Styling.Styling16}>
              ${Item.price}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              <spn className={CarSwiperSlidCard_Styling.Styling17}>
                /{t("Pre Night".trim().toLowerCase())}
              </spn>
            </h2>
          </section>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          {/* <button onClick={() => AddToDetailsPage(Item.id)}> */}
          <button
            onClick={() => AddToDetailsPage(Item.documentId)}
            className={CarSwiperSlidCard_Styling.Styling18}
          >
            <h1>{t("See Details".toLowerCase())}</h1>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

            <GoArrowRight />
          </button>
          {/* </button> */}
        </div>
      </div>
    </motion.div>
  );
}
