export default function useHotelSidebarFilters(GetALLDataPage) {
/*=================================================================
Step 2 ==> START ==>  Get ALL Data Filter Sidebar New { Hotel }
===================================================================*/

//step 1 ==> [Get Stars Data] ==> بدون تكرار
    const aLLDataStars = [
        ...new Set(GetALLDataPage?.map((s) => s.details?.hotelInfo?.hotelStars)),
    ].sort();



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 2 ==> [Get Facilities Data] ==> بدون تكرار
    // const aLLDataFacilities = [
    //     ...new Set(GetALLDataPage?.flatMap((f) => f.facilities)),
    // ].sort();

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//IS [ relation ]
const aLLFacilities = GetALLDataPage.flatMap((hotel) =>
  (hotel.facilities ?? []).map((item) => item.name.toLowerCase().trim())
);

const aLLDataFacilities = [...new Set(aLLFacilities)].sort();

/*=================================================================
Step 2 ==> END ==>  Get ALL Data Filter Sidebar New { Hotel }
===================================================================*/





    return{
        aLLDataStars,
        aLLDataFacilities
    }
}
