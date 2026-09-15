/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Components NEW
//============================================================
import SwiperSlid_Card from "./SwiperSlid_Card";

//============================================================
// Swiper
//============================================================
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function App_Slider({ GetALLFilteredDataCards }) {
  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      loop
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{
        el: ".custom-pagination3",
        clickable: true,
      }}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        574: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      className="relative cursor-grab"
    >
      {GetALLFilteredDataCards?.map((item) => (
        <SwiperSlide key={item?.documentId}>
          <SwiperSlid_Card
            car={item}
            GetALLFilteredDataCards={GetALLFilteredDataCards}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
