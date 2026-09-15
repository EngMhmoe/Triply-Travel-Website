export default function useBlogSidebarFilters(GetALLDataPage) {
/*=================================================================
Step 1 ==> START ==>  Get ALL Data Filter Sidebar New { Blog } ==> NO
===================================================================*/

//step 1 ==> [Get Result_Recent_Posts Data] ==> يعنى اخر 3 منشورات يعنى اخر 3  ==> بدون تكرار
      const aLLDataRecentPosts = [...GetALLDataPage]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



//step 2 ==> [Get popularTags Data] ==> بدون تكرار
  const allTags = [
    ...new Set(
      GetALLDataPage?.flatMap((blog) => blog?.details?.postBody?.tags?.map((tag) => tag.name)),
    ),
  ];

  const allDataPopularTags = allTags.sort((a, b) => b.count - a.count).slice(0, 20);


/*=================================================================
Step 1 ==> END ==>  Get ALL Data Filter Sidebar New { Blog } ==> NO
===================================================================*/


  return {
    aLLDataRecentPosts,
    allDataPopularTags,
  }
}
