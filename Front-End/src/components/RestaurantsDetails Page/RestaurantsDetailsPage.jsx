/*===========================================================
Start import Components (1)
=============================================================*/
//Step 1 ==> import Components UI
import HerSection from "../../UI/Hero Section ALL Page/HerSection";
import Details_Page_Section from "../../UI/Details_Page/Details_Page_Section";

//Step 2 ==> import Components NEW
import NewSectionLeftRestaurantsDetailsContent from "./RestaurantsDetails Section/NewSectionLeftRestaurantsDetailsContent/NewSectionLeftRestaurantsDetailsContent";
import NewSectionRightRestaurantsDetailsContent from "./RestaurantsDetails Section/NewSectionRightRestaurantsDetailsContent/NewSectionRightRestaurantsDetailsContent";
/*===========================================================
End import Components (1)
=============================================================*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*===========================================================
Start import React Icons (2)
=============================================================*/
import {
  FaUserFriends,
  FaWeight,
  FaFire,
  FaBreadSlice,
  FaWineGlassAlt,
} from "react-icons/fa";

import { IoIosTime } from "react-icons/io";
import { GiLevelFourAdvanced, GiHotMeal, GiChickenOven } from "react-icons/gi";
import { PiCookingPotFill } from "react-icons/pi";
import { MdFastfood, MdNoFood } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { LuChefHat } from "react-icons/lu";
/*===========================================================
End import React Icons (2)
=============================================================*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*===========================================================
Start import Hooks (4)
=============================================================*/
import { useDetailsPage } from "../../Hooks/useDetailsPage";
import useBookingFoodStore from "../../Store/useBookingFoodStore";
import { useEffect } from "react";

//import useTranslation
import { useTranslation } from "react-i18next";

//import useDarkModeStore
import { useDarkModeStore } from "../../Store/useDarkModeStore";

/*===========================================================
End import Hooks (4)
=============================================================*/

// ===>>>
export default function RestaurantsDetailsPage() {
  //Step 1 ==> Booking Food Store
  const { booking: bookingFood, updateBooking } = useBookingFoodStore();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //step 2 ==> useDetailsPage
  const {
    DetailsPage_Styling,
    getDataItemDetails,
    isValid,
    handleBooking: handleBookingFood,
  } = useDetailsPage({
    booking: bookingFood,
    requiredFields: bookingFood.typeCondition,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //step 3 ==> menuInfo
  const menuInfo = [
    {
      name: "ServingSize",
      Data: getDataItemDetails?.details?.menuInfo?.servingSize + " persons",
      icon: <FaUserFriends />,
    },

    {
      name: "PreparationTime",
      Data: getDataItemDetails?.details?.menuInfo?.preparationTime + " min",
      icon: <IoIosTime />,
    },

    {
      name: "Calories",
      Data: getDataItemDetails?.details?.menuInfo?.calories,
      icon: <FaFire />,
    },

    {
      name: "SpicyLevel",
      Data: getDataItemDetails?.details?.menuInfo?.spicyLevel,
      icon: <GiLevelFourAdvanced />,
    },

    {
      name: "CookingStyle",
      Data: getDataItemDetails?.details?.menuInfo?.cookingStyle,
      icon: <LuChefHat />,
    },

    {
      name: "MealType",
      Data: getDataItemDetails?.details?.menuInfo?.mealType,
      icon: <GiHotMeal />,
    },

    {
      name: "DishWeight",
      Data: getDataItemDetails?.details?.menuInfo?.dishWeight + " g",
      icon: <FaWeight />,
    },

    {
      name: "Protein",
      Data: getDataItemDetails?.details?.menuInfo?.protein + " g",
      icon: <GiChickenOven />,
    },

    {
      name: "Carbs",
      Data: getDataItemDetails?.details?.menuInfo?.carbs + " g",
      icon: <FaBreadSlice />,
    },

    {
      name: "Fat",
      Data: getDataItemDetails?.details?.menuInfo?.fat + " g",
      icon: <FaFire />,
    },

    {
      name: "Allergens",
      Data: getDataItemDetails?.details?.menuInfo?.allergens?.join(", "),
      icon: <MdNoFood />,
    },

    {
      name: "ServingTemperature",
      Data: getDataItemDetails?.details?.menuInfo?.servingTemperature,
      icon: <MdFastfood />,
    },

    {
      name: "RecommendedDrink",
      Data: getDataItemDetails?.details?.menuInfo?.recommendedDrink,
      icon: <FaWineGlassAlt />,
    },
  ];

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    updateBooking({
      type: getDataItemDetails?.category,
      PickingUp: getDataItemDetails?.location?.address,
    });
  }, [getDataItemDetails]);

  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////

  //t, i18n
  const { t, i18n } = useTranslation();

  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////

  //DarkMode
  const { DarkMode } = useDarkModeStore();

  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <section className={DetailsPage_Styling.Styling1}>
      {/* Component HerSection UI ==> (1)  */}
      <HerSection
        NamePage={"Food Single"}
        src={"bg-[url('/Images/Food_Img_HerSection.jpg')]"}
        position={"top"}
        t={t}
      />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Component TourDetailsSection ==> (2)*/}
      <section className={DetailsPage_Styling.Styling2}>
        <Details_Page_Section
          //Step 1 ==> NEW Section Left Content ALL Details
          ContainerDataDetails={getDataItemDetails}
          ///////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////

          DataDetailsInfo={menuInfo}
          ///////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////

          NewSectionLeftContent={
            <NewSectionLeftRestaurantsDetailsContent
              RestaurantsDataDetails={getDataItemDetails}
            />
          }
          //////////////////////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////////////////////

          //Step 2 ==> NEW Section Right Content ALL Details
          NewSectionRightContent={
            <NewSectionRightRestaurantsDetailsContent
              RestaurantsDataDetails={getDataItemDetails}
            />
          }
          ///////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////

          handleBooking={handleBookingFood}
          ///////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////

          isValid={isValid}
        />
      </section>
    </section>
  );
}
