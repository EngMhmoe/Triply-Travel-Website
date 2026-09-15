//import React
import { useEffect } from "react";

//import Components UI
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

//import Components
import BlogCard from "../../../UI/BlogCard";

//import Hooks
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";
import { useAddToDetailsPage } from "../../../Hooks/useAddToDetailsPage";

//import APIs
import { BLOG_POPULATE } from "../../../services/APIs/Independent Populates API/blog_Populate";
import { BuildAPI_HomeFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_HomeFilter";

export default function BlogSection() {
  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Wrapper: "max-w-7xl mx-auto px-3 mb-50",

    Cards: "grid lg:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-15 mt-20",

    Content: "md:mb-0 mb-60",
  };

  /*=================================================================
  Step 1 ==> ALL Data Pages API
  ===================================================================*/
  const { GetALLFilteredDataCards, setFilters } = useGetALLDataPagesAPIS({
    endpoint: "blogs",
    populate: BLOG_POPULATE,
    customPageFilters: BuildAPI_HomeFilter,
    pageSize: 3,
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      badge: "Featured",
    }));
  }, []);

  /*=================================================================
  Step 2 ==> Add To Details Page
  ===================================================================*/
  const { AddToDetailsPage } = useAddToDetailsPage({
    data: GetALLFilteredDataCards,
    navigatePath: "blog",
  });

  return (
    <section className={classes.Wrapper}>
      {/* ===== Component Header_Title_MainTitle ===== */}
      <Header_Title_MainTitle
        title={"TRAVEL BLOG".toLowerCase()}
        mainTitle1={"Travel Tips, Guides".toLowerCase()}
        mainTitle2="&"
        mainTitle3={"Destination Stories".toLowerCase()}
        M="auto"
        text="center"
      />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Cards */}
      <FadeUpMotion>
        <div className={classes.Cards}>
          {GetALLFilteredDataCards?.map((blog) => (
            <BlogCard
              key={blog.documentId}
              {...blog}
              AddToDetailsPage={AddToDetailsPage}
            />
          ))}
        </div>
      </FadeUpMotion>
    </section>
  );
}
