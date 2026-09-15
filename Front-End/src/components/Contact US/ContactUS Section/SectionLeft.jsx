//import Components NEW
import SmartphoneMessage from "./SmartphoneMessage";
import CompanyDetails from "./CompanyDetails";

//import React Icons
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineAccessTime } from "react-icons/md";

//import uuiDv4
import { v4 as uuiDv4 } from "uuid";

export default function SectionLeft() {
  //Data Contact (1)
  const Data_ContactUS = [
    {
      id: uuiDv4(),
      title: "Office Address",
      icon: <IoLocationOutline />,
      data: "Alexandria, Abu Qir",
    },

    {
      id: uuiDv4(),
      title: "Call Us",
      icon: <IoCallOutline />,
      data: "+20 100 456 789",
    },

    {
      id: uuiDv4(),
      title: "Email Us",
      icon: <HiOutlineMail />,
      data: "support@tripelo.com",
    },

    {
      id: uuiDv4(),
      title: "Open Time",
      icon: <MdOutlineAccessTime />,
      data: "Time",
    },
  ];

  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

  /*===========================================================================
    Start Styling SectionLeft (2)
    =============================================================================*/
  const SectionLeft_Styling = {
    Styling1: "",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: " ",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "h-83 w-0.5 bg-(--primary-color) absolute left-0",
  };

  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  return (
    <section
      className={
        "flex flex-col lg:w-fit lg:flex-col sm:flex-row w-full  justify-around lg:items-start items-center gap-y-15"
      }
    >
      {/* Component SmartphoneMessage */}
      <SmartphoneMessage />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Component CompanyDetails */}
      <div
        className={
          "contact relative border-5 border-(--primary-color) flex sm:flex-col justify-between flex-wrap gap-y-10 gap-x-6 bg-(--secondary-color) xl:w-full p-6 md:mr-0 sm:mr-3 sm:mx-0 mx-5 rounded-tl-4xl rounded-br-4xl"
        }
      >
        {Data_ContactUS.map((Data) => {
          return <CompanyDetails Data={Data} />;
        })}
      </div>
    </section>
  );
}
