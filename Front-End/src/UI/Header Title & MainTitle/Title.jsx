//import react-icons
import { useTranslation } from "react-i18next";
import { FaPlaneUp } from "react-icons/fa6";

export default function Title({ title = "Is NOT", M = "" }) {
  /*===========================================================================
  Start Styling Title
  =============================================================================*/
  const Title_Styling = {
    Styling1: `flex items-center gap-2 text-2xl text-white font-[PlusJakartaSans] m-${M} font-bold uppercase bg-(--primary-color) w-fit rounded-full ps-0.5 pe-2.5`,

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "bg-white text-(--primary-color) p-1.5 rotate-90 rounded-full",
  };

  //t, i18n
  const { t } = useTranslation();

  return (
    <>
      {/* ===== Title Center ===== */}
      <section className={Title_Styling.Styling1}>
        <div className={Title_Styling.Styling2}>
          <FaPlaneUp />
        </div>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

        <h1>{t(title.trim().toLowerCase())}</h1>
      </section>
    </>
  );
}
