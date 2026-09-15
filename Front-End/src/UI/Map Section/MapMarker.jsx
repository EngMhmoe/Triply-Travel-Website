//import React Icons
import { FaMapMarkerAlt } from "react-icons/fa";

const MapMarker = () => {
  /*===========================================================================
    Start Styling MapMarker
    =============================================================================*/
  const MapMarker_Styling = {
    Styling1: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "relative flex items-center justify-center",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3:
      "absolute w-10 h-10 bg-(--primary-color) rounded-full animate-ping opacity-75",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4: "text-(--primary-color) text-4xl relative z-10",
  };

  return (
    <div className={MapMarker_Styling.Styling1}>
      <div className={MapMarker_Styling.Styling2}>
        <span className={MapMarker_Styling.Styling3}></span>

        <FaMapMarkerAlt className={MapMarker_Styling.Styling4} />
      </div>
    </div>
  );
};

export default MapMarker;
