import { useEffect } from "react";
import useBookingFoodStore from "../../../../Store/useBookingFoodStore";

export default function FoodTotalBox({ RestaurantsDataDetails }) {
  const { booking, updateBooking } = useBookingFoodStore();

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  // Price
  const pricePerNight = RestaurantsDataDetails?.price ?? 0;

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  // Total
  const total = booking.Quantity > 0 ? booking.Quantity * pricePerNight : 0;

  useEffect(() => {
    updateBooking({
      total: total,
    });
  }, [total]);

  return (
    <div className="flex flex-col gap-2 bg-green-200 shadow-lg shadow-green-400 p-4 my-10 rounded-2xl text-lg font-semibold">
      {/* Orders */}
      <div className="flex justify-between">
        <span>Orders :</span>

        <span className="text-(--primary-color)">
          {booking.Quantity}
          {booking.Quantity !== 1 ? " Orders" : " Order"}
        </span>
      </div>

      {/* Total */}
      <div className="flex justify-between border-t pt-2 mt-2">
        <span>Total :</span>

        <span className="text-(--primary-color2) font-bold text-xl">
          ${total || RestaurantsDataDetails.price}
        </span>
      </div>
    </div>
  );
}
