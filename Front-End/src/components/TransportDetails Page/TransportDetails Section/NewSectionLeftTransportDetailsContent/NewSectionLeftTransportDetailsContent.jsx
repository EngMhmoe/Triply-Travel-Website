//import Component UI
import FadeUpMotion from "../../../../UI/FreeMotions/FadeUpMotion";
import Highlights from "../../../../UI/Details_Page/Section LEFT/Highlights";
import RentalPolicies from "../../../../UI/Details_Page/Section LEFT/Highlights";

export default function NewSectionLeftTransportDetailsContent({
  TransportDataDetails,
}) {
  return (
    <div className="md:col-span-2 space-y-20">
      <FadeUpMotion>
        <Highlights
          Title={"Highlights"}
          Data={TransportDataDetails?.details?.highlights}
        />
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <FadeUpMotion>
        <RentalPolicies
          Title={"RentalPolicies"}
          Data={TransportDataDetails?.details?.rentalPolicies}
        />
      </FadeUpMotion>
    </div>
  );
}
