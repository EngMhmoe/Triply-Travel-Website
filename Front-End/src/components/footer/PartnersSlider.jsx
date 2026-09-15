/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// Swiper
//============================================================
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

//============================================================
// Hooks
//============================================================
import { useTranslation } from "react-i18next";
import { useDarkModeStore } from "../../Store/useDarkModeStore";

//============================================================
// Data
//============================================================
import { PARTNERS_LOGOS } from "../../Data/Footer/partners_Logos";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function Partners() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/
  const { i18n: language } = useTranslation();

  const { DarkMode: darkMode } = useDarkModeStore();

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const PARTNERS_CLASSES = {
    wrapper:
      "h-30 flex justify-center items-center absolute -top-17 left-0 rounded-tr-full rounded-br-full p-10 ",

    container:
      "xl:max-w-5xl lg:max-w-3xl md:max-w-2xl sm:max-w-lg max-w-sm Swiper mx-auto cursor-grab",

    image: "h-18 border-2 rounded-full transition duration-500",
  };

  const wrapperClass = `
    ${PARTNERS_CLASSES.wrapper}
    ${darkMode ? "bg-(--DarkMode-color)" : "bg-white"}
  `;

  const imageClass = `
    ${PARTNERS_CLASSES.image}
    ${darkMode ? "border-white/10" : "border-orange-600/10"}
  `;

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section dir={language === "ar" && "ltr"} className={wrapperClass}>
      <div className={PARTNERS_CLASSES.container}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {PARTNERS_LOGOS.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex">
                <img src={logo} alt="partner" className={imageClass} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
