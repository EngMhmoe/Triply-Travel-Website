import { useEffect } from "react";
import useBookingHotelStore from "../../../../Store/useBookingHotelStore.js";

export default function HotelTotalBox({ HotelDataDetails }) {
  const { booking, updateBooking } = useBookingHotelStore();

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  // Nights
  const nights =
    booking.checkIn && booking.checkOut
      ? Math.ceil(
          (new Date(booking.checkOut) - new Date(booking.checkIn)) /
            (1000 * 60 * 60 * 24),
        )
      : 0;

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  // Price
  const pricePerNight = HotelDataDetails?.price ?? 0;

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  // Total
  const total = nights > 0 ? nights * booking.rooms * pricePerNight : 0;

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  const isValid = nights > 0;

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    updateBooking({
      nights: nights,
      total: total,
    });
  }, [nights, total]);

  return (
    <div className="flex flex-col gap-2 bg-green-200 shadow-lg shadow-green-400 p-4 my-10 rounded-2xl text-lg font-semibold">
      {/* Nights */}

      <div className="flex justify-between">
        <span>Nights :</span>

        <span className="text-(--primary-color)">
          {nights}
          {nights !== 1 ? " Nights" : " Night"}
        </span>
      </div>

      {/* Rooms */}

      <div className="flex justify-between">
        <span>Rooms :</span>

        <span className="text-(--primary-color)">
          {booking.rooms} {booking.rooms > 1 ? "rooms" : "room"}
        </span>
      </div>

      {/* Guests */}

      <div className="flex justify-between">
        <span>Guests :</span>

        <span className="text-(--primary-color)">
          {booking.guests} {booking.guests > 1 ? "Guests" : "Guest"}
        </span>
      </div>

      {/* Total */}

      <div className="flex justify-between border-t pt-2 mt-2">
        <span>Total :</span>

        <span className="text-(--primary-color2) font-bold text-xl">
          ${total || HotelDataDetails?.price}
        </span>
      </div>

      {!isValid && (
        <p className="text-red-500 text-sm">Select Check In & Check Out</p>
      )}
    </div>
  );
}
