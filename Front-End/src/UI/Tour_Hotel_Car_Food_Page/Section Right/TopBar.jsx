import FadeUpMotion from "../../FreeMotions/FadeUpMotion";

export default function TopBar({
  placeholder,
  //
  GetALLFilteredDataCards,
  //
  FilterSearchTopBar,
  //
  FilterSortBayTopBar,
  //
  t = () => {},
  DarkMode = false,
}) {
  return (
    <FadeUpMotion>
      <section
        className={`
group flex item-center flex-wrap overflow-scroll gap-10 items-center  h-fit text-white sm:p-5 p-3 rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-orange-950
        ${DarkMode === false ? "bg-[#00122a]" : "bg-black"}
      `}
      >
        {/* tours Counter ==> OK */}
        <h2 className="font-bold flex gap-1 items-center  text-xl">
          <span className="text-(--primary-color2) text-2xl">
            {GetALLFilteredDataCards?.length}
          </span>
          {/* ////////////////////////////// */}
          {/* ////////////////////////////// */}
          {t("Results Found".toLowerCase())}
        </h2>

        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        {/* Input Search tour ==> OK */}

        <input
          // value={SearchValue}
          onChange={(e) => FilterSearchTopBar(e.target.value)}
          type="search"
          name="search"
          id="search"
          className="grow bg-(--secondary-color) outline-0 text-(--primary-pera) py-2 px-5 text-lg rounded-full font-semibold"
          placeholder={`${`${t(`Search ${placeholder}`.toLowerCase())}`} ...`}
        />

        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        {/* Filter ==> OK */}
        <select
          onChange={(e) => FilterSortBayTopBar(e.target.value)}
          className="bg-(--primary-color2) grow sm:p-2 p-1 rounded-full cursor-pointer hover:bg-red-500 capitalize"
        >
          <option value="">{t("Sort By Default".toLowerCase())}</option>
          <option value="priceLow">{t("Price Low".toLowerCase())}</option>
          <option value="priceHigh">{t("Price High".toLowerCase())}</option>
          <option value="topRated">{t("Top Rated".toLowerCase())}</option>
        </select>
      </section>
    </FadeUpMotion>
  );
}
