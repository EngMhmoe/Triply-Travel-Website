//import create zustand
import { create } from "zustand";


//(1) => useGetCartStore
export const useCartStore= create((set) => ({
  getCarts: JSON.parse(localStorage.getItem("Carts")) || [],

  setCart: (getCarts) => {
    localStorage.setItem("Carts", JSON.stringify(getCarts));

    set({getCarts}); // 🔥 أهم سطر
  },

})); 