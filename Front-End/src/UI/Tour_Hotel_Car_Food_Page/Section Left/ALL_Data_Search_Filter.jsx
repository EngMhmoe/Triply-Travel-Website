//import React
import { useState } from "react";

//import Components UI
import Tour_Title from "./Tour_Title";
import Line_HR from "./Line_HR";
import ButtonSelectedSearch from "./ButtonSelectedSearch";
import DropdownOpenSearch from "./DropdownOpenSearch";
import FadeUpMotion from "../../FreeMotions/FadeUpMotion";

export default function ALLDataSearch({
  Title,
  //
  Getting_All_The_Filter_Data,
  //
  FunctionFilterCardWithSearch,
  //
  t = () => {},
  language = "",
  DarkMode = false,
}) {
  //step 1 ==> [Open_Search] AND [search_Value]  ==> Before filtering قبل
  const [OpenSearch, setOpenSearch] = useState(false);
  const [SearchValue, setSearchValue] = useState("");

  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

  //step  ==> [filtered Categories] In Search Category
  const filteredSearchData = Getting_All_The_Filter_Data?.filter((c) =>
    c?.toLowerCase().includes(SearchValue?.toLowerCase()),
  );

  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

  return (
    <FadeUpMotion>
      <section className="w-full">
        {/* Title ==> OK */}
        <Tour_Title Title={Title.title1 + " " + Title.title3} t={t} />

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* Hr ==> OK */}
        <Line_HR />

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* Button Select Search ==> OK */}
        <ButtonSelectedSearch
          BtnTitle={`Select ${Title.title2}`}
          OpenSearch={OpenSearch}
          SetOpenSearch={setOpenSearch}
          //
          t={t}
          language={language}
        />

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* Dropdown Categories  ==> OK */}
        <DropdownOpenSearch
          Placeholder={Title.title2}
          OpenSearchDropdown={OpenSearch}
          SearchValue={SearchValue}
          SetSearchValue={setSearchValue}
          FilteredSearchData={filteredSearchData}
          FunctionFilterCardWithSearch={FunctionFilterCardWithSearch}
          //
          t={t}
          DarkMode={DarkMode}
        />
      </section>
    </FadeUpMotion>
  );
}
