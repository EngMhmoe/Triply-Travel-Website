/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Components NEW
//============================================================
import SwiperSlid_Card from "./SwiperSlid_Card";

//============================================================
// Animations
//============================================================
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

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
        el: ".custom-pagination2",
        clickable: true,
      }}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        660: { slidesPerView: 2 },
        975: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }}
      className="relative cursor-grab"
    >
      {GetALLFilteredDataCards.map((item) => (
        <SwiperSlide key={item?.documentId}>
          <FadeUpMotion>
            <SwiperSlid_Card
              item={item}
              GetALLFilteredDataCards={GetALLFilteredDataCards}
            />
          </FadeUpMotion>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
