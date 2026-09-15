//import React
import { useEffect } from "react";

//import Components UI
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import CustomArrows from "../../../UI/App Slider/CustomArrows";
import CustomPagination from "../../../UI/App Slider/CustomPagination";

//import Components
import App_Slider from "./App_Slider";

//import Toaster
import { Toaster } from "react-hot-toast";

//import Hook { Get ALL Data Pages APIs }
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//import services APIS
import { CAR_POPULATE } from "../../../services/APIs/Independent Populates API/car_Populate";
import { BuildAPI_HomeFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_HomeFilter";

//import Motion
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

//import Store
import { useDarkModeStore } from "../../../Store/useDarkModeStore";

export default function CarRentalSection() {
  /*===========================================================================
  Dark Mode
  =============================================================================*/
  const { DarkMode: darkMode } = useDarkModeStore();

  /*===========================================================================
  Styling
  =============================================================================*/
  const classes = {
    Section: `py-10 relative ${
      darkMode ? "bg-(--DarkMode-secondary)" : "bg-(--secondary-color)"
    }`,

    Container: "max-w-7xl mx-auto px-3 relative",

    Slider: "mt-20",
  };

  /*===========================================================================
  Get Cars
  =============================================================================*/
  const { GetALLFilteredDataCards, setFilters } = useGetALLDataPagesAPIS({
    endpoint: "cars",
    populate: CAR_POPULATE,
    customPageFilters: BuildAPI_HomeFilter,
    pageSize: 8,
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      badge: "Featured",
    }));
  }, []);

  /*===========================================================================
  Render
  =============================================================================*/
  return (
    <section className={classes.Section}>
      <Toaster />

      <div className={classes.Container}>
        {/* Header */}
        <Header_Title_MainTitle
          title={"car rental"}
          mainTitle1={"explore our premium rental"}
          mainTitle2={"cars"}
          M="auto"
          text="center"
        />

        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        {/* Slider */}
        <section dir="ltr" className={classes.Slider}>
          <App_Slider GetALLFilteredDataCards={GetALLFilteredDataCards} />
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        {/* Arrows */}
        <CustomArrows />

        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        {/* Pagination */}
        <CustomPagination customValue={3} />
      </div>
    </section>
  );
}
