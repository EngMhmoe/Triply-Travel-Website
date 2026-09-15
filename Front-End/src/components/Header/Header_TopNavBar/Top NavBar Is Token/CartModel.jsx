/*====================================================================================================
Start Imports
====================================================================================================*/
//============================================================
// React Router
//============================================================
import { Link } from "react-router-dom";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// React Icons
//============================================================
import { FaCartPlus } from "react-icons/fa";

//============================================================
// Store
//============================================================
import { useCartStore } from "../../../../Store/useCartStore";
import { useDarkModeStore } from "../../../../Store/useDarkModeStore";

//============================================================
// Utils
//============================================================
import { cartCalculations } from "../../../Utils/cartCalculations";

//============================================================
// Motion
//============================================================
import { motion } from "motion/react";
/*====================================================================================================
End Imports
====================================================================================================*/

export default function CartModel() {
  //==========================================================
  // Get Cart Data
  //==========================================================
  const { getCarts } = useCartStore();

  //==========================================================
  // Dark Mode
  //==========================================================
  const { DarkMode: darkMode } = useDarkModeStore();

  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Utils
  //==========================================================
  const { totalQuantity, subTotal } = cartCalculations(getCarts);

  //==========================================================
  // Styles
  //==========================================================
  const classes = {
    wrapper: "dropdown dropdown-center duration-1000 md:dropdown-left",

    button: "btn btn-ghost btn-circle duration-1000",

    icon: "h-6.5 w-6.5 text-(--primary-color2) duration-700",

    badge: `
      badge badge-md indicator-item h-6 w-6 rounded-full font-bold border-0 shadow shadow-white
      ${
        !darkMode
          ? "bg-white text-(--primary-color2)"
          : "bg-(--DarkMode-color)  text-white"
      }
    `,

    dropdown:
      "card card-compact dropdown-content mt-0 w-45 rounded-2xl bg-(--primary-pera) py-2 text-white shadow-lg shadow-black",

    content: "flex flex-col gap-2",

    title:
      "border-b border-white/25 text-center text-[20px] font-bold text-(--primary-color2)",

    items: "px-3 text-[17px] font-bold",

    subtotal: "px-3 text-(--primary-color2)",

    subtotalValue: "text-white",

    viewButton:
      "mt-3 flex h-7 w-full cursor-pointer items-center justify-center rounded-2xl bg-(--primary-color2) font-bold duration-1000 md:absolute md:right-45 md:top-[30%] xl:right-45",
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.5 }}
      className={classes.wrapper}
    >
      <div tabIndex={0} role="button" className={classes.button}>
        <div className="indicator">
          <FaCartPlus className={classes.icon} />

          <span className={classes.badge}>{totalQuantity}</span>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////// */}

      <div tabIndex={0} className={classes.dropdown}>
        <div className={classes.content}>
          <h1 className={classes.title}>{t("cart details")}</h1>

          <span className={classes.items}>
            {t("items")} {getCarts.length}
          </span>

          <span className={classes.subtotal}>
            {t("subtotal")}:
            <span className={classes.subtotalValue}> {subTotal}$</span>
          </span>
        </div>

        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}

        <Link to="/Cart_Page" className={classes.viewButton}>
          {t("view cart")}
        </Link>
      </div>
    </motion.div>
  );
}
