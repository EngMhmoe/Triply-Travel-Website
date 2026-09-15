//import React Icons
import { FaArrowRight, FaShoppingBag } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

//import react-router-dom
import { Link, useNavigate } from "react-router-dom";

//import Hooks React
import { useEffect, useState } from "react";

//import react-hot-toast
import { Toaster } from "react-hot-toast";

//import useGetCartStore
import { useCartStore } from "../../../../Store/useCartStore";
import ModakAddToCartAndDelete from "../../../../UI/ModelAddToCart&Delete";

//import Hook is useCartActions
import { useItemActions } from "../../../../Hooks/useItemActions";

//import Utils is cartCalculations
import { cartCalculations } from "../../../Utils/cartCalculations";

export default function SectionRight() {
  /*===========================================================================
  Start Styling SectionRight
  =============================================================================*/
  const SectionRight_Styling = {
    Styling1:
      "flex flex-col gap-10 lg:w-106 sm:w-130 w-full text-(--primary-pera) font-semibold",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "flex flex-col gap-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "flex justify-between",
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4:
      "flex justify-between font-bold text-lg mt-4 border-t border-black/25 pt-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5: "text-(--primary-color2)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling6:
      "group w-full flex items-center justify-center gap-2 mt-2 text-lg font-bold bg-linear-to-r hover:bg-linear-to-tl from-(--primary-color2) to-(--primary-color) text-white hover:bg-(--primary-pera) py-3 rounded-tr-4xl rounded-bl-4xl hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-4xl hover:rounded-br-4xl duration-2000 shadow-md shadow-black/30 cursor-pointer",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling7: "group-hover:text-(--primary-pera) duration-1000",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling8:
      "group w-full flex items-center text-lg font-bold justify-center gap-2 bg-linear-to-tl hover:bg-linear-to-r from-(--primary-color2) to-(--primary-color) bg-(--primary-pera) text-white  py-3 rounded-tl-4xl rounded-br-4xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-4xl hover:rounded-bl-4xl duration-2000 shadow-md shadow-black/30 cursor-pointer",
  };

  //useGetCartStore
  const { getCarts, setCart } = useCartStore();

  //modal add || delete == NO
  const [modal, setModal] = useState(null); // add | delete

  //Select Item Id == NO
  const [selectItemId, setSelectItemId] = useState(null);

  // Hook is useCartActions
  const { ShowModelDelete, confirmDelete } = useItemActions({
    //
    get: getCarts,
    set: setCart,

    //
    setModal: setModal,

    //
    selectItemId: selectItemId,
    setSelectItemId: setSelectItemId,

    //
    textToast: "Removed ALL To Carts",
    conditionConfirmDelete: "Items",
  });

  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////

  // cartCalculations
  const { subTotal, discount, tax, total } = cartCalculations(getCarts);

  //DataCalcProducts
  const DataCalcProducts = [
    { name: "Subtotal", Value: subTotal.toFixed(2) },
    {
      name: "Discount",
      Value: discount.toFixed(2),
    },
    {
      name: "Tax",
      Value: tax.toFixed(2),
    },
  ];

  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////

  const Navigate = useNavigate();

  //Step 12 ==> handleBooking Tour
  const handleBooking = () => {
    // NEW
    localStorage.setItem("ISDetailsOrMore", "IsMore");

    //
    localStorage.setItem("CheckoutData", JSON.stringify(getCarts));

    Navigate("/BookingCheckout_page");
  };

  return (
    <div className={SectionRight_Styling.Styling1}>
      <Toaster />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <section className={SectionRight_Styling.Styling2}>
        {DataCalcProducts.map((item, index) => {
          return (
            <div key={index} className={SectionRight_Styling.Styling3}>
              <span>{item.name}</span>
              <span>${item.Value}</span>
            </div>
          );
        })}

        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

        {/* TOTAL */}
        <div className={SectionRight_Styling.Styling4}>
          <span>Total</span>
          <span className={SectionRight_Styling.Styling5}>
            ${total.toFixed(2)}
          </span>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <section className={SectionRight_Styling.Styling2}>
        <button
          onClick={handleBooking}
          className={SectionRight_Styling.Styling6}
        >
          Proceed To Checkout
          <FaArrowRight className={SectionRight_Styling.Styling7} />
        </button>

        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

        <button
          className={
            "group w-full flex items-center justify-center gap-2 mt-2 text-lg font-bold bg-linear-to-r hover:bg-linear-to-tl from-(--primary-color2) to-(--primary-color) text-white hover:bg-(--primary-pera) py-3 rounded-full  duration-2000 shadow-md shadow-black/30 cursor-pointer"
          }
          onClick={ShowModelDelete}
        >
          Delete ALL Carts
          <MdAutoDelete
            className={
              "group-hover:text-(--primary-pera) duration-1000 text-xl"
            }
          />
        </button>

        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
        {/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}

        <Link to={"/tours_page"} className={SectionRight_Styling.Styling8}>
          Keep Exploring
          <FaShoppingBag className={SectionRight_Styling.Styling7} />
        </Link>
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* 🧊 MODAL */}
      <ModakAddToCartAndDelete
        modal={modal}
        confirmDelete={confirmDelete}
        setModal={setModal}
        ContentConfirmDelete={"Are you sure you want to delete all the Carts ?"}
      />
    </div>
  );
}
