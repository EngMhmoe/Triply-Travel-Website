//import Hooks
import { useAddToCartItem } from "../../../../Hooks/useAddToCartItem";

export default function BtnAddWishlist({ DataDetails }) {
  //Hook is useAddToCartItem
  const { AddToWishlist } = useAddToCartItem(DataDetails);

  return (
    <button
      onClick={() => AddToWishlist(DataDetails.documentId)}
      className="w-full font-bold border border-(--primary-color) rounded-2xl hover:bg-transparent hover:text-black py-3 mt-10 bg-(--primary-color) text-white cursor-pointer duration-1000"
    >
      ❤️ Add To Wishlist
    </button>
  );
}
