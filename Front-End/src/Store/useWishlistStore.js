//import create zustand
import { create } from "zustand";


//(1) => useGetWishlistStore
export const useWishlistStore = create((set) => ({
  getWishlist: JSON.parse(localStorage.getItem("Wishlist")) || [],

  setWishlist: (getWishlist) => {
    localStorage.setItem("Wishlist", JSON.stringify(getWishlist));

    set({getWishlist}); // 🔥 أهم سطر
  },

})); 