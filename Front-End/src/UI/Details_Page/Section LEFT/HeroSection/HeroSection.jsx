//import Components
import SwiperSlideImgs from "./SwiperSlideImgs";

//import React ICons
import { FiMapPin } from "react-icons/fi";

const HeroSection = ({ DataDetails }) => {
  return (
    <div className="flex flex-col gap-5">
      {/* SwiperSlideImgs */}
      <SwiperSlideImgs SwiperSlideImgs={DataDetails?.details?.gallery} />

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <div className="flex flex-wrap justify-between gap-y-5 dace-y-3">
        {/* Title & Location */}
        <div>
          {/* Title */}
          <h2 className="font-bold md:text-4xl text-3xl text-(--primary-pera)  text-shadow-lg text-shadow-black/19 mb-3">
            {DataDetails?.title}
          </h2>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          {/* location */}
          <div
            className={"flex items-center gap-1 text-lg text-(--primary-pera)"}
          >
            <FiMapPin className={"text-(--primary-color) text-2xl font-bold"} />
            {DataDetails?.location?.city} _
            {DataDetails?.location?.address || DataDetails?.location?.country}
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        {/* Rating */}
        <section
          className={
            "flex items-center justify-end ms-auto h-fit   gap-2  text-lg font-semibold text-(--primary-pera)"
          }
        >
          <div
            className={
              "flex items-center  gap-1 h-fit  rounded-full rounded-bl-none bg-(--primary-color) font-bold text-[#ffffff] w-fit py-0.5 px-3 text-md"
            }
          >
            ☆ {DataDetails?.rating}
          </div>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          <h2 className={"text-(--primary-color2)"}>{DataDetails?.tag}</h2>

          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

          <h2 className={""}>({DataDetails?.reviewsCount} Reviews)</h2>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
