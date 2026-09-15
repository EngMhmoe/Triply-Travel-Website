//
import { useState } from "react";

//import Component
import { FaPlus, FaMinus } from "react-icons/fa";

//
import { useCartStore } from "../../Store/useCartStore";

export default function QuantityControl({
  item,
  getCartANDWishList,
  setCartANDWishList,
}) {
  /*===========================================================================
    Start Styling QuantityControl
    =============================================================================*/
  const QuantityControl_Styling = {
    Styling1:
      "flex items-center gap-3 bg-(--primary-pera)  px-3 py-1 rounded-full",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "cursor-pointer text-(--primary-color)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "text-green-400 font-bold duration-1000",
  };

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  //Function Click Increase Quantity +
  function IncreaseQuantity(SelectItemId) {
    //(1) UpdateCart in quantity
    const UpdateCart = getCartANDWishList.map((item) => {
      if (item.id === SelectItemId) {
        if (item.quantity < 10) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });

    //(2) setCart in UpdateCart
    setCartANDWishList(UpdateCart);
  }

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  //Function Click Decrease Quantity -
  function DecreaseQuantity(SelectItemId) {
    //(1) UpdateCart in quantity
    const UpdateCart = getCartANDWishList.map((item) => {
      if (item.id === SelectItemId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });

    //(2) setCart in UpdateCart
    setCartANDWishList(UpdateCart);
  }

  return (
    <div className={QuantityControl_Styling.Styling1}>
      {/* - */}
      {/* disabled={Counter_CheckDisabled.CounterDecrease} */}
      <button>
        <FaMinus
          className={QuantityControl_Styling.Styling2}
          onClick={() => DecreaseQuantity(item.id)}
        />
      </button>

      {/* //////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////// */}

      <span className={QuantityControl_Styling.Styling3}>{item.quantity}</span>

      {/* //////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////// */}

      {/* + */}
      {/* disabled={Counter_CheckDisabled.CounterIncrease} */}
      <button>
        <FaPlus
          className={QuantityControl_Styling.Styling2}
          onClick={() => IncreaseQuantity(item.id)}
        />
      </button>
    </div>
  );
}
