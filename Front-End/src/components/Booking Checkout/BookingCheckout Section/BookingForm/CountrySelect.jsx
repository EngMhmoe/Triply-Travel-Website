//import Component UI
import { useTranslation } from "react-i18next";
import SearchCountriesInput from "../../../../UI/Location == Home_Page AND CheckOut_Page/SearchCountriesInput";

//import React Icons
import { FaGlobe } from "react-icons/fa";

const CountrySelect = ({ value, onChange }) => {
  //t, i18n
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full">
      <label className="font-semibold  block mb-2">Select Country</label>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <div className="relative">
        <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color) text-lg" />

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        {/* <select
          name="country"
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-400/20 shadow
          focus:outline-none focus:ring-2 focus:ring-(--primary-color) transition"
        >
          <option value="">Choose Country</option>
          <option value="Egypt">Egypt</option>
          <option value="United States">United States</option>
          <option value="Brazil">Brazil</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="UAE">UAE</option>
        </select> */}

        <section
          className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-400/20 shadow
          focus:outline-none focus:ring-2 focus:ring-(--primary-color) transition"
        >
          <SearchCountriesInput
            name="country"
            label={"Select Country"}
            value={value}
            onChange={onChange}
            t={t}
          />
        </section>
      </div>
    </div>
  );
};

export default CountrySelect;
