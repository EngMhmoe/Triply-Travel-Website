export default function DropdownOpenSearch({
  Placeholder,
  OpenSearchDropdown,
  SearchValue,
  SetSearchValue,
  FilteredSearchData,
  FunctionFilterCardWithSearch,
  //
  t = () => {},
  DarkMode = "",
}) {
  return (
    <section>
      {OpenSearchDropdown && (
        <section
          className={`mt-2  border border-white/20 rounded-lg  p-2 ${DarkMode === false ? "bg-[#00122a]" : "bg-black"} `}
        >
          {/* Search Categories AND Attractions  ==> OK */}
          <input
            type="text"
            placeholder={`${`${t(`Search ${Placeholder}`.toLowerCase())}`} ...`}
            value={t(SearchValue.trim().toLowerCase())}
            onChange={(e) =>
              SetSearchValue(t(e.target.value.trim().toLowerCase()))
            }
            className="w-full p-2 mb-2 rounded bg-white/10 outline-none "
          />

          {/* ////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////////////////////////// */}

          {/* List Categories AND Attractions*/}
          <div className="max-h-40 overflow-auto">
            {FilteredSearchData.map((Data, index) => (
              <label
                onClick={() => FunctionFilterCardWithSearch(Data)}
                key={index}
                className="flex items-center gap-2 p-1"
              >
                <input
                  type="checkbox"
                  className="checkbox w-5 h-5 bg-(--secondary-color) checked:border-(--primary-color2) checked:bg-(--primary-color2)"
                />

                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                <span className="capitalize">
                  {t(Data.trim().toLowerCase())}
                </span>
              </label>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
