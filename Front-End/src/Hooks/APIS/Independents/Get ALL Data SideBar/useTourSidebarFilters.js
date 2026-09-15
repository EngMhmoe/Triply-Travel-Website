export default function useTourSidebarFilters(GetALLDataPage) {
/*=================================================================
Step 1 ==> START ==>  Get ALL Data Filter Sidebar New { Tour }
===================================================================*/

//step 1 ==> [Get Durations Data] ==> بدون تكرار
    const aLLDataDurations = [
        ...new Set(GetALLDataPage?.map((d) => d.duration))
    ].sort();



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 2 ==> [Get Attractions Data] ==> بدون تكرار

//IS [JSON] ==>
    // const aLLDataAttrActions = [
    //     ...new Set(GetALLDataPage?.flatMap((a) => a.attractions.name))
    // ].sort();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//IS [ relation ]
const allAttractions = GetALLDataPage.flatMap((tour) =>
  (tour.attractions ?? []).map((item) => item.name.toLowerCase().trim())
);

const aLLDataAttrActions = [...new Set(allAttractions)].sort();

/*=================================================================
Step 1 ==> END ==>  Get ALL Data Filter Sidebar New { Tour }
===================================================================*/


  return {
    aLLDataDurations,
    aLLDataAttrActions,
  }
}
