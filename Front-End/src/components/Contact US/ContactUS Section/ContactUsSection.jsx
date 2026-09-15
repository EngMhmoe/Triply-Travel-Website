//import Components
import SectionLeft from "./sectionLeft";
import SectionRight from "./sectionRight";

export default function ContactUsSection({
  t = (value) => value,
  language = "",
  DarkMode = false,
}) {
  /*===========================================================================
    Start Styling ContactUSHome
    =============================================================================*/
  const ContactUsSection_Styling =
    "flex justify-evenly items-start flex-wrap-reverse gap-y-30";

  return (
    <section className={ContactUsSection_Styling}>
      {/* section left */}
      <SectionLeft t={t} language={language} DarkMode={DarkMode} />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* section right */}
      <SectionRight t={t} language={language} DarkMode={DarkMode} />
    </section>
  );
}
