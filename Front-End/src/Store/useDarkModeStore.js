//import create zustand
import { create } from "zustand";


//(1) => Token
export const useDarkModeStore = create((set) => ({
  DarkMode: false,

  setDarkMode: (DarkMode) => {
    set({ DarkMode }); // 🔥 أهم سطر
  },

}));