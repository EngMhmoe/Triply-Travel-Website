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
import { FaRegHeart } from "react-icons/fa";

//============================================================
// Store
//============================================================
import { useWishlistStore } from "../../../../Store/useWishlistStore";
import { useDarkModeStore } from "../../../../Store/useDarkModeStore";

//============================================================
// Utils
//============================================================
import { wishlistCalculations } from "../../../Utils/wishlistCalculations";

//============================================================
// Motion
//============================================================
import { motion } from "motion/react";
/*====================================================================================================
End Imports
====================================================================================================*/

export default function WishlistModel() {
  //==========================================================
  // Get Wishlist Data
  //==========================================================
  const { getWishlist } = useWishlistStore();

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
  const { totalQuantity: wishlistTotalQuantity, subTotal: wishlistSubTotal } =
    wishlistCalculations(getWishlist);

  //==========================================================
  // Styles
  //==========================================================
  const classes = {
    wrapper: "dropdown md:dropdown-left duration-1000",

    button: "btn btn-ghost btn-circle duration-1000",

    icon: "h-6.5 w-6.5 text-(--primary-color) duration-1000",

    badge: `
      badge badge-md indicator-item h-6 w-6 rounded-full font-bold border-0 shadow shadow-white
      ${
        !darkMode
          ? "bg-white text-(--primary-color)"
          : "bg-(--DarkMode-color)  text-white"
      }
    `,

    dropdown:
      "card card-compact dropdown-content z-[9999] mt-2 w-45 rounded-2xl bg-(--primary-pera) py-2 text-white shadow-lg shadow-black",

    content: "flex flex-col gap-2",

    title:
      "border-b border-white/25 text-center text-[20px] font-bold text-(--primary-color)",

    items: "px-3 text-[17px] font-bold",

    subtotal: "px-3 text-(--primary-color)",

    subtotalValue: "text-white",

    buttonView:
      "mt-3 flex h-7 w-full cursor-pointer items-center justify-center rounded-2xl bg-(--primary-color) font-bold duration-1000 md:absolute md:left-45 md:top-[20%]",
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2 }}
      className={classes.wrapper}
    >
      <div tabIndex={0} role="button" className={classes.button}>
        <div className="indicator">
          <FaRegHeart className={classes.icon} />

          <span className={classes.badge}>{wishlistTotalQuantity}</span>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////// */}

      <motion.div tabIndex={0} className={classes.dropdown}>
        <div className={classes.content}>
          <h1 className={classes.title}>{t("wishlist details")}</h1>

          <span className={classes.items}>
            {t("items")} {getWishlist.length}
          </span>

          <span className={classes.subtotal}>
            {t("subtotal")}:
            <span className={classes.subtotalValue}> {wishlistSubTotal}$</span>
          </span>
        </div>

        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}

        <Link to="/Wishlist_Page" className={classes.buttonView}>
          {t("view wishlist")}
        </Link>
      </motion.div>
    </motion.div>
  );
}
