/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Components NEW
//============================================================
import SwiperSlid_Card from "./DestinationsSwiperSlid_Card";

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
  Swiper Settings
  ==================================================================================================*/

  const swiperConfig = {
    modules: [Navigation, Pagination, Autoplay],

    spaceBetween: 20,

    loop: true,

    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },

    pagination: {
      el: ".custom-pagination1",
      clickable: true,
    },

    autoplay: {
      delay: 2000,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      500: {
        slidesPerView: 2,
      },

      869: {
        slidesPerView: 3,
      },

      1200: {
        slidesPerView: 4,
      },
    },

    className: "relative",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <Swiper {...swiperConfig}>
      {GetALLFilteredDataCards?.map((item) => (
        <SwiperSlide key={item.documentId}>
          <SwiperSlid_Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
