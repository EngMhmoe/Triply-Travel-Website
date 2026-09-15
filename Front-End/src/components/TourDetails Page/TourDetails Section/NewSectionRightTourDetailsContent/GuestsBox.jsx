//import React
import { useEffect, useState } from "react";

//import useBookingStore
import useBookingTourStore from "../../../../Store/useBookingTourStore";

export default function GuestsBox({ TourDataDetails }) {
  const { booking: data, updateBooking: update } = useBookingTourStore();

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  const [open, setOpen] = useState(false);

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  const travelers = data.adults + data.children;

  useEffect(() => {
    update({
      person: travelers,
    });
  }, [travelers]);

  const Counter = (label, key) => {
    const isMin = key === "children" ? data[key] <= 0 : data[key] <= 1;

    return (
      <div className="flex justify-between items-center">
        <span className="text-lg">{label}</span>

        <div className="flex gap-3.5">
          <button
            disabled={isMin}
            className={` btn  ${isMin ? "bg-gray-300 cursor-not-allowed" : "bg-(--primary-pera) hover:bg-(--primary-color2)"} duration-1000 font-bold rounded-md w-9 h-fit text-white text-2xl `}
            onClick={(e) => {
              e.stopPropagation();

              update({
                [key]: Math.max(key === "children" ? 0 : 1, data[key] - 1),
              });
            }}
          >
            -
          </button>

          <span className="text-(--primary-color) font-bold text-xl">
            {data[key]}
          </span>

          <button
            disabled={data.person >= TourDataDetails.groupSize}
            className={` btn ${data.person >= TourDataDetails.groupSize ? "bg-gray-400 cursor-not-allowed" : "bg-(--primary-pera) hover:bg-green-600"} duration-1000 font-bold rounded-md w-9 h-fit text-white text-2xl `}
            onClick={(e) => {
              e.stopPropagation();

              if (data.person >= TourDataDetails.groupSize) return;

              update({
                [key]: data[key] + 1,
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative font-semibold">
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1 border border-(--primary-color) rounded-2xl p-4 cursor-pointer"
      >
        <p className="text-md">Travelers</p>
        <h4 className="text-(--primary-color2)">
          {data.person} Traveler
          {data.person > 1 ? "s" : ""}
        </h4>

        <p>
          {data.adults} Adults • {data.children} Children
        </p>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {open && (
        <div className="absolute w-full bg-white shadow-lg rounded-xl p-4 mt-2 space-y-5 z-10">
          {Counter("Adults", "adults")}

          {Counter("Children", "children")}

          <p className="flex items-center gap-1 font-bold">
            Max
            <span className="font-bold text-lg text-(--primary-color2)">
              {TourDataDetails.groupSize}
            </span>
            Travelers
          </p>
        </div>
      )}
    </div>
  );
}
