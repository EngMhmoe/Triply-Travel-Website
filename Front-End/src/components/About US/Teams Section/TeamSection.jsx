//import Components UI
import Header_Title_MainTitle from "../../../UI/Header Title & MainTitle/Header_Title_MainTitle";

//import Components
import TeamCards from "./TeamCards";

//import Hooks
import { useGetALLDataPagesAPIS } from "../../../Hooks/APIS/useGetALLDataPagesAPIS";

//import Store
import { useDarkModeStore } from "../../../Store/useDarkModeStore";

//import APIs
import { aboutUS_POPULATE } from "../../../services/APIs/Independent Populates API/aboutUS_Populate";

export default function TeamSection() {
  //DarkMode
  const { DarkMode: darkMode } = useDarkModeStore();

  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Wrapper: `max-full mx-auto px-3 py-10 ${
      darkMode === false
        ? "bg-(--secondary-color)"
        : "bg-(--DarkMode-secondary)"
    }`,
  };

  /*=================================================================
  Step 1 ==> ALL Data Pages API
  ===================================================================*/
  const { GetALLDataPageSpider } = useGetALLDataPagesAPIS({
    endpoint: "ourteams",
    populate: aboutUS_POPULATE,
    customPageFilters: () => null,
  });

  return (
    <section>
      <div className={classes.Wrapper}>
        {/* ===== Component Header_Title_MainTitle ===== */}
        <Header_Title_MainTitle
          title={"our team"}
          mainTitle1={"meet the"}
          mainTitle2={"travel experts"}
          mainTitle3={"behind your journey"}
          M="auto"
          text="center"
        />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Team Cards */}
        <TeamCards Data_TeamSection={GetALLDataPageSpider} />
      </div>
    </section>
  );
}
