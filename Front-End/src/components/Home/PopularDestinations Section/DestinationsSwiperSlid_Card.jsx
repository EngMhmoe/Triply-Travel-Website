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
import { FaMapMarkerAlt, FaCar, FaHotel, FaTicketAlt } from "react-icons/fa";

import { GoArrowRight } from "react-icons/go";

//============================================================
// APIs
//============================================================
import { BASE_URL } from "../../../services/APIs/server_URL";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function SwiperSlid_Card({ item }) {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { t } = useTranslation();

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper: "relative pb-16 group capitalize",

    ImageContainer: "overflow-hidden cursor-grab  rounded-full h-95",

    Image: "w-full h-full  group-hover:scale-115 transition duration-2000",

    Card: "absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-white w-[85%] rounded-3xl shadow-lg p-5 text-center transition duration-2000 group-hover:translate-y-[-0%]",

    Title: "font-bold text-2xl mb-2 text-(--primary-color)",

    Location: "text-s  text-(--primary-pera) mb-2",

    Rating:
      "flex justify-center items-center gap-2 mb-3 text-(--primary-color) text-sm",

    Reviews: "text-(--primary-pera) text-sm",

    Price:
      "flex items-center justify-center gap-1.5 text-(--primary-pera) font-bold text-lg mb-4",

    PriceValue: "text-(--primary-color)",

    ArrowButton:
      "hidden group-hover:flex items-center justify-center absolute top-[35%] left-[50%] translate-[-50%] z-10 w-11 h-11 hover:bg-(--primary-color) text-(--primary-color) rounded-full shadow-lg  cursor-pointer bg-white hover:text-white transition duration-1000 text-2xl font-bold",

    Services:
      "flex justify-between items-center text-xs text-(--primary-pera) border-t border-gray-(--primary-pera) pt-4",

    ServiceItem: "flex flex-col items-center gap-1",

    ServiceIcon: "text-(--primary-color) text-sm",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section>
      <div className={classes.Wrapper}>
        {/* ===== Image ===== */}
        <section className={classes.ImageContainer}>
          <img
            src={`${BASE_URL}${item.image.url}`}
            alt={item.city}
            className={classes.Image}
          />
        </section>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ===== View Button ===== */}
        <Link to="/Destinations_page" className={classes.ArrowButton}>
          <GoArrowRight />
        </Link>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ===== Card ===== */}
        <section className={classes.Card}>
          {/* Title */}
          <h4 className={classes.Title}>{t(item.title.toLowerCase())}</h4>

          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* Location */}
          <p className={classes.Location}>
            {t(item.location.city.toLowerCase())} _{" "}
            {t(item.location.country.toLowerCase())}
          </p>

          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* Rating */}
          <div className={classes.Rating}>
            ⭐ {item.rating}
            {/* //////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////// */}
            <span className={classes.Reviews}>
              ({item.reviewsCount} {t("reviews")})
            </span>
          </div>

          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* Price */}
          <div className={classes.Price}>
            <FaMapMarkerAlt />

            {/* //////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////// */}

            <h3 className={classes.PriceValue}>
              <span className={classes.PriceValue}>{t("start")} </span>$
              {item.price}
            </h3>
          </div>

          {/* //////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////// */}

          {/* Services */}
          <div className={classes.Services}>
            <section className={classes.ServiceItem}>
              <FaTicketAlt className={classes.ServiceIcon} />

              {/* //////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////// */}

              <span>
                {item.tours} {t("tours")}
              </span>
            </section>

            {/* //////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////// */}

            <section className={classes.ServiceItem}>
              <FaHotel className={classes.ServiceIcon} />

              {/* //////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////// */}

              <span>
                {item.hotels} {t("hotels")}
              </span>
            </section>

            {/* //////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////// */}

            <section className={classes.ServiceItem}>
              <FaCar className={classes.ServiceIcon} />

              {/* //////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////// */}

              <span>
                {item.transports} {t("transport")}
              </span>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
