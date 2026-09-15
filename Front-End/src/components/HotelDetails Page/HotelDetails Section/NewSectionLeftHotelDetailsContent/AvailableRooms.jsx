//import React Icons
import { FaQuestion } from "react-icons/fa";

//import Utils
import { buildRoomFeatures } from "../../../Utils/buildRoom";

//import server_URL Strapi
import { BASE_URL } from "../../../../services/APIs/server_URL";

const AvailableRooms = ({ availableRooms }) => {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-(--primary-color) text-shadow-lg text-shadow-black/10 mb-10">
        Available Rooms
      </h2>

      <div className="relative border-l-2 border-(--primary-color) border-dashed pl-3 space-y-20">
        {availableRooms?.map((room, index) => {
          //New
          const features = buildRoomFeatures(room);

          return (
            <div key={room?.id} className="relative sm:pl-14">
              {/* Number */}
              <div className="absolute -left-9.5 top-0 bg-green-200 shadow-lg shadow-black/70 p-1 rounded-full">
                <div className="w-12 h-12 bg-(--primary-color) text-white rounded-full rounded-bl-none flex items-center justify-center text-lg font-bold">
                  0{index + 1}
                </div>
              </div>

              {/* //////////////////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////////////////
              ////////////////////////////////////////////////////////////////////////////////////// */}

              {/* Card */}
              <div className="hover:bg-linear-to-tl bg-linear-to-r from-red-500/85 to-orange-300/70 bg-(--primary-pera) text-white rounded-3xl  overflow-hidden shadow-lg shadow-red-300">
                {/* Image */}
                <img
                  src={`${BASE_URL}${room?.image?.url}`}
                  alt={room?.title}
                  className="w-full h-[300px] object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="sm:text-2xl text-xl font-bold">
                    {room?.title}
                  </h3>

                  {/* Features */}
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-7 ">
                    {features?.map((f, i) => {
                      const Icon = f.Icon;

                      return (
                        <span
                          key={i}
                          className="flex items-center gap-2  p-2 rounded-full  font-semibold duration-1000 bg-white/80 hover:bg-red-500 hover:text-white text-(--primary-color2)"
                        >
                          {Icon ? <Icon /> : <FaQuestion />}
                          {f?.key}
                        </span>
                      );
                    })}
                  </div>

                  <section className="border-t border-gray-400 pt-5 mt-6 flex items-center justify-between">
                    {/* Price */}
                    {/* text-(--primary-color2) */}
                    <div className="  flex gap-2 items-center ">
                      <span className="text-2xl font-bold text-[#e1ff00]">
                        ${room?.pricePerDay}
                      </span>

                      {/* text-gray-500 */}
                      <span className=" text-gray-100">/ Per Day</span>
                    </div>

                    {/*  */}
                    <button className="border-b text-lg  cursor-pointer btn btn-primary rounded-full text-white border-0">
                      Room Photos & Details
                    </button>
                  </section>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableRooms;
