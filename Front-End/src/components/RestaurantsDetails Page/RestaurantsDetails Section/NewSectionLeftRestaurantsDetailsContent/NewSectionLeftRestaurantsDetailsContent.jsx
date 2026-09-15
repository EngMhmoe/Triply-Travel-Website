//import Component UI
import FadeUpMotion from "../../../../UI/FreeMotions/FadeUpMotion";
import Highlights from "../../../../UI/Details_Page/Section LEFT/Highlights";
import Ingredients from "../../../../UI/Details_Page/Section LEFT/Highlights";

export default function NewSectionLeftRestaurantsDetailsContent({
  RestaurantsDataDetails,
}) {
  return (
    <div className="md:col-span-2 space-y-20">
      <FadeUpMotion>
        <Highlights
          Title={"Highlights"}
          Data={RestaurantsDataDetails?.details?.highlights}
        />
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <FadeUpMotion>
        <Ingredients
          Title={"Ingredients"}
          Data={RestaurantsDataDetails?.details?.ingredients}
        />
      </FadeUpMotion>
    </div>
  );
}
