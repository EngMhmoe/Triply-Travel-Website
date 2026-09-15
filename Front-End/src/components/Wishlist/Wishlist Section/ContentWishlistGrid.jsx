//
import { useState } from "react";

//import Component UI
import QuantityControl from "../../../UI/[Cart] AND [WishList]/QuantityControl";

//import React Icons
import { FaTrash, FaShoppingCart, FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

//import framer-motion
import { motion, AnimatePresence } from "framer-motion";

//import useGetWishlistStore
import { useWishlistStore } from "../../../Store/useWishlistStore";

//import server_URL Strapi
import { BASE_URL } from "../../../services/APIs/server_URL";

export default function ContentWishlistGrid({
  ShowModelDelete,
  ShowModelAddToCart,
  ////////////////////
  getFinalPrice,
}) {
  //AddToCartCompleted Styling Icon
  const [AddToCartCompleted_Styling_Icon, setAddToCartCompleted_Styling_Icon] =
    useState(false);

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  //useWishlistStore
  const { getWishlist, setWishlist } = useWishlistStore();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: 500, y: 0 }}
        transition={{ duration: 2.5 }}
        layout
        className="grid md:grid-cols-3 sm:grid-cols-2  gap-x-5 gap-y-10"
      >
        {getWishlist.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="group bg-white rounded-2xl shadow shadow-red-500/20 overflow-hidden relative"
          >
            <img
              src={`${BASE_URL}${item?.image?.url}`}
              alt={item?.title}
              className="w-full h-48 object-cover"
            />

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

            {/* Discount */}
            <span className="absolute top-4 left-4 bg-linear-to-r from-red-500 to-(--primary-color) text-white text-xs font-bold px-3 py-1 rounded-full rounded-bl-none">
              {item.discount}% OFF
            </span>

            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
            {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

            {/* Content */}
            <div className="p-4">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-bold text-(--primary-color) text-shadow-md shadow-black">
                    {item.title}
                  </h2>
                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                  {/* Date */}
                  <p
                    className={
                      "flex items-center gap-1 text-md font-semibold text-(--primary-pera) mt-2"
                    }
                  >
                    <CiLocationOn
                      className={"text-(--primary-color) text-xl font-bold"}
                    />
                    {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                    {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                    {item.location.city} / {item.location.country}
                  </p>
                </div>

                {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

                <section
                  className={
                    "flex items-center sm:gap-2 gap-1 sm:text-md text-sm font-semibold text-(--primary-pera)"
                  }
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1 rounded-full rounded-bl-none bg-(--primary-color2) font-bold text-[#ffffff] w-fit py-[0.5px] px-2  text-sm">
                    <FaStar className="text-yellow-400" />
                    {item.rating}
                  </div>

                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

                  <h2 className={"text-(--primary-color)"}>{item.tag}</h2>

                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

                  <h2>({item.reviewsCount} Reviews)</h2>
                </section>

                {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

                <div>
                  <span className="line-through text-(--primary-pera) mr-2">
                    ${item.oldPrice}
                  </span>
                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                  {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
                  <span className="text-(--primary-color2) font-bold">
                    {/* ${getFinalPrice(item.price, item.discount)} */}$
                    {item.price}
                  </span>
                </div>
              </div>

              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}
              {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\// */}

              {/* Buttons */}
              <div className="flex justify-between mt-7">
                {/* CONTENT */}
                <section>
                  <QuantityControl
                    item={item}
                    getCartANDWishList={getWishlist}
                    setCartANDWishList={setWishlist}
                  />
                </section>

                <section className="flex items-center gap-3">
                  <motion.button
                    className={
                      AddToCartCompleted_Styling_Icon
                        ? "bg-green-100 text-green-600 hover:text-green-100 hover:bg-green-600 duration-1000 px-3 py-2 rounded-lg cursor-pointer"
                        : "text-green-100 bg-green-600 hover:bg-green-100 hover:text-green-600 duration-1000 px-3 py-2 rounded-lg cursor-pointer"
                    }
                    //////////////////////////////
                    whileTap={{ scale: 0.9 }}
                    //////////////////////////////
                    onClick={() => {
                      ShowModelAddToCart(item.documentId);
                    }}
                  >
                    <FaShoppingCart />
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      ShowModelDelete(item.documentId);
                    }}
                    className={
                      AddToCartCompleted_Styling_Icon
                        ? "text-red-100 bg-(--primary-color2) hover:text-red-100 hover:bg-(--primary-color2) duration-1000 px-2.5 py-2 rounded-lg cursor-pointer"
                        : "text-red-100 bg-(--primary-color2) hover:bg-red-100 hover:text-(--primary-color2) duration-1000 px-2.5 py-2 rounded-lg cursor-pointer"
                    }
                  >
                    <FaTrash />
                  </motion.button>
                </section>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
