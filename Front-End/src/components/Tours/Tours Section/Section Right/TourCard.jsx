//import motion
import { motion } from "framer-motion";

//import React Icons
import { FiMapPin, FiClock } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import {
  FaUmbrellaBeach,
  FaGlobeAmericas,
  FaShoppingCart,
} from "react-icons/fa";

//import react-router-dom
import { Link } from "react-router-dom";

//import server_URL Strapi
import { BASE_URL } from "../../../../services/APIs/server_URL";

export default function ItemCard({
  Item,
  AddToCart,
  AddToWishlist,
  AddToDetailsPage,
  //
  t,
}) {
  /*===========================================================================
  Start Styling ItemCard
  =============================================================================*/
  const ItemCard_Styling = {
    Styling1: "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-8 ",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2:
      "bg-white rounded-4xl rounded-bl-none  overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-800 group",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "relative overflow-hidden ",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4: "h-56 w-full transition duration-1000 group-hover:scale-110",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5:
      "absolute top-4 right-4 bg-linear-to-r from-red-500 to-(--primary-color) text-white text-xs font-bold px-3 py-1 rounded-full rounded-bl-none",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling6:
      "absolute top-45 border-3 font-bold left-0  bg-(--primary-color) text-lg text-[#ffffff] p-3 rounded-full rounded-bl-none  shadow cursor-pointer",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling7: "p-5",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling8: "flex justify-between",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling9:
      "mt-2 flex items-center gap-2 font-bold text-xl text-(--primary-pera) hover:text-(--primary-color2) mb-2 duration-500 group-hover:text-(--primary-color)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling10:
      "mt-2  flex items-center gap-1 text-[15.5px]  text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling11: "text-(--primary-color) text-xl font-bold",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling12: "flex flex-wrap  items-center gap-2 text-md font-semibold  my-3",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling13:
      "flex items-center gap-1 rounded-full rounded-bl-none bg-(--primary-color2) font-bold text-[#ffffff] w-fit py-[0.5px] px-2.5 text-sm",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling14: "text-(--primary-color) capitalize",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling15: "sm:ms-0 ms-auto text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling16: "flex items-center gap-1 text-xl text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling17: "text-(--primary-color) text-xl font-bold",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling18: "flex items-center justify-between pt-3 ",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling19: "flex items-center  gap-1",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling20: "text-2xl font-bold  text-(--primary-color2)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling21:
      "flex items-center gap-1 text-(--primary-pera) cursor-pointer   hover:underline hover:text-(--primary-color) duration-500",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling22: "text-(--primary-pera) text-xl font-bold",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling23:
      "absolute top-45 border-3 font-bold  right-0  bg-(--primary-color2) text-lg text-[#ffffff] p-3 rounded-full rounded-br-none  shadow cursor-pointer",

    Styling24:
      "absolute top-45 border-3 font-bold right-0  bg-(--primary-color) text-lg text-[#ffffff] p-3 rounded-full rounded-br-none  shadow cursor-pointer",
  };

  /////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  return (
    <motion.div layout className="bg-white rounded-2xl shadow overflow-hidden">
      {/* Image */}
      <div className={ItemCard_Styling.Styling3}>
        {/* <img src={`${Item.image.url}`} className={ItemCard_Styling.Styling4} /> */}
        <img
          // src={`http://localhost:1337${Item.image.url}`}
          src={`${BASE_URL}${Item.image.url}`}
          className={ItemCard_Styling.Styling4}
        />

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Badge */}
        {Item.badge && (
          <span className={ItemCard_Styling.Styling5}>
            {t(Item.badge.trim().toLowerCase())}
          </span>
        )}

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* WishList */}
        <span
          onClick={() => AddToWishlist(Item.documentId)}
          className={ItemCard_Styling.Styling6}
        >
          <MdFavorite />
        </span>

        {/* Cart */}
        <span
          onClick={() => AddToCart(Item.documentId)}
          className={ItemCard_Styling.Styling23}
        >
          <FaShoppingCart />
        </span>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Content */}
      <div className={ItemCard_Styling.Styling7}>
        <div className={ItemCard_Styling.Styling8}>
          <div className={ItemCard_Styling.Styling10}>
            <FaUmbrellaBeach className={ItemCard_Styling.Styling11} />

            <span>{t(Item.category.trim().toLowerCase())}</span>
          </div>

          <div className={ItemCard_Styling.Styling10}>
            <FaGlobeAmericas className={ItemCard_Styling.Styling11} />

            <span>
              {Item.places} {t("Places".toLowerCase())}
            </span>
          </div>
        </div>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        <h3 className={ItemCard_Styling.Styling9}>
          {t(Item.title.trim().toLowerCase())}{" "}
        </h3>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Date */}
        <div className={ItemCard_Styling.Styling10}>
          <FiMapPin className={ItemCard_Styling.Styling11} />
          {/*  */}
          {t(Item.location.city.trim().toLowerCase())} ,{" "}
          {t(Item.location.country.trim().toLowerCase())}
        </div>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Rating */}
        <section className={ItemCard_Styling.Styling12}>
          <div className={ItemCard_Styling.Styling13}>☆ {Item.rating}</div>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          <h2 className={ItemCard_Styling.Styling14}>
            {t(Item.tag.trim().toLowerCase())}
          </h2>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          <h2 className={ItemCard_Styling.Styling15}>
            ({Item.reviewsCount} {t("Reviews".toLowerCase())})
          </h2>
        </section>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        <div className={ItemCard_Styling.Styling16}>
          <FiClock className={ItemCard_Styling.Styling17} />
          {/*  */}
          {t(Item.durationLabel.trim().toLowerCase())}
        </div>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        {/* Price + CTA */}
        <section className="">
          <div className={ItemCard_Styling.Styling18}>
            <section className={ItemCard_Styling.Styling19}>
              <h1 className={ItemCard_Styling.Styling22}>
                {t("Start".toLowerCase())}
              </h1>
              <h2 className={ItemCard_Styling.Styling20}>${Item.price}</h2>
            </section>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

            <button
              onClick={() => AddToDetailsPage(Item.documentId)}
              className={ItemCard_Styling.Styling21}
            >
              <h1>{t("See Details".toLowerCase())}</h1>

              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

              <GoArrowRight />
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
