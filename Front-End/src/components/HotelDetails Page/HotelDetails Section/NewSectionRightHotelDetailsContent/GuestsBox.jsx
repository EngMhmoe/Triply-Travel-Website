import { useState } from "react";
import useBookingHotelStore from "../../../../Store/useBookingHotelStore.js";

export default function GuestsBox({ hotelInfo }) {
  const { booking, updateBooking } = useBookingHotelStore();

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  const [open, setOpen] = useState(false);

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  const maxRooms = hotelInfo?.maxRooms || 1;
  const maxGuestsPerRoom = hotelInfo?.maxGuests || 1;

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  // const maxGuests = booking.rooms * maxGuestsPerRoom;
  const maxGuests = (booking?.rooms || 1) * maxGuestsPerRoom;

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  // =========================
  // ROOMS
  // =========================
  const changeRooms = (value) => {
    const newRooms = Math.min(Math.max(1, value), maxRooms);

    updateBooking({
      rooms: newRooms,

      // لو قللت الغرف يقلل الجست تلقائي
      guests: Math.min(booking.guests, newRooms * maxGuestsPerRoom),
    });
  };

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  // =========================
  // GUESTS
  // =========================
  const changeGuests = (value) => {
    const newGuests = Math.min(Math.max(1, value), maxGuests);

    updateBooking({
      guests: newGuests,
    });
  };

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  // =========================
  // COUNTER (UI القديم)
  // =========================
  const Counter = (label, key) => {
    // const value = booking[key];
    const value = Number(booking?.[key] ?? 1);

    const max = key === "rooms" ? maxRooms : maxGuests;

    const isMin = value <= 1;

    const isMax = value >= max;

    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////

    const decrease = (e) => {
      e.stopPropagation();

      if (key === "rooms") {
        changeRooms(value - 1);
      } else {
        changeGuests(value - 1);
      }
    };

    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////

    const increase = (e) => {
      e.stopPropagation();

      if (key === "rooms") {
        changeRooms(value + 1);
      } else {
        changeGuests(value + 1);
      }
    };

    return (
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-lg">{label}</span>

          <div className="flex gap-3.5">
            {/* Minus */}
            <button
              disabled={isMin}
              onClick={decrease}
              className={`
btn
${
  isMin
    ? "bg-gray-300 cursor-not-allowed"
    : "bg-(--primary-color2) hover:bg-(--primary-pera)"
}
duration-1000
font-bold
rounded-md
w-9
text-white
text-2xl
`}
            >
              -
            </button>

            {/* VALUE */}
            <span className="text-(--primary-pera) font-bold text-xl">
              {value}
            </span>

            {/* Plus */}
            <button
              disabled={isMax}
              onClick={increase}
              className={`
btn
${isMax ? "bg-gray-300 cursor-not-allowed" : "bg-green-600 hover:bg-(--primary-pera)"}
duration-1000
font-bold
rounded-md
w-9
text-white
text-2xl
`}
            >
              +
            </button>
          </div>
        </div>

        {/* UX */}
        <p className="text-xs text-gray-500">
          {key === "rooms"
            ? `Maximum ${maxRooms} Rooms`
            : `Maximum ${maxGuests} Guests (${booking.rooms} × ${maxGuestsPerRoom})`}
        </p>

        {isMax && <p className="text-xs text-red-500">Maximum limit reached</p>}
      </div>
    );
  };

  return (
    <div className="relative font-semibold">
      {/* DISPLAY */}
      <div
        onClick={() => setOpen(!open)}
        className=" flex flex-col gap-1 border border-(--primary-color) rounded-2xl p-4 cursor-pointer "
      >
        <p className="text-md">Rooms, Guests</p>

        <h4 className="text-(--primary-color2)">
          {booking.rooms} Room
          {booking.rooms > 1 ? "s" : ""}
          {" , "}
          {booking.guests} Guest
          {booking.guests > 1 ? "s" : ""}
        </h4>

        <p className="text-xs text-gray-500">
          Up to {maxGuestsPerRoom} guests per room
        </p>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className=" absolute w-full bg-white shadow-lg rounded-xl p-4 mt-2 space-y-5 z-10 ">
          {Counter("Rooms", "rooms")}

          {Counter("Guests", "guests")}
        </div>
      )}
    </div>
  );
}
