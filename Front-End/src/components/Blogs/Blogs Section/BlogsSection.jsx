//import React
import { useEffect } from "react";

//import component UI
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import CheckContentCardPage from "../../../UI/Tour_Hotel_Car_Food_Page/CheckDataCardsPage/CheckContentCardPage";
import PaginationComponentUI from "../../../UI/Tour_Hotel_Car_Food_Page/Section Right/Pagination";

//import component NEW
// import BlogCard from "./BlogCard";

//import useAddToDetailsPage
import { useAddToDetailsPage } from "../../../Hooks/useAddToDetailsPage";

//import Hook { Get ALL Data Pages APIs }
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//import services APIS
import { BLOG_POPULATE } from "../../../services/APIs/Independent Populates API/blog_Populate";
import { BuildAPI_BlogFilter } from "../../../services/APIs/Independent Filters API/BuildAPI_BlogFilter";

//import useSearchParams
import { useSearchParams } from "react-router-dom";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";
import BlogCard from "../../../UI/BlogCard";

export default function BlogsSection({ t, DarkMode }) {
  /*===========================================================================
  Start Styling BlogSection (2)
  =============================================================================*/
  const BlogSection_Styling = {
    Styling1: "max-w-7xl mx-auto xl:px-0 sm:px-6 px-3",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "grid lg:grid-cols-3 sm:grid-cols-2 gap-x-7 gap-y-15 mt-20 mb-15",
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  /*=================================================================
    Step 1 ==> ALL Data Pages API
  ===================================================================*/
  const { GetALLDataPageSpider, GetALLFilteredDataCards, setFilters } =
    useGetALLDataPagesAPIS({
      endpoint: "blogs",
      populate: BLOG_POPULATE,
      customPageFilters: BuildAPI_BlogFilter,
      // pageSize: 6,
    });

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  //AddToDetailsPage
  const { AddToDetailsPage } = useAddToDetailsPage({
    data: GetALLFilteredDataCards,
    navigatePath: "Blog",
  });

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  const [searchParams] = useSearchParams();

  const tag = searchParams.get("tag");
  const cat = searchParams.get("category");

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      tag: tag || "",
      categories: cat || "",
    }));
  }, [tag, cat]);

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  return (
    <section className={BlogSection_Styling.Styling1}>
      {/* ===== Component Header_Title_MainTitle ===== */}
      <Header_Title_MainTitle
        title={"TRAVEL BLOG"}
        mainTitle1={"Travel Tips, Guides"}
        mainTitle2={"&"}
        mainTitle3={"Destination Stories"}
        M="auto"
        text="center"
        t={t}
      />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Cards */}
      <FadeUpMotion>
        <CheckContentCardPage
          Is_contentCards={
            <div className={BlogSection_Styling.Styling2}>
              {GetALLFilteredDataCards.map((blog) => (
                <BlogCard
                  key={blog?.documentId}
                  {...blog}
                  AddToDetailsPage={AddToDetailsPage}
                  t={t}
                  DarkMode={DarkMode}
                />
              ))}
            </div>
          }
        />
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Pagination ==> OK */}
      <PaginationComponentUI />
    </section>
  );
}
