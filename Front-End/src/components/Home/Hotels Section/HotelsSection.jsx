/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// React
//============================================================
import { useEffect } from "react";

//============================================================
// Components
//============================================================
import App_Slider from "./App_Slider";

//============================================================
// UI Components
//============================================================
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import CustomArrows from "../../../UI/App Slider/CustomArrows";
import CustomPagination from "../../../UI/App Slider/CustomPagination";

//============================================================
// Libraries
//============================================================
import { Toaster } from "react-hot-toast";

//============================================================
// Hooks
//============================================================
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../../Store/useDarkModeStore";

//============================================================
// APIs
//============================================================
import { HOTEL_POPULATE } from "../../../services/APIs/Independent Populates API/hotel_Populate";
import { BuildAPI_HomeFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_HomeFilter";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function HotelsSection() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { DarkMode: darkMode } = useDarkModeStore();

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Section: `py-10 relative ${
      darkMode ? "bg-(--DarkMode-secondary)" : "bg-(--secondary-color)"
    }`,

    Container: "max-w-7xl mx-auto px-6 relative",

    SliderSection: "mt-20",
  };

  /*==================================================================================================
  API
  ==================================================================================================*/

  const { GetALLFilteredDataCards, setFilters } = useGetALLDataPagesAPIS({
    endpoint: "hotels",
    populate: HOTEL_POPULATE,
    customPageFilters: BuildAPI_HomeFilter,
    pageSize: 8,
  });

  /*==================================================================================================
  Effects
  ==================================================================================================*/

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      badge: "Featured",
    }));
  }, []);

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section className={classes.Section}>
      <Toaster />

      <div className={classes.Container}>
        {/* ===== Header ===== */}
        <Header_Title_MainTitle
          title="hotels"
          mainTitle1="top rated"
          mainTitle2="hotels"
          M="auto"
          text="center"
        />

        {/* ===== Slider ===== */}
        <section dir="ltr" className={classes.SliderSection}>
          <App_Slider GetALLFilteredDataCards={GetALLFilteredDataCards} />
        </section>

        {/* ===== Navigation ===== */}
        <CustomArrows />

        {/* ===== Pagination ===== */}
        <CustomPagination customValue={2} />
      </div>
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
