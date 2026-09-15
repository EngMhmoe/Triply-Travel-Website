import { useEffect } from "react";
import useBookingCarStore from "../../../../Store/useBookingCarStore";

export default function CarTotalBox({ TransportDataDetails }) {
  const { booking, updateBooking } = useBookingCarStore();

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  // Nights
  const nights =
    booking.DropOffDate && booking.PickUpDate
      ? Math.ceil(
          (new Date(booking.DropOffDate) - new Date(booking.PickUpDate)) /
            (1000 * 60 * 60 * 24),
        )
      : 0;

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  // Price
  const pricePerNight = TransportDataDetails?.price ?? 0;

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  // Total
  const total = nights > 0 ? nights * pricePerNight : 0;

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

      {/* Total */}
      <div className="flex justify-between border-t pt-2 mt-2">
        <span>Total :</span>

        <span className="text-(--primary-color2) font-bold text-xl">
          ${total || TransportDataDetails?.price}
        </span>
      </div>

      {!isValid && (
        <p className="text-red-500 text-sm">Select Check In & Check Out</p>
      )}
    </div>
  );
}
