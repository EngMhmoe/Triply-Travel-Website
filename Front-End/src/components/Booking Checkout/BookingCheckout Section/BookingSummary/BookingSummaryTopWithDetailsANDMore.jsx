//import React Icon
import { CiLocationOn } from "react-icons/ci";

//import server_URL Strapi
import { BASE_URL } from "../../../../services/APIs/server_URL";

export default function BookingSummaryTOPWithDetailsANDMore({ item }) {
  return (
    <div className="flex flex-col gap-4 relative overflow-hidden">
      <img
        src={`${BASE_URL}${item?.image?.url}`}
        alt={item?.title}
        className="w-full h-60 rounded-[50px] rounded-bl-none object-cover"
      />

      {/* Badge */}
      {item.badge && (
        <span
          className={
            "absolute top-4 right-4 bg-linear-to-r from-red-500 to-(--primary-color) text-white text-xs font-bold px-3 py-1 rounded-full rounded-bl-none"
          }
        >
          {item.badge}
        </span>
      )}

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <div className="flex-1">
        <div className="flex items-center gap-2 text-lg font-bold text-(--primary-color)">
          <div className="text-(--primary-pera)">{item.icon}</div>
        </div>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <h3 className="font-bold text-[24px] text-(--primary-pera) text-shadow-lg text-shadow-black/15  mb-2">
          {item.title}
        </h3>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        {/* Date */}
        <p
          className={
            "flex items-center gap-1 text-md font-semibold text-(--primary-pera)"
          }
        >
          <CiLocationOn
            className={"text-(--primary-color) text-xl font-bold"}
          />
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {item.location.address + " _ " + item.location.city}
        </p>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        {/* Rating */}
        <section
          className={
            "flex items-center sm:gap-2 gap-1 sm:text-md text-sm font-semibold text-(--primary-pera) mt-5"
          }
        >
          <div
            className={
              "flex items-center gap-1 rounded-full rounded-bl-none bg-(--primary-color2) font-bold text-[#ffffff] w-fit py-[0.5px] px-2  text-sm"
            }
          >
            ☆ {item.rating}
          </div>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          <h2 className={"text-(--primary-color)"}>{item.tag}</h2>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          <h2>({item.reviewsCount} Reviews)</h2>
        </section>
      </div>
    </div>
  );
}
