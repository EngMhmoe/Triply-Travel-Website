//import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import Component UI
import CustomArrows from "../../../App Slider/CustomArrows";

//import services
import { BASE_URL } from "../../../../services/APIs/server_URL";

export default function SwiperSlideImgs({ SwiperSlideImgs }) {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        loop
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          // 768: { slidesPerView: 3 },
          // 1024: { slidesPerView: 3 },
          // 1200: { slidesPerView: 4 },
        }}
        className="relative rounded-4xl"
      >
        {SwiperSlideImgs?.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${BASE_URL}${image?.url}`}
              className="rounded-4xl lg:col-span-2 h-110 w-full object-cover cursor-grab"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ===== Component CustomArrows ===== */}
      <CustomArrows />
    </section>
  );
}
