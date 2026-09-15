//import React Icons
import { FaThLarge, FaBars } from "react-icons/fa";

export default function HeaderWishlist({ view, setView }) {
  /*===========================================================================
    Start Styling HeaderWishlist
    =============================================================================*/
  const HeaderWishlist_Styling = {
    Styling1: "Header flex justify-between items-center mb-10",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2:
      "flex gap-1 text-4xl font-bold text-(--primary-pera) text-shadow-lg shadow-black",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "flex gap-3",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4: "p-2 cursor-pointer duration-1000",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5: "bg-(--primary-color2) text-white rounded-xl rounded-bl-none",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling6: "rounded bg-red-300 text-(--primary-color2)",
  };

  return (
    <header className={HeaderWishlist_Styling.Styling1}>
      <h1 className={HeaderWishlist_Styling.Styling2}>My Wishlist ❤️</h1>

      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

      <div className={HeaderWishlist_Styling.Styling3}>
        <button
          onClick={() => setView("grid")}
          className={` ${HeaderWishlist_Styling.Styling4} ${
            view === "grid"
              ? HeaderWishlist_Styling.Styling5
              : HeaderWishlist_Styling.Styling6
          }`}
        >
          <FaThLarge />
        </button>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

        <button
          onClick={() => setView("list")}
          className={` ${HeaderWishlist_Styling.Styling4} ${
            view === "list"
              ? HeaderWishlist_Styling.Styling5
              : HeaderWishlist_Styling.Styling6
          }`}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}
