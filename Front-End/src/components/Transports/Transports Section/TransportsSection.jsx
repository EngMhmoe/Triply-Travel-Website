//import Components NEW
import FilterSidebar from "./Section Left/FilterSidebar";
import ALLContentCards from "./Section Right/ALLContentCards";

// react-hot-toast
import { Toaster } from "react-hot-toast";

//import Hook { Get ALL Data Pages APIs }
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//import services APIS
import { CAR_POPULATE } from "../../../services/APIs/Independent Populates API/car_Populate";
import { BuildAPI_CarFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_CarFilter";

//import FadeUpMotion
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

export default function TransportsSection({ t, language, DarkMode }) {
  /*=================================================================
Step 1 ==> ALL Data Pages API
  ===================================================================*/
  const { GetALLDataPageSpider, GetALLFilteredDataCards, setFilters } =
    useGetALLDataPagesAPIS({
      endpoint: "cars",
      populate: CAR_POPULATE,
      customPageFilters: BuildAPI_CarFilter,
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

      {/* Section LEft ==> NO */}
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
