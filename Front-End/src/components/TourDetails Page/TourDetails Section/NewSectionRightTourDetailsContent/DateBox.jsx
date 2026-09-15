//import React
import { useState } from "react";

//import useBookingTourStore
import useBookingTourStore from "../../../../Store/useBookingTourStore";

export default function DateBox({ TourDataDetails }) {
  const { booking: data, updateBooking: update } = useBookingTourStore();

  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////

  const [showCalendar, setShowCalendar] = useState(false);

  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////

  // const calculateReturnDate = (startDate) => {
  //   if (!startDate) return "";

  //   const date = new Date(startDate);

  //   date.setDate(date.getDate() + (TourDataDetails.duration - 1));

  //   return date.toISOString().split("T")[0];
  // };

  return (
    <div className="space-y-5 font-semibold">
      {/* DISPLAY */}
      <div
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex flex-col gap-1 border border-(--primary-color) rounded-2xl p-4 cursor-pointer"
      >
        <p className="text-md">Journey Date</p>
        <h4 className="text-(--primary-color2)">
          {data.checkIn || "Select Date"}
        </h4>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex flex-col gap-1 border border-(--primary-color) rounded-2xl p-4 cursor-pointer"
      >
        <p className="text-md">Return Date</p>
        <h4 className="text-(--primary-color2)">
          {data.checkOut || "Select Date"}
        </h4>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* CALENDAR */}
      {showCalendar && (
        <div className="flex flex-col gap-5 border border-(--primary-color) rounded-2xl p-4 cursor-pointer">
          <input
            type="date"
            value={data.checkIn || ""}
            onChange={(e) => {
              const value = e.target.value;

              update({
                checkIn: value,
              });
            }}
            className="border border-(--primary-color) p-2.5 w-full rounded-xl cursor-pointer"
          />

          {/* ////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////// */}

          <input
            type="date"
            value={data.checkOut}
            onChange={(e) => {
              const value = e.target.value;

              update({
                checkOut: value,
              });
            }}
            className=" border p-2 rounded-xl bg-gray-100 cursor-not-allowed"
          />
        </div>
      )}
    </div>
  );
}
