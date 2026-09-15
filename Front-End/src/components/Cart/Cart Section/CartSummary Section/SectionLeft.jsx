//import Components
import DescriptionCartSummary from "./DescriptionCartSummary";
import Header_Title_MainTitle from "../../../../UI/Header Title & MainTitle/Header_Title_MainTitle";

export default function SectionLeft() {
  /*===========================================================================
    Start Styling SectionLeft
    =============================================================================*/
  const SectionLeft_Styling = {
    Styling1:
      "flex flex-col  md:gap-20 sm:gap-15 gap-12 lg:w-129 sm:w-130 w-full",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "flex flex-col gap-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "lg:w-97 flex flex-col gap-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4: "font-semibold text-[19px] text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5: "flex flex-row flex-wrap",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling6:
      "flex-1 focus:text-lg duration-300 border focus:text-(--primary-color2) border-black/25 rounded-l-lg px-3 py-2 outline-none",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling7:
      "bg-(--primary-color2) text-white px-4 rounded-r-lg hover:bg-(--primary-pera) cursor-pointer duration-1000",
  };

  return (
    <div className={SectionLeft_Styling.Styling1}>
      {/* Section TO */}
      <section className={SectionLeft_Styling.Styling2}>
        {/* <Title title="Booking Summary" /> */}
        <Header_Title_MainTitle title="Booking Summary" />

        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

        <DescriptionCartSummary />
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Section Bottom */}
      <section className={SectionLeft_Styling.Styling3}>
        <h2 className={SectionLeft_Styling.Styling4}>Have a discount code</h2>

        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

        <div className={SectionLeft_Styling.Styling5}>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className={SectionLeft_Styling.Styling6}
          />
          {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
          {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
          <button className={SectionLeft_Styling.Styling7}>Apply Code</button>
        </div>
      </section>
    </div>
  );
}
