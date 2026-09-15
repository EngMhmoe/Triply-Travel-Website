/*====================================================================================================
* HeroSection
======================================================================================================*/

//============================================================
// Components NEW
//============================================================
import Data_HerSection from "./Data_HerSection";
import Search_Plan from "./Search_Plan";

export default function HeroSection() {
  //==========================================================
  // Styles
  //==========================================================
  const heroClasses = {
    wrapper:
      "absolute top-0 z-2 flex h-full w-full flex-col items-center justify-center bg-[url('/Images/Home_Img_HerSection.jpg')] bg-cover bg-center bg-fixed bg-no-repeat capitalize",

    searchSection:
      "absolute z-9 flex w-full flex-col items-center justify-center px-3 sm:px-10 xl:-bottom-22.5 lg:-bottom-60 md:-bottom-100 sm:-bottom-175 -bottom-180",

    searchContainer:
      "w-full rounded-4xl border-4 border-black/7 bg-transparent p-3 text-white shadow-2xl shadow-[#005b95] sm:p-10",
  };

  return (
    <>
      {/* Hero Content */}
      <section className={heroClasses.wrapper}>
        <Data_HerSection />
      </section>

      {/* /////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////// */}

      {/* Search Box */}
      <section className={heroClasses.searchSection}>
        <div className={heroClasses.searchContainer}>
          <Search_Plan />
        </div>
      </section>
    </>
  );
}
