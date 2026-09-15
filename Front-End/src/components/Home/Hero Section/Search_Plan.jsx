/*====================================================================================================
Step 1 ==> Imports
======================================================================================================*/

//============================================================
// React
//============================================================
import { useState } from "react";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Date
//============================================================
import dayjs from "dayjs";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../../Store/useDarkModeStore";

//============================================================
// Components UI
//============================================================
import SearchCountriesInput from "../../../UI/Location == Home_Page AND CheckOut_Page/SearchCountriesInput";

//============================================================
// Components NEW
//============================================================
import TourTypeInput from "./TourTypeInput";
import DateRangeCalendarInput from "./DateRangeCalendarInput";
import GuestsInput from "./GuestsInput";

//============================================================
// Data
//============================================================
import { FaLocationDot, FaPlaneUp } from "react-icons/fa6";
import { FaClock, FaUserPlus } from "react-icons/fa";

export default function Search_Plan() {
  /*==================================================================================================
  Hooks
  ==================================================================================================*/
  const { t, i18n } = useTranslation();

  const { DarkMode: darkMode } = useDarkModeStore();

  /*==================================================================================================
  State
  ==================================================================================================*/
  const [searchData, setSearchData] = useState({
    destination: "",
    tourType: "",
    checkIn: dayjs(),
    checkOut: dayjs(),
    adults: 1,
    children: 0,
  });

  /*==================================================================================================
Step 4 ==> Classes
==================================================================================================*/
  const classes = {
    wrapper:
      "grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center w-full gap-8 capitalize gap-3",

    card: `
    flex flex-col gap-3 shadow-lg shadow-orange-500/15
    xl:w-60 p-3 rounded-2xl bg-(--secondary-color) text-black
  `,

    header: "flex items-center gap-2",

    icon: "text-(--primary-color)",

    title: "font-bold",

    button: `
    SearchPlan
    duration-1000
    capitalize
    btn btn-error
    font-bold
    shadow shadow-black
    text-white
    border-0
    duration-1500
    xl:absolute
    xl:bottom-44
    right-30
    h-14
    text-2xl
    rounded-full
    hover:bg-(--primary-pera)
    ${darkMode ? "bg-(--DarkMode-secondary)" : "bg-(--primary-color)"}
  `,
  };

  /*==================================================================================================
  Data
  ==================================================================================================*/
  //   //Data Search_Plan (1)
  const dataHerSection = [
    {
      id: 1,
      name: "destination",
      icon: <FaLocationDot />,
      input: <SearchCountriesInput label={"where are you going"} />,
    },

    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////

    {
      id: 2,
      name: "tour type",
      icon: <FaPlaneUp />,
      input: <TourTypeInput />,
    },

    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////

    {
      id: 3,
      name: "check-in",
      icon: <FaClock />,
      input: <DateRangeCalendarInput />,
    },

    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////

    {
      id: 4,
      name: "check-out",
      icon: <FaClock />,
      input: <DateRangeCalendarInput />,
    },

    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////

    {
      id: 5,
      name: "guests",
      icon: <FaUserPlus />,
      input: <GuestsInput />,
    },
  ];

  /*==================================================================================================
  Handlers
  ==================================================================================================*/
  function handleSearch() {
    console.log(searchData);

    // const params = new URLSearchParams({
    //   destination: searchData.destination,
    //   type: searchData.tourType,
    // });

    // navigate(`/Tours?${params.toString()}`);
  }

  return (
    <section
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={classes.wrapper}
    >
      {dataHerSection.map((item) => (
        <div key={item.id} className={classes.card}>
          <div className={classes.header}>
            <span className={classes.icon}>{item.icon}</span>

            {/* ///////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////// */}

            <h2 className={classes.title}>{t(item.name)}</h2>
          </div>

          {/* ///////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////// */}

          <section dir={i18n.language === "ar" ? "ltr" : "ltr"}>
            {item.input}
          </section>
        </div>
      ))}

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <button onClick={handleSearch} className={classes.button}>
        {t("search plan")}
      </button>
    </section>
  );
}
