//import React icons
import { FaMapMarkerAlt, FaCar, FaHotel, FaTicketAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

//import react-router-dom
import { Link } from "react-router-dom";

//import server_URL Strapi
import { BASE_URL } from "../../../services/APIs/server_URL";

export default function DestinationsCard({ item, AddToDetailsPage, t }) {
  /*===========================================================================
  Start Styling SwiperSlide
  =============================================================================*/
  const SwiperSlide_Styling = {
    Styling1: "relative pb-16 group",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "overflow-hidden cursor-grab  rounded-full h-95",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "w-full h-full  group-hover:scale-115 transition duration-2000",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4:
      "absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-white w-[85%] rounded-3xl shadow-lg p-5 text-center transition duration-2000 group-hover:translate-y-[-0%]",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5: "font-semibold text-3xl mb-2 text-(--primary-color)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling6: "text-sm text-(--primary-pera) mb-2",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling7:
      "flex justify-center items-center gap-2 mb-3 text-(--primary-color) text-md text-s",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling8: "text-(--primary-pera) text-sm",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling9:
      "flex items-center justify-center gap-1.5 text-(--primary-pera) font-bold text-lg mb-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling10: "text-(--primary-color)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling11:
      "hidden group-hover:flex items-center justify-center absolute top-[35%] left-[50%] translate-[-50%] z-10 w-11 h-11 hover:bg-(--primary-color) text-(--primary-color) rounded-full shadow-lg  cursor-pointer bg-white hover:text-white transition duration-1000 text-2xl font-bold",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling12:
      "flex justify-between items-center text-xs text-(--primary-pera) border-t border-gray-(--primary-pera) pt-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling13: "flex flex-col items-center gap-1",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling14: "text-(--primary-color) text-sm",
  };

  return (
    <section>
      <div className={SwiperSlide_Styling.Styling1}>
        {/* Image */}
        <section className={SwiperSlide_Styling.Styling2}>
          <img
            src={`${BASE_URL}${item.image.url}`}
            alt={item.city}
            className={SwiperSlide_Styling.Styling3}
          />
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Link View TourDetails_page */}
        <button
          // to={"/TourDetails_page"}
          onClick={() => AddToDetailsPage(item.documentId)}
          className={SwiperSlide_Styling.Styling11}
        >
          <GoArrowRight />
        </button>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Content */}
        <section className={SwiperSlide_Styling.Styling4}>
          {/* Address */}
          <h4 className={SwiperSlide_Styling.Styling5}>
            {" "}
            {t(item.title.toLowerCase())}
          </h4>
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* location */}
          <div
            className={
              "mt-4 mb-2  flex items-center justify-center gap-1 text-md font-semibold text-(--primary-pera)"
            }
          >
            {t(item.location.city.toLowerCase())} _{" "}
            {t(item.location.country.toLowerCase())}
          </div>
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          {/* rating */}
          <div
            className={
              "flex justify-center items-center gap-2 mb-3 text-(--primary-color) text-md font-semibold"
            }
          >
            ⭐ {item.rating}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            <span className={"text-(--primary-pera) text-sm"}>
              ({item.reviewsCount} {t("reviews".toLowerCase())})
            </span>
          </div>
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* price */}
          <p className={SwiperSlide_Styling.Styling9}>
            <FiMapPin className={"text-(--primary-pera) text-xl font-bold"} />

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

            <h1 className={SwiperSlide_Styling.Styling10}>
              <span className={SwiperSlide_Styling.Styling10}>
                {" "}
                {t("start".toLowerCase())}{" "}
              </span>
              ${/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {item.price}
            </h1>
          </p>
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* الخدمات المتاحة */}
          <div className={SwiperSlide_Styling.Styling12}>
            <section className={SwiperSlide_Styling.Styling13}>
              <FaTicketAlt className={SwiperSlide_Styling.Styling14} />
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

              <span className="font-bold">
                {item.tours} {t("tours".toLowerCase())}
              </span>
            </section>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

            <section className={SwiperSlide_Styling.Styling13}>
              <FaHotel className={SwiperSlide_Styling.Styling14} />
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

              <span className="font-bold">
                {item.hotels} {t("Hotels".toLowerCase())}
              </span>
            </section>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

            <section className={SwiperSlide_Styling.Styling13}>
              <FaCar className={SwiperSlide_Styling.Styling14} />
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

              <span className="font-bold">
                {item.transports} {t("Transport".toLowerCase())}
              </span>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}
