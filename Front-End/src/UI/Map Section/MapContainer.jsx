//import Components
import MapMarker from "./MapMarker";
import GoogleMap from "./GoogleMap";

const MapContainer = ({ MapLocation }) => {
  /*===========================================================================
    Start Styling MapContainer
    =============================================================================*/
  const MapContainer_Styling = "relative w-full h-130 animate-fadeIn";

  return (
    <div className={MapContainer_Styling}>
      {/* Google Map */}
      <GoogleMap MapLocation={MapLocation} />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Custom Marker */}
      <MapMarker />
    </div>
  );
};

export default MapContainer;
