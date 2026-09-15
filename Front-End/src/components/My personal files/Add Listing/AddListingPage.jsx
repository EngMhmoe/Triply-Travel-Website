//import React icons
import { FaRegUser } from "react-icons/fa";
import { RiDashboard3Line } from "react-icons/ri";
import {
  IoAddCircleOutline,
  IoBagCheckOutline,
  IoListCircleSharp,
} from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BiWallet } from "react-icons/bi";

/*===========================================================
Start import Components (2)
=============================================================*/
//(1) ==> import HerSection UI == OK
import HerSection from "../../../UI/Hero Section ALL Page/HerSection";

//(2) ==> import MyListDataLayOut == NO
import MyListDataLayOut from "../../../layout/MyListData LayOut/MyListDataLayOut";

//(3) ==> import MyBookingHistorySection == NO
import AddListingSection from "./AddListing Section/AddListingSection";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
/*===========================================================
End import Components (2)
=============================================================*/

export default function AddListingPage() {
  //Data UlMyLinks
  const UlMyLinks = [
    //My Profile
    {
      icon: (
        <FaRegUser className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
      ),

      name: "My Profile",

      href: "/MyProfile_Page",

      style: "group p-2 rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    //My DashBoard
    {
      icon: (
        <RiDashboard3Line className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
      ),

      name: "My DashBoard",

      href: "/MyDashBoard_Page",

      style: "group p-2 rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    //My Booking
    {
      icon: (
        <IoBagCheckOutline className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
      ),

      name: "My Booking",

      href: "/MyBooking_Page",

      style: "group p-2 rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    //Booking History
    {
      icon: (
        <FaHistory className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
      ),

      name: "Booking History",

      href: "/MyBookingHistory_Page",

      style: "group p-2 rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    //My Listing =>  X لسه ما ختش قرار
    {
      icon: (
        <IoListCircleSharp className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
      ),

      name: "My Listing",

      href: "/MyListing_Page",

      style: "group p-2 rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    //Add Listing =>  X لسه ما ختش قرار
    {
      icon: (
        <IoAddCircleOutline className="text-[20px] text-white group-hover:ml-2 duration-800" />
      ),

      name: "Add Listing",

      href: "/AddListing_Page",

      style:
        "bg-(--primary-color2) p-2 text-white rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    // Messages
    {
      icon: (
        <MdOutlineMail className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
      ),

      name: "Messages",

      href: "/MyMessages_Page",

      style: "group p-2 rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    // My Wallet
    {
      icon: (
        <BiWallet className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
      ),

      name: "My Wallet",

      href: "/MyWallet_Page",

      style: "group p-2 rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    // Notifications
    {
      icon: (
        <IoMdNotificationsOutline className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
      ),

      name: "Notifications",

      href: "/MyNotifications_Page",

      style: "group p-2 rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    //Settings
    {
      icon: (
        <IoSettingsOutline className="text-[20px] text-(--primary-color) group-hover:text-(--primary-color) group-hover:ml-2 duration-800" />
      ),

      name: "Settings",

      href: "/MySettings_Page",

      style: "group p-2 rounded-4xl rounded-bl-none duration-1200",
    },

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
  ];

  /*===========================================================================
    Start Styling MyProfilePage
    =============================================================================*/
  const MyProfilePage_Styling = {
    Styling1: "flex flex-col gap-50",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "md:mt-105 mt-125 mb-50 xl:mx-0 sm:mx-6 px-4",
  };

  ////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////

  //t, i18n
  const { t, i18n } = useTranslation();

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
    <section className={MyProfilePage_Styling.Styling1}>
      {/* Component HerSection UI ==> OK  */}
      <HerSection
        NamePage={"My Add Listing"}
        src={"bg-[url('/Images/Login&Sign_Img_HerSection.jpg')]"}
        position={"center"}
        t={t}
      />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Component LoginINSection ==> (2)*/}
      <section className={MyProfilePage_Styling.Styling2}>
        <section className="flex sm:flex-row flex-col items-start gap-x-6 gap-y-15 max-w-7xl m-auto">
          {/* Component MyListDataLayOut */}
          <section className="md:w-120 sm:w-65 w-full bg-black text-white rounded-[40px] shadow-lg shadow-black/50 py-7">
            <MyListDataLayOut UlMyLinks={UlMyLinks} />
          </section>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* Component MySettingsSection */}
          <section className="grow overflow-hidden w-full">
            <AddListingSection />
          </section>
        </section>
      </section>
    </section>
  );
}
