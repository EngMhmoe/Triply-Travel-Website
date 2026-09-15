//
import React, { useState } from "react";

//
import { FaArrowRight } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

//
import { Link, useNavigate } from "react-router-dom";

//import react-hot-toast
import { Toaster } from "react-hot-toast";

//
import ModakAddToCartAndDelete from "../../../UI/ModelAddToCart&Delete";

//import useGetWishlistStore
import { useWishlistStore } from "../../../Store/useWishlistStore";

//import Hook is useCartActions
import { useItemActions } from "../../../Hooks/useItemActions";

import { wishlistCalculations } from "../../Utils/wishlistCalculations.js";

export default function FooterWishlist() {
  //getWishlist AND setWishlist
  const { getWishlist, setWishlist } = useWishlistStore();

  //modal add || delete == NO
  const [modal, setModal] = useState(null); // add | delete

  //Select Item Id == NO
  const [selectItemId, setSelectItemId] = useState(null);

  // Hook is useCartActions
  const { ShowModelDelete, confirmDelete } = useItemActions({
    //
    get: getWishlist,
    set: setWishlist,

    //
    setModal: setModal,

    //
    selectItemId: selectItemId,
    setSelectItemId: setSelectItemId,

    //
    textToast: "Removed ALL To Wishlist",
    conditionConfirmDelete: "Items",
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // cartCalculations
  const { totalQuantity, total } = wishlistCalculations(getWishlist);

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  const Navigate = useNavigate();

  //Step 12 ==> handleBooking Tour
  const handleBooking = () => {
    // NEW
    localStorage.setItem("ISDetailsOrMore", "IsMore");

    //
    localStorage.setItem("CheckoutData", JSON.stringify(getWishlist));

    Navigate("/BookingCheckout_page");
  };

  return (
    <div className="flex flex-wrap-reverse items-center justify-center gap-10 mt-24">
      <Toaster />
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <button
        className={
          "group md:w-fit w-full flex items-center text-lg font-bold justify-center gap-2 bg-linear-to-tl hover:bg-linear-to-r from-(--primary-color2) to-(--primary-color) bg-(--primary-pera) text-white  py-3 px-7 rounded-tl-4xl rounded-br-4xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-4xl hover:rounded-bl-4xl duration-2000 shadow-md shadow-black/30 cursor-pointer"
        }
        onClick={ShowModelDelete}
      >
        Delete ALL Wishlist
        <MdAutoDelete
          className={"group-hover:text-(--primary-pera) duration-1000 text-xl"}
        />
      </button>

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      <button
        onClick={handleBooking}
        className={
          "group sm:w-fit w-full  flex items-center justify-center gap-7 text-lg font-bold bg-linear-to-r hover:bg-linear-to-tl from-(--primary-color2) to-(--primary-color) text-white hover:bg-(--primary-pera) py-3 px-7 rounded-2xl  duration-2000 shadow-md shadow-black/30 cursor-pointer"
        }
      >
        <section>
          <h1>item {totalQuantity}</h1>
          <h1>${total}</h1>
        </section>

        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}

        <button className="flex items-center gap-2.5">
          {" "}
          <h1>Proceed To Checkout</h1>
          {/* /////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////// */}
          <FaArrowRight
            className={
              "group-hover:text-(--primary-pera) duration-1000 text-xl"
            }
          />
        </button>
      </button>

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* 🧊 MODAL */}
      <ModakAddToCartAndDelete
        modal={modal}
        confirmDelete={confirmDelete}
        //
        setModal={setModal}
        //
        ContentConfirmDelete={
          "Are you sure you want to delete all the Wishlist ?"
        }
      />
    </div>
  );
}
