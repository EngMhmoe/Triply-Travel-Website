//import Components NEW
import FilterSidebar from "./Section Left/FilterSidebar";
import ALLContentCards from "./Section Right/ALLContentCards";

// react-hot-toast
import { Toaster } from "react-hot-toast";

//import useGetALLDataPagesAPI
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//import services APIS
import { HOTEL_POPULATE } from "../../../services/APIs/Independent Populates API/hotel_Populate";
import { BuildAPI_HotelFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_HotelFilter";

//import FadeUpMotion
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

export default function HotelsSection({ t, language, DarkMode }) {
  /*=================================================================
Step 1 ==> ALL Data Pages API
  ===================================================================*/
  const { GetALLDataPageSpider, GetALLFilteredDataCards, setFilters } =
    useGetALLDataPagesAPIS({
      endpoint: "hotels",
      populate: HOTEL_POPULATE,
      customPageFilters: BuildAPI_HotelFilter,
      // pageSize: 6,
    });

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  return (
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
