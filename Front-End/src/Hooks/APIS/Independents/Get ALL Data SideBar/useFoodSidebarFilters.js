export default function useFoodSidebarFilters(GetALLDataPage) {
/*=================================================================
Step 4 ==> START ==>  Get ALL Data Filter Sidebar New { Food }
===================================================================*/
// const x = "df".toLowerCase
//step 1 ==> [Get CuisineType Data] ==> بدون تكرار
    const aLLDataCuisineType = [...new Set(GetALLDataPage?.map((c) => c.cuisine.toLowerCase().trim()))].sort();



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 2 ==> [Get Rating Data] ==> بدون تكرار
    const aLLDataRating = [...new Set(GetALLDataPage?.map((r) => Math.floor(r.rating)))].sort((a, b) => a - b);



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 3 ==> [Get ServingSize Data] ==> بدون تكرار
    const aLLDataServingSize = [...new Set(GetALLDataPage?.map((s) => s.details?.menuInfo?.servingSize))].sort();



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 4 ==> [Get SpicyLevel Data] ==> بدون تكرار
    const aLLDataSpicyLevel = [...new Set(GetALLDataPage?.flatMap((f) => f.details?.menuInfo?.spicyLevel.toLowerCase().trim()))].sort();

/*=================================================================
Step 4 ==> END ==>  Get ALL Data Filter Sidebar New { Food }
===================================================================*/





    return{
        aLLDataCuisineType,
        //
        aLLDataRating,
        //
        aLLDataServingSize,
        //
        aLLDataSpicyLevel,
    }
}
