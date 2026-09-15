//import Components UI
import FadeUpMotion from "../../FreeMotions/FadeUpMotion";
import Line_HR from "./Line_HR";
import Tour_Title from "./Tour_Title";

export default function ALL_Data_Search_Filter({
  Title,
  //
  Getting_All_The_Filter_Data,
  //
  FunctionFilterCardWithSearch,
  //
  t = () => {},
  language = "",
}) {
  const All =
    Title === "Tour Durations" ||
    Title === "Hotel Stars" ||
    Title === "Food Rating" ||
    Title === "Serving Size";

  return (
    <FadeUpMotion>
      <section>
        {/* Title ==> OK */}
        <Tour_Title Title={Title} t={t} />

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* HR ==> Ok */}
        <Line_HR />

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* ALL Durations Data ==> OK  */}
        {Getting_All_The_Filter_Data.map((dataName, index) => (
          <label
            onClick={() => FunctionFilterCardWithSearch(dataName)}
            key={index}
            className="block mb-2 capitalize"
          >
            <input
              type="checkbox"
              className="checkbox  w-5 h-5 bg-(--secondary-color) checked:border-(--primary-color2) capitalize checked:bg-(--primary-color2) checked:text-white"
            />

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
            <span className={language === "en" ? "ml-2" : "mr-2"}>
              {All && t(dataName)} {!All && t(dataName.trim().toLowerCase())}{" "}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
              {dataName > 1
                ? Title === "Tour Durations" && (
                    <span>{t("Days".trim().toLowerCase())}</span>
                  )
                : Title === "Tour Durations" && (
                    <span>{t("Day".trim().toLowerCase())}</span>
                  )}
              {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              {dataName > 1
                ? Title === "Hotel Stars" && (
                    <span>{t("Stars".trim().toLowerCase())}</span>
                  )
                : Title === "Hotel Stars" && (
                    <span>{t("Star".trim().toLowerCase())}</span>
                  )}
              {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              {Title === "Food Rating" && (
                <span>{t("Star & UP".trim().toLowerCase())}</span>
              )}
              {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              {dataName > 1
                ? Title === "Serving Size" && (
                    <span>{t("Persons".trim().toLowerCase())}</span>
                  )
                : Title === "Serving Size" && (
                    <span>{t("Person".trim().toLowerCase())}</span>
                  )}
            </span>
          </label>
        ))}
      </section>
    </FadeUpMotion>
  );
}
