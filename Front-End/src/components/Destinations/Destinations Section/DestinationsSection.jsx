//import component UI
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";
import CheckContentCardPage from "../../../UI/Tour_Hotel_Car_Food_Page/CheckDataCardsPage/CheckContentCardPage";
import PaginationComponentUI from "../../../UI/Tour_Hotel_Car_Food_Page/Section Right/Pagination";

//import component NEW
import DestinationsCard from "./DestinationsCard";

// import useAddToDetailsPage is Hook
import { useAddToDetailsPage } from "../../../Hooks/useAddToDetailsPage";

//import Hook { Get ALL Data Pages APIs }
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//import services APIS
import { DESTINATION_POPULATE } from "../../../services/APIs/Independent Populates API/destination_Populate";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

export default function DestinationsSection({ t, language, DarkMode }) {
  /*=================================================================
  Step 1 ==> ALL Data Pages API
    ===================================================================*/
  const { GetALLDataPageSpider, GetALLFilteredDataCards } =
    useGetALLDataPagesAPIS({
      endpoint: "destinations",
      populate: DESTINATION_POPULATE,
      customPageFilters: () => {},
      pageSize: 8,
    });

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  /*===========================================================================
  Start Styling BlogSection (2)
  =============================================================================*/
  const BlogSection_Styling = {
    Styling1: "max-w-7xl mx-auto xl:px-0 sm:px-6 px-3",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "grid lg:grid-cols-4 sm:grid-cols-3 gap-x-7 gap-y-70 mt-20 mb-50",
  };

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  //AddToDetailsPage
  const { AddToDetailsPage } = useAddToDetailsPage({
    data: GetALLFilteredDataCards,
    navigatePath: "Destination",
  });

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  return (
    <section className={BlogSection_Styling.Styling1}>
      {/* ===== Component Header_Title_MainTitle ===== */}
      <Header_Title_MainTitle
        title={"Destination"}
        mainTitle1={"Explore Our Top Experiences"}
        mainTitle2={" Travel "}
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
            <div
              className={
                "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-7 gap-y-70 mt-20 mb-60"
              }
            >
              {GetALLFilteredDataCards.map((destination) => (
                <DestinationsCard
                  key={destination?.documentId}
                  item={destination}
                  AddToDetailsPage={AddToDetailsPage}
                  t={t}
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
