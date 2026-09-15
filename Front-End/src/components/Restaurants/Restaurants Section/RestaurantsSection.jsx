//import Components NEW
import FilterSidebar from "./Section Left/FilterSidebar";
import ALLContentCards from "./Section Right/ALLContentCards";

// react-hot-toast
import { Toaster } from "react-hot-toast";

//import Hook { Get ALL Data Pages APIs }
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//import services APIS
import { FOOD_POPULATE } from "../../../services/APIs/Independent Populates API/food_Populate";
import { BuildAPI_FoodFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_FoodFilter";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

export default function RestaurantsSection({ t, language, DarkMode }) {
  /*=================================================================
Step 1 ==> ALL Data Pages API
  ===================================================================*/
  const { GetALLDataPageSpider, GetALLFilteredDataCards, setFilters } =
    useGetALLDataPagesAPIS({
      endpoint: "foods",
      populate: FOOD_POPULATE,
      customPageFilters: BuildAPI_FoodFilter,
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
