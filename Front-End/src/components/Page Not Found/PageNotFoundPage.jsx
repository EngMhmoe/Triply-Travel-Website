/*===========================================================
Start import Components (2)
=============================================================*/
//(1) ==> import HerSection UI == OK
import HerSection from "../../UI/Hero Section ALL Page/HerSection";

//(2) ==> import PageNotFoundSection == NO
import PageNotFoundSection from "./PageNotFound Section/PageNotFoundSection";
/*===========================================================
End import Components (2)
=============================================================*/

export default function PageNotFoundPage() {
  /*===========================================================================
      Start Styling HotelsPage
      =============================================================================*/
  const HotelsPage_Styling = {
    Styling1: "flex flex-col gap-50 ",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "lg:pt-105 md:pt-110 pt-125 mb-40 xl:mx-0 sm:mx-6 mx-3",
  };

  return (
    <section className={HotelsPage_Styling.Styling1}>
      {/* Component HerSection UI ==> (1)  */}
      <HerSection NamePage={"404 Error"} />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Component BookingConfirmationSection ==> (2)*/}
      <section className={HotelsPage_Styling.Styling2}>
        <PageNotFoundSection />
      </section>
    </section>
  );
}
