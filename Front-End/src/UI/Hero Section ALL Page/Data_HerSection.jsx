import FadeUpMotion from "../FreeMotions/FadeUpMotion";

export default function Data_HerSection({ NamePage, t = () => {} }) {
  /*===========================================================================
  Start Styling Data_HerSection
  =============================================================================*/
  const DataHerSection_Styling = {
    Styling1:
      "text-center h-full flex flex-col justify-center items-center w-full absolute z-2",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2:
      "lg:text-6xl text-5xl mt-40 max-w-180 text-white text-shadow-lg text-shadow-black font-bold uppercase mb-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "flex items-center gap-2 text-white font-semibold text-lg",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4: "w-2 h-2 rounded-full bg-green-500 mt-1",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5: "text-(--primary-color) font-bold",
  };

  return (
    <>
      <section className={DataHerSection_Styling.Styling1}>
        <FadeUpMotion>
          <h1 className={DataHerSection_Styling.Styling2}>
            {t(NamePage.toLowerCase())}
          </h1>
        </FadeUpMotion>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

        <FadeUpMotion>
          <div className={DataHerSection_Styling.Styling3}>
            <p>{t("Home".toLowerCase())}</p>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

            <span className={DataHerSection_Styling.Styling4}></span>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

            <p className={DataHerSection_Styling.Styling5}>
              {t(NamePage.toLowerCase())}
            </p>
          </div>
        </FadeUpMotion>
      </section>
    </>
  );
}
