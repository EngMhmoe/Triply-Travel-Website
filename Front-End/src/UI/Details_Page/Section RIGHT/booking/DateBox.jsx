//import React useState
import { useState } from "react";

//import Store
// import useBookingHotelStore from "../../../../Store/useBookingHotelStore.js";

export default function DateBox({ booking, updateBooking }) {
  //useBookingHotelStore
  // const { booking, updateBooking } = useBookingHotelStore();

  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////

  //showCalendar
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="space-y-5 font-semibold">
      {/* Check In */}
      <div
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex flex-col gap-1 border border-(--primary-color) rounded-2xl p-4 cursor-pointer"
      >
        <p className="text-md">Check In</p>

        <h4 className="text-(--primary-color2)">
          {booking.checkIn || "Select Date"}
        </h4>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Check Out */}
      <div
        onClick={() => setShowCalendar(!showCalendar)}
        className=" flex flex-col gap-1 border border-(--primary-color) rounded-2xl p-4 cursor-pointer"
      >
        <p className="text-md">Check Out</p>

        <h4 className="text-(--primary-color2)">
          {booking.checkOut || "Select Date"}
        </h4>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* CALENDAR */}
      {showCalendar && (
        <div className=" flex flex-col gap-5 border border-(--primary-color) rounded-2xl p-4">
          <input
            type="date"
            value={booking.checkIn || ""}
            onChange={(e) =>
              updateBooking({
                checkIn: e.target.value,
              })
            }
            className=" border border-(--primary-color) p-2.5 rounded-xl"
          />

          {/* ////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////////////// */}

          <input
            type="date"
            value={booking.checkOut || ""}
            min={booking.checkIn}
            onChange={(e) =>
              updateBooking({
                checkOut: e.target.value,
              })
            }
            className=" border border-(--primary-color) p-2.5 rounded-xl "
          />
        </div>
      )}
    </div>
  );
}
