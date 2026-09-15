/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// React
//============================================================
import { useEffect } from "react";

//============================================================
// UI Components
//============================================================
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

//============================================================
// Components
//============================================================
import FilterTabs from "./FilterTabs";
import TourCard from "./TourCard";

//============================================================
// Toast
//============================================================
import { Toaster } from "react-hot-toast";

//============================================================
// Hooks
//============================================================
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//============================================================
// APIs
//============================================================
import { TOUR_POPULATE } from "../../../services/APIs/Independent Populates API/tour_Populate";
import { BuildAPI_HomeFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_HomeFilter";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function TourSection() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { GetALLFilteredDataCards, setFilters } = useGetALLDataPagesAPIS({
    endpoint: "tours",
    populate: TOUR_POPULATE,
    customPageFilters: BuildAPI_HomeFilter,
    pageSize: 20,
  });

  /*==================================================================================================
  Effects
  ==================================================================================================*/

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      categories: ["Historical", "City", "Beach"],
    }));
  }, []);

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper: "max-w-7xl mx-auto px-3",

    Header: "flex justify-between items-center mb-15 flex-wrap gap-4",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section>
      <div className={classes.Wrapper}>
        <Toaster />

        {/* ====================================================================== */}
        {/* Header */}
        {/* ====================================================================== */}

        <section className={classes.Header}>
          <Header_Title_MainTitle
            title={"Tours".toLowerCase()}
            mainTitle1={"Explore Our Best".toLowerCase()}
            mainTitle2={"Tours".toLowerCase()}
            M="none"
            text="start"
          />

          <FadeUpMotion>
            <FilterTabs setFilters={setFilters} />
          </FadeUpMotion>
        </section>

        {/* ====================================================================== */}
        {/* Cards */}
        {/* ====================================================================== */}

        <TourCard GetALLFilteredDataCards={GetALLFilteredDataCards} />
      </div>
    </section>
  );
}
