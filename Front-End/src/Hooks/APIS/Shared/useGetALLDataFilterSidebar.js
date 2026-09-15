//import getCount
// import { getCount } from "../../../components/Utils/getCount";

export function useGetALLDataFilterSidebar_Shared(GetALLDataPage)
{
//step 1 ==> [Get Categories Data] ==> بدون تكرار
    const aLLDataCategories = [
        ...new Set(GetALLDataPage?.map((c) => c.category)),
    ].sort();
    
//     .map((category) => ({
//     category,
//     count: getCount(GetALLDataPage, "category", category),
//   }));

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 2 ==> [Get Languages Data]  ==> بدون تكرار
    const aLLDataLanguages = [
        ...new Set(GetALLDataPage?.map((l) => l.language)),
    ].sort();



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 3 ==> [Get ReviewScores Data]  ==> بدون تكرار
    const aLLDataReviewScores = [
        ...new Set(GetALLDataPage?.map((t) => t.tag.toLowerCase().trim())),
    ].sort();


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
return {
    aLLDataCategories,
    //
    aLLDataLanguages,
    //
    aLLDataReviewScores,
  };
} 