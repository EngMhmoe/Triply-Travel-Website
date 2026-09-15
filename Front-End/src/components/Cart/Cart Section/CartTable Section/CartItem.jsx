//import Components
import CartItemDetails from "./CartItemDetails";
import QuantityControl from "../../../../UI/[Cart] AND [WishList]/QuantityControl";

//import React Icons
import { FaTrash } from "react-icons/fa";

//import framer-motion
import { motion, AnimatePresence } from "framer-motion";

//import useCartStore
import { useCartStore } from "../../../../Store/useCartStore";

//import server_URL Strapi
import { BASE_URL } from "../../../../services/APIs/server_URL";

export default function CartItem({ item, ShowModelDelete }) {
  /*===========================================================================
    Start Styling CartItem
    =============================================================================*/
  const CartItem_Styling = {
    Styling1:
      "grid lg:grid-cols-8 duration-1000 gap-x-4 gap-y-7 sm:p-4 py-4 px-2 border-b-2 border-black/10 items-center",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "CartItemDetails col-span-4 flex gap-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3:
      "img_Product lg:w-64 md:w-70 sm:w-70 w-60 h-55 md:h-50 object-cover rounded-[50px] rounded-bl-none",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4:
      "col-span-4  flex items-center justify-between lg:justify-between md:justify-end md:gap-15",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5: "font-bold text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling7:
      "group bg-(--primary-color2) shadow shadow-black hover:bg-(--primary-pera) cursor-pointer duration-1000 p-2.5 rounded-full",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling8: "text-white group-hover:scale-130 transition duration-1000",
  };

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  //useGetCartStore
  const { getCarts, setCart } = useCartStore();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: 500, y: 0 }}
        transition={{ duration: 2.5 }}
        layout
        className={CartItem_Styling.Styling1}
      >
        {/* CartItemDetails */}
        <section className={CartItem_Styling.Styling2}>
          {/* IMAGE */}
          <img
            src={`${BASE_URL}${item?.image?.url}`}
            alt={item?.title}
            className={CartItem_Styling.Styling3}
          />
          {/* //////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////// */}
          <CartItemDetails item={item} />
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* CONTENT */}
        <section className={CartItem_Styling.Styling4}>
          {/* PRICE */}
          <div className={CartItem_Styling.Styling5}>${item.price}</div>

          {/* //////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////// */}

          {/* QUANTITY */}
          <QuantityControl
            item={item}
            getCartANDWishList={getCarts}
            setCartANDWishList={setCart}
          />

          {/* //////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////// */}

          {/* SUBTOTAL */}
          <div className={CartItem_Styling.Styling5}>
            ${item.price * item.quantity}
          </div>

          {/* //////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////// */}

          {/* DELETE */}
          <div
            className={CartItem_Styling.Styling7}
            onClick={() => ShowModelDelete(item.documentId)}
          >
            <FaTrash className={CartItem_Styling.Styling8} />
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
