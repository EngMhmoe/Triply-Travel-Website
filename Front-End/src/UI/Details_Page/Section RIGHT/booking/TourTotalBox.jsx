import {
  calculateNights,
  calculateTotal,
} from "../../../../components/Utils/priceUtils";
import useBookingStore from "../../../../Store/bookingStore";

export default function TourTotalBox({ TourDataDetails }) {
  const { data } = useBookingStore();

  const nights = calculateNights(data.checkIn, data.checkOut);

  const travelers = data.adults + data.children;

  const total = calculateTotal(
    nights,
    TourDataDetails.price,
    data.adults,
    data.children,
  );

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

        <span className="text-(--primary-color)">{travelers}</span>
      </div>

      <div className="flex justify-between">
        <span>Total :</span>

        <span className="text-(--primary-color2) font-bold text-xl">
          ${total}
        </span>
      </div>
    </div>
  );
}
