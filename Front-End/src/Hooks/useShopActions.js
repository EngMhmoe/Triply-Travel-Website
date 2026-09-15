/*======================================================================
 start Step ( 1 ) ==>  imports
========================================================================
*/

// useAuthStore
import { useAuthStore } from "../Store/useAuthStore";


// useNavigate
import { useNavigate } from "react-router-dom";


// stores
import { useCartStore } from "../Store/useCartStore";
import { useWishlistStore } from "../Store/useWishlistStore";


//import Hook useToast
import { useToast } from "./useToast";

/*======================================================================
 end Step ( 1 ) ==>  imports
========================================================================
*/




// {items , itemData}
export function useShopActions(items) {

/*======================================================================
  start Step ( 2 ) ==>  states
========================================================================
*/

// useAuthStore token
  const { token } = useAuthStore();


// Navigate
  const Navigate = useNavigate();


// setCart
  const { setCart } = useCartStore();


// setWishlist
  const { setWishlist } = useWishlistStore();

  //Hook is useToast
  const { toastSuccess  , toastError } = useToast();
/*======================================================================
  end Step ( 2 ) ==>  states
========================================================================
*/





////////////////////////////////////////////////////////////////////////////////////;
////////////////////////////////////////////////////////////////////////////////////;
////////////////////////////////////////////////////////////////////////////////////;





/*======================================================================
  start Step ( 3 ) ==>  Functions
========================================================================
*/
// Add To Cart
  function AddToCart(SelectItemId) {
    //Step 1 ==>  is not Login In
    if (!token) {
      Navigate("/login_Page");
      return;
    }

    ///////////////////////////////////////
    ///////////////////////////////////////

    //Step 2 ==>  is Success Login In

    //(1) ==> Selected Item in Array
    const SelectedItem = items.find((item) => item.documentId == SelectItemId);
    // const SelectedItem = itemData;

    //(2) ==> currentCart in LocalStorage
    const currentCart = JSON.parse(localStorage.getItem("Carts")) || [];

    //(5) ==> Filter Carts In LocalStorage
    const FilterCartsInLocalStorage = currentCart.find(
      (item) => item.documentId == SelectItemId,
    );

    if (!FilterCartsInLocalStorage) {
      //(3) ==> Clone From  currentCart
      const NewCarts = [...currentCart, SelectedItem];

      //(4) ==> set LocalStorage is item Selected
      // localStorage.setItem("Carts", JSON.stringify(NewCarts));

      toastSuccess("Added to cart");

      //setCart Store == هيا هيا الخطوه الرابعه بس ديه بتتحدث كل أضافه وده أحسن يعنى بعد الى انا عاملته ده الخاطوه الرابعه ملهاش لازمه يعنى موجوده على الفاضى
      setCart(NewCarts);
    }
   else {
      toastError("Already in the cart");
    }
  }


  //   function AddToCartItem() {
  //   //Step 1 ==>  is not Login In
  //   if (!token) {
  //     Navigate("/login_Page");
  //     return;
  //   }

  //   ///////////////////////////////////////
  //   ///////////////////////////////////////

  //   //Step 2 ==>  is Success Login In

  //   //(1) ==> Selected Item in Array
  //   const SelectedItem = itemData;

  //   //(2) ==> currentCart in LocalStorage
  //   const currentCart = JSON.parse(localStorage.getItem("Carts")) || [];

  //   //(5) ==> Filter Carts In LocalStorage
  //   const FilterCartsInLocalStorage = currentCart.find(
  //     (item) => item.id == itemData.id,
  //   );

  //   if (!FilterCartsInLocalStorage) {
  //     //(3) ==> Clone From  currentCart
  //     const NewCarts = [...currentCart, SelectedItem];

  //     //(4) ==> set LocalStorage is item Selected
  //     // localStorage.setItem("Carts", JSON.stringify(NewCarts));

  //     toastSuccess("Added to cart");

  //     //setCart Store == هيا هيا الخطوه الرابعه بس ديه بتتحدث كل أضافه وده أحسن يعنى بعد الى انا عاملته ده الخاطوه الرابعه ملهاش لازمه يعنى موجوده على الفاضى
  //     setCart(NewCarts);
  //   } else {
  //     toastError("Already in the cart");
  //   }
  // }
/////////////////////////////////////////////////////////////////,
/////////////////////////////////////////////////////////////////,



// Add To Wishlist
  function AddToWishlist(SelectItemId) {
    //Step 1 ==>  is not Login In
    if (!token) {
      Navigate("/login_Page");
      return;
    }

    ///////////////////////////////////////
    ///////////////////////////////////////

    //Step 2 ==>  is Success Login In

    //(1) ==> Selected Item in Array
    const SelectedItem = items.find((item) => item.documentId == SelectItemId);

    //(2) ==> currentWishlist  in LocalStorage
    const currentWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

    //(5) ==> Filter Wishlist In LocalStorage
    const FilterWishlistInLocalStorage = currentWishlist.find(
      (item) => item.documentId == SelectItemId,
    );

    //(6)
    if (!FilterWishlistInLocalStorage) {
      //(3) ==> Clone From CheckWishlist
      const NewWishlist = [...currentWishlist, SelectedItem];

      //(4) ==> set LocalStorage is item Selected
      // localStorage.setItem("Wishlist", JSON.stringify(NewWishlist));


      toastSuccess("Added to Wishlist");

      //setCart Store == هيا هيا الخطوه الرابعه بس ديه بتتحدث كل أضافه وده أحسن يعنى بعد الى انا عاملته ده الخاطوه الرابعه ملهاش لازمه يعنى موجوده على الفاضى
      setWishlist(NewWishlist);
    }
     else {
      toastError("Already in the Wishlist");
    }
  }

/*======================================================================
  end Step ( 3 ) ==>  Functions
========================================================================
*/



////////////////////////////////////////////////////////////////////////////////////;
////////////////////////////////////////////////////////////////////////////////////;
////////////////////////////////////////////////////////////////////////////////////;

  return {
    AddToCart,
    AddToWishlist,
  };
}

