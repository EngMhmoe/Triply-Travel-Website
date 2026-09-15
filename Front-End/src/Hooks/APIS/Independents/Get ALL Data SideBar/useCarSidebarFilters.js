export default function useCarSidebarFilters(GetALLDataPage) {
/*=================================================================
Step 3 ==> START ==>  Get ALL Data Filter Sidebar New { Car }
===================================================================*/

//step 1 ==> [Get Brans Data] ==> بدون تكرار
    const aLLDataBrands = [...new Set(GetALLDataPage?.map((b) => b.brand.toLowerCase().trim()))].sort();



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 2 ==> [Get Brans Data] ==> بدون تكرار
    const aLLDataConditions = [...new Set(GetALLDataPage?.map((c) => c.condition.toLowerCase().trim()))].sort();



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 3 ==> [Get ListedBy Data] ==> بدون تكرار
    const aLLDataListedBy = [...new Set(GetALLDataPage?.map((l) => l.listedBy.toLowerCase().trim()))].sort();



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 4 ==> [Get Fuels Data] ==> بدون تكرار
    const aLLDataFuels = [...new Set(GetALLDataPage?.map((f) => f.fuel.toLowerCase().trim()))].sort();



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 5 ==> [Get Transmissions Data] ==> بدون تكرار
    const aLLDataTransmissions = [...new Set(GetALLDataPage?.map((t) => t.transmission.toLowerCase().trim()))].sort();

/*=================================================================
Step 3 ==> END ==>  Get ALL Data Filter Sidebar New { Car }
===================================================================*/





    return{
        aLLDataBrands,
        //
        aLLDataConditions,
        //
        aLLDataListedBy,
        //
        aLLDataFuels,
        //
        aLLDataTransmissions,
    }
}
