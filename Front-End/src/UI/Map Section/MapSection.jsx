//import MapContainer
import MapContainer from "./MapContainer";

const MapSection = ({ MapLocation }) => {
  return (
    <section>
      <h2 className="font-semibold text-2xl text-(--primary-color) text-shadow-lg text-shadow-black/10 mb-7">
        Location Map
      </h2>

      {/* /////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////// */}

      {/* Component MapContainer */}
      <MapContainer MapLocation={MapLocation} />
    </section>
  );
};

export default MapSection;
