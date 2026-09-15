/*===========================================================*
 * Start Import Styling CSS (1)
 *=============================================================*/
import "../../styles/home.css";

/*===========================================================*
 * Start Import Components (2)
 *=============================================================*/
// Hero Section
import HeroSection from "./Hero Section/HeroSection";

// About Section
import AboutSection from "../About US/AboutUS Section/AboutSection";

// Popular Destinations
import PopularDestinationsSection from "./PopularDestinations Section/PopularDestinationsSection";

// Hotels Section
import HotelsSection from "./Hotels Section/HotelsSection";

// Video Section
import VideoSection from "./Video Section/VideoSection";

// Tours Section
import TourSection from "./Tours Section/TourSection";

// Offers Section
import OffersSection from "./Offers Section/OffersSection";

// Discount Banner
import DiscountBannerSection from "./DiscountBanner Section/DiscountBannerSection";

// Car Rental
import CarRentalSection from "./CarRental Section/CarRentalSection";

// App Download
import AppDownloadSection from "./appDownload Section/AppDownloadSection";

// Team Section
import TeamSection from "../About US/Teams Section/TeamSection";

// Why Choose Us
import WhyChooseUs from "../About US/WhyChooseUs/WhyChooseUs";

// Testimonials
import TestimonialsSection from "../About US/testimonials Section/TestimonialsSection";

// Blog Section
import BlogSection from "./Blog Section/BlogSection";

// Store
import { useDarkModeStore } from "../../Store/useDarkModeStore";
/*===========================================================*
 * End Import Components (2)
 *=============================================================*/

export default function HomePage() {
  /*===========================================================
  DarkMode
  =============================================================*/
  const { DarkMode: darkMode } = useDarkModeStore();

  /*===========================================================
  Start Classes
  =============================================================*/
  const classes = {
    Wrapper: darkMode
      ? "flex flex-col bg-(--DarkMode-color) text-white font-semibold"
      : "flex flex-col bg-white text-(--primary-pera) font-semibold",

    Sections: "flex flex-col gap-60",

    AboutSection: "lg:mt-250 md:mt-300 sm:mt-400 mt-350",

    PopularDestinations: "md:mb-0 mb-60",
  };

  return (
    <section className={classes.Wrapper}>
      {/* ===== Hero Section ===== */}
      <section>
        <HeroSection />
      </section>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

      <section className={classes.Sections}>
        {/* ===== About Section ===== */}
        <section className={classes.AboutSection}>
          <AboutSection />
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Popular Destinations ===== */}
        <section className={classes.PopularDestinations}>
          <PopularDestinationsSection />
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Hotels Section ===== */}
        <HotelsSection />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Video Section ===== */}
        <VideoSection />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Tours Section ===== */}
        <TourSection />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Offers Section ===== */}
        <OffersSection />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Discount Banner ===== */}
        <DiscountBannerSection />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Car Rental Section ===== */}
        <CarRentalSection />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== App Download Section ===== */}
        <AppDownloadSection />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Team Section ===== */}
        <TeamSection />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Why Choose Us ===== */}
        <WhyChooseUs />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Testimonials ===== */}
        <TestimonialsSection />

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}

        {/* ===== Blog Section ===== */}
        <BlogSection />
      </section>
    </section>
  );
}
