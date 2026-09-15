//import React Icons
import { FaQuestion } from "react-icons/fa";

//import Utils
import { iconsMap } from "../../../Utils/IconsMap";

//Function renderIcon
const renderIcon = (key) => {
  const Icon = iconsMap[key];
  return Icon ? <Icon /> : <FaQuestion />;
};

const Amenities = ({ amenities }) => {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-(--primary-color) text-shadow-lg text-shadow-black/10 mb-10">
        Amenities
      </h2>

      <div className="hotelInfo grid grid-cols-2 gap-y-10 gap-x-5">
        {amenities?.map((amenity, index) => (
          <section key={index} className="flex items-center gap-2">
            <h2 className="bg-(--primary-color2) text-white p-2.5 rounded-full rounded-bl-none font-black text-lg">
              {renderIcon(amenity?.icon)}
            </h2>

            <h1 className="flex flex-col gap-0.5 text-lg text-(--primary-pera) font-semibold">
              {amenity?.name}
            </h1>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
