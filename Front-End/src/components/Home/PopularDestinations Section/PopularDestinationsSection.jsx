/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// React
//============================================================
import { useEffect } from "react";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../../Store/useDarkModeStore";

//============================================================
// Hooks
//============================================================
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//============================================================
// Services
//============================================================
import { DESTINATION_POPULATE } from "../../../services/APIs/Independent Populates API/destination_Populate";
import { BuildAPI_HomeFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_HomeFilter";

//============================================================
// UI Components UI
//============================================================
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";
import BookingStats from "../../../UI/BookingStats";
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import CustomArrows from "../../../UI/App Slider/CustomArrows";
import CustomPagination from "../../../UI/App Slider/CustomPagination";

//============================================================
// Components NEW
//============================================================
import App_Slider from "./App_Slider";

/*====================================================================================================
Step 2 ==> Component
======================================================================================================*/

export default function PopularDestinationsSection() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/

  const { DarkMode: darkMode } = useDarkModeStore();

  const { GetALLFilteredDataCards, setFilters } = useGetALLDataPagesAPIS({
    endpoint: "destinations",
    populate: DESTINATION_POPULATE,
    customPageFilters: BuildAPI_HomeFilter,
    pageSize: 12,
  });

  /*==================================================================================================
  Effects
  ==================================================================================================*/

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      badge: "Featured",
    }));
  }, [setFilters]);

  /*==================================================================================================
  Classes
  ==================================================================================================*/

  const classes = {
    Wrapper: `py-10 pb-30 relative ${
      darkMode ? "bg-(--DarkMode-secondary)" : "bg-(--secondary-color)"
    }`,

    Container: "max-w-7xl mx-auto px-6 relative",

    Slider: "mt-20",
  };

  /*==================================================================================================
  Render
  ==================================================================================================*/

  return (
    <section className={classes.Wrapper}>
      <div className={classes.Container}>
        {/* ===== Header ===== */}
        <Header_Title_MainTitle
          title="destination"
          mainTitle1="explore our top experiences"
          mainTitle2="travel"
          M="auto"
          text="center"
        />

        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ===== Slider ===== */}
        <section dir="ltr" className={classes.Slider}>
          <FadeUpMotion>
            <App_Slider GetALLFilteredDataCards={GetALLFilteredDataCards} />
          </FadeUpMotion>
        </section>

        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ===== Slider Arrows ===== */}
        <CustomArrows />

        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ===== Slider Pagination ===== */}
        <CustomPagination customValue={1} />
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ===== Booking Stats ===== */}
      <BookingStats position="absolute" />
    </section>
  );
}

/*====================================================================================================
End Component
======================================================================================================*/
