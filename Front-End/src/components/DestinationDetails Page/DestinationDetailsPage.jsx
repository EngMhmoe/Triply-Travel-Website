/*===========================================================
Start import Components (1)
=============================================================*/
//Step 1 ==> import Components UI
import HerSection from "../../UI/Hero Section ALL Page/HerSection";
import Details_Page_Section from "../../UI/Details_Page/Details_Page_Section";

//Step 2 ==> import Components NEW
import NewSectionLeftDestinationDetailsContent from "./DestinationDetails Section/NewSectionLeftDestinationDetailsContent/NewSectionLeftDestinationDetailsContent";
import NewSectionRightDestinationDetailsContent from "./DestinationDetails Section/NewSectionRightDestinationDetailsContent/NewSectionRightDestinationDetailsContent";
/*===========================================================
End import Components (1)
=============================================================*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*===========================================================
Start import React Icons (2)
=============================================================*/
import {
  FaGlobeAmericas,
  FaHotel,
  FaBus,
  FaCalendarAlt,
  FaLanguage,
  FaClock,
  FaMoneyBillWave,
  FaPlane,
  FaCloudSun,
  FaRoute,
  FaPhoneAlt,
} from "react-icons/fa";

import { MdTour } from "react-icons/md";

/*===========================================================
End import React Icons (2)
=============================================================*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*===========================================================
Start import Hooks (4)
=============================================================*/
import { useDetailsPage } from "../../Hooks/useDetailsPage";
import useBookingTourStore from "../../Store/useBookingTourStore";
import { useEffect } from "react";

//import useTranslation
import { useTranslation } from "react-i18next";

//import useDarkModeStore
import { useDarkModeStore } from "../../Store/useDarkModeStore";

/*===========================================================
End import Hooks (4)
=============================================================*/

// ===>>>
export default function DestinationDetailsPage() {
  // Step 1 ==> Booking Hotel Store
  const { booking: bookingDestination, updateBooking } = useBookingTourStore();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //step 2 ==> useDetailsPage
  const {
    DetailsPage_Styling,
    getDataItemDetails,
    isValid,
    handleBooking: handleBookingDestination,
  } = useDetailsPage({
    booking: bookingDestination,
    requiredFields: bookingDestination.typeCondition,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //step 3 ==> HotelDetailsInfo
  const destinationDetailsInfo = [
    {
      name: "Tours",
      Data: getDataItemDetails?.tours,
      icon: <MdTour />,
    },

    {
      name: "Hotels",
      Data: getDataItemDetails?.hotels,
      icon: <FaHotel />,
    },

    {
      name: "Transports",
      Data: getDataItemDetails?.transports,
      icon: <FaBus />,
    },

    {
      name: "Best Season",
      Data: getDataItemDetails?.details?.destinationInfo?.bestSeason,
      icon: <FaCalendarAlt />,
    },

    {
      name: "Language",
      Data: getDataItemDetails?.details?.destinationInfo?.language,
      icon: <FaLanguage />,
    },

    {
      name: "Timezone",
      Data: getDataItemDetails?.details?.destinationInfo?.timezone,
      icon: <FaClock />,
    },

    {
      name: "Currency",
      Data: getDataItemDetails?.details?.destinationInfo?.currency,
      icon: <FaMoneyBillWave />,
    },

    {
      name: "Average Stay",
      Data: getDataItemDetails?.details?.destinationInfo?.averageStay + " Days",
      icon: <FaClock />,
    },

    {
      name: "Airport",
      Data: getDataItemDetails?.details?.destinationInfo?.airport,
      icon: <FaPlane />,
    },

    {
      name: "Climate",
      Data: getDataItemDetails?.details?.destinationInfo?.climate,
      icon: <FaCloudSun />,
    },

    {
      name: "Transport Type",
      Data: getDataItemDetails?.details?.destinationInfo?.transport,
      icon: <FaRoute />,
    },

    {
      name: "Emergency Number",
      Data: getDataItemDetails?.details?.destinationInfo?.emergencyNumber,
      icon: <FaPhoneAlt />,
    },
  ];

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    updateBooking({
      type: getDataItemDetails?.category,
      typeCondition: "Destination",
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
        NamePage={"Destination Single"}
        src={"bg-[url('/Images/Destination_Img_HerSection.jpg')]"}
        position={"center"}
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

          DataDetailsInfo={destinationDetailsInfo}
          ///////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////

          NewSectionLeftContent={
            <NewSectionLeftDestinationDetailsContent
              DestinationDataDetails={getDataItemDetails}
            />
          }
          //////////////////////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////////////////////

          //Step 2 ==> NEW Section Right Content ALL Details
          NewSectionRightContent={
            <NewSectionRightDestinationDetailsContent
              DestinationDataDetails={getDataItemDetails}
            />
          }
          ///////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////

          handleBooking={handleBookingDestination}
          ///////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////

          isValid={isValid}
        />
      </section>
    </section>
  );
}
