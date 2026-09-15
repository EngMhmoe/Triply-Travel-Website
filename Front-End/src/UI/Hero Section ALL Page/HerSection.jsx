//import Components
import Data_HerSection from "./Data_HerSection";

export default function HerSection({ NamePage, src, position, t = () => {} }) {
  /*===========================================================================
  Start Styling HerSection
  =============================================================================*/
  const HerSection_Styling = {
    // Styling1: `${src} bg-no-repeat bg-cover  bg-fixed bg-center h-120 absolute top-0 z-2 w-full  flex flex-col justify-center items-center`,
    // Styling1: `${src} bg-no-repeat bg-contain bg-center h-120 absolute top-0 z-2 w-full flex flex-col justify-center items-center`,
    Styling1: `${src} bg-no-repeat bg-cover bg-${position}  h-120 absolute top-0 z-2 w-full flex flex-col justify-center items-center`,

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "bg-black/60 w-full h-full absolute z-1",
  };

  return (
    <>
      {/* Component Data_HerSection */}
      <section className={HerSection_Styling.Styling1}>
        <div className={HerSection_Styling.Styling2}></div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <Data_HerSection NamePage={NamePage} t={t} />
      </section>
    </>
  );
}
