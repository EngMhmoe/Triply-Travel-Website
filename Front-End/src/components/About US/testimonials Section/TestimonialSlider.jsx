//import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

//import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import Components
import TestimonialCard from "./TestimonialCard";

//import Hooks
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//import APIs
import { aboutUS_POPULATE } from "../../../services/APIs/Independent Populates API/aboutUS_Populate";

export default function TestimonialSlider() {
  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Swiper: "",
  };

  /*=================================================================
  Step 1 ==> ALL Data Pages API
  ===================================================================*/
  const { GetALLDataPageSpider: Data_TestimonialSlider } =
    useGetALLDataPagesAPIS({
      endpoint: "testimonials",
      populate: aboutUS_POPULATE,
      customPageFilters: () => null,
    });

  return (
    <Swiper
      className={classes.Swiper}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      loop
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{
        el: ".custom-pagination4",
        clickable: true,
      }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        620: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
      }}
    >
      {Data_TestimonialSlider.map((item) => (
        <SwiperSlide key={item.id}>
          <TestimonialCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
