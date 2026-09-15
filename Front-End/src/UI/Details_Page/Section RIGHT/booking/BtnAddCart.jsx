//import Hooks
import { useAddToCartItem } from "../../../../Hooks/useAddToCartItem";

//import React Icons
import { FaShoppingCart } from "react-icons/fa";

//import framer-motion
import { motion } from "framer-motion";

export default function BtnAddCart({ DataDetails }) {
  //Hook is useAddToCartItem
  const { AddToCart } = useAddToCartItem(DataDetails);

  return (
    <section
      onClick={() => AddToCart(DataDetails.documentId)}
      className="w-full  font-bold flex items-center justify-center border border-(--primary-color2) rounded-2xl hover:bg-transparent hover:text-black py-3 mt-0 bg-(--primary-color2) text-white cursor-pointer duration-1000"
    >
      <motion.button
        className={
          " text-green-400  duration-1000 px-3 rounded-lg cursor-pointer"
        }
        //////////////////////////////
        whileTap={{ scale: 0.9 }}
      >
        <section>
          <FaShoppingCart />
        </section>
      </motion.button>
      Add To Cart
    </section>
  );
}
