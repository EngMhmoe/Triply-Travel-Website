//import React
import { useEffect } from "react";

//import priceUtils
import {
  calculateNights,
  calculateTotal,
} from "../../../../components/Utils/priceUtils";

//import useBookingTourStore
import useBookingTourStore from "../../../../Store/useBookingTourStore";

export default function TourTotalBox({ TourDataDetails }) {
  const { booking: data, updateBooking } = useBookingTourStore();

  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  const nights = calculateNights(data.checkIn, data.checkOut);

  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  const total = calculateTotal(
    nights,
    TourDataDetails.price,
    data.adults,
    data.children,
  );

  const isValid = nights > 0;

  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    updateBooking({
      nights: nights,
      total: total,
    });
  }, [nights, total]);

  return (
    <div className="flex flex-col gap-2 bg-green-200 shadow-lg shadow-green-400 p-4 my-10 rounded-2xl text-lg font-semibold">
      <div className="flex justify-between">
        <span>Nights :</span>

        <span className="text-(--primary-color)">
          {nights} Night
          {nights > 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Travelers :</span>

        <span className="text-(--primary-color)">
          {data.person} {data.person > 1 ? "Travelers" : "Traveler"}
        </span>
      </div>

      <div className="flex justify-between border-t pt-2 mt-2">
        <span>Total :</span>

        <span className="text-(--primary-color2) font-bold text-xl">
          ${data.total || TourDataDetails.price}
        </span>
      </div>

      {!isValid && (
        <p className="text-red-500 text-sm">Select Check In & Check Out</p>
      )}
    </div>
  );
}
