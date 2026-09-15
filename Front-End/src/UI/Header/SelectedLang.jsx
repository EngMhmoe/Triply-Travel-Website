/*====================================================================================================
Start Imports
====================================================================================================*/
//============================================================
// Hooks
//============================================================
import useSelectedLang from "../../Hooks/Header/useSelectedLang";

//============================================================
// Store
//============================================================
import { useDarkModeStore } from "../../Store/useDarkModeStore";

//============================================================
// UI / Animations
//============================================================
import { motion } from "framer-motion";
/*====================================================================================================
End Imports
====================================================================================================*/

export default function SelectedLang() {
  //==========================================================
  // Hooks
  //==========================================================
  const { changeLanguage, selectedLang, t } = useSelectedLang();

  //==========================================================
  // Stores
  //==========================================================
  const { DarkMode: darkMode } = useDarkModeStore();

  //==========================================================
  // Styles
  //==========================================================
  const selectedLangClasses = {
    select: `
      select
      h-7.5
      w-fit
      capitalize
      shadow shadow-white
      ${
        darkMode
          ? "bg-(--DarkMode-color) text-white"
          : "bg-white text-(--primary-color)"
      }
    `,

    option: "text-(--DarkMode-color) hover:text-(--primary-color)",
  };

  return (
    <motion.select
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.5 }}
      value={selectedLang}
      onChange={(e) => changeLanguage(e.target.value)}
      className={selectedLangClasses.select}
    >
      <option disabled={true}>{t("english (us)")}</option>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <option
        selected={changeLanguage === "en" && true}
        value="en"
        className={!darkMode && selectedLangClasses.option}
      >
        {t("english (us)")}
      </option>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <option
        selected={changeLanguage === "ar" && true}
        value="ar"
        className={!darkMode && selectedLangClasses.option}
      >
        {t("arabic (ar)")}
      </option>
    </motion.select>
  );
}
