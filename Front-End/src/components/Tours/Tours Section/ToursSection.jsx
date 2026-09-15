//import Components NEW
import FilterSidebar from "./Section Left/FilterSidebar";
import ALLContentCards from "./Section Right/ALLContentCards";

// import react-hot-toast
import { Toaster } from "react-hot-toast";

//import Hook { Get ALL Data Pages APIs }
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//import services APIS
import { TOUR_POPULATE } from "../../../services/APIs/Independent Populates API/tour_Populate";
import { BuildAPI_TourFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_TourFilter";

//import FadeUpMotion
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

export default function ToursSection({ t, language, DarkMode }) {
  /*=================================================================
Step 1 ==> ALL Data Pages API
  ===================================================================*/
  const { GetALLDataPageSpider, GetALLFilteredDataCards, setFilters } =
    useGetALLDataPagesAPIS({
      endpoint: "tours",
      populate: TOUR_POPULATE,
      customPageFilters: BuildAPI_TourFilter,
      // pageSize: 6,
    });

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  return (
    // grid md:grid-cols-4 grid-cols-3
    <section className="tours max-w-7xl xl:m-auto mx-3 grid md:grid-cols-4 grid-cols-1 lg:gap-8 gap-5">
      <Toaster />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Section LEft ==> OK */}
      <FadeUpMotion>
        <FilterSidebar
          GetALLDataPageSpider={GetALLDataPageSpider}
          //
          setFilterCards={setFilters}
          //
          t={t}
          language={language}
          DarkMode={DarkMode}
        />
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Section Right ==> OK */}
      <ALLContentCards
        GetALLFilteredDataCards={GetALLFilteredDataCards}
        //
        setFilterCards={setFilters}
        //
        t={t}
        DarkMode={DarkMode}
      />
    </section>
  );
}
