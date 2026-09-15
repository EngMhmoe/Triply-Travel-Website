//import Component UI
import InfoRow from "../../../../../../../UI/Booking Confirmation_Page/InfoRow";

//import format Date
import { formatDate } from "../../../../../../Utils/formatDateInData.js";

//import calculateNights
import { calculateNights } from "../../../../../../Utils/priceUtils";

export default function ContentBookingTour({
  tourType,
  price,
  location,
  date,
  quantity,
}) {
  //Step 1 ==> Get formatDates
  const { checkIn, checkOut } = formatDate(date);

  //Step  ==> Get calculate Nights in format Date
  const clackNightsTour = calculateNights(checkIn, checkOut);

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  //Step  ==> Get BookingInfo Tour
  const BookingInfoTour = [
    { label: "Tour Type", value: tourType },
    { label: "Check In", value: checkIn },
    { label: "Check Out", value: checkOut },
    {
      label: "Location",
      value: `${location.address}, ${location.country}`,
    },
    {
      label: "Stay",
      value: `${clackNightsTour} ${clackNightsTour > 1 ? "Nights" : "Night"}`,
    },
    { label: "Tour Price", value: `$${price}` },
    {
      label: "Travelers",
      value: `${quantity} ${quantity > 1 ? "Persons" : "Person"}`,
    },
    { label: "Total Price", value: `$${price * clackNightsTour * quantity}` },
  ];

  return (
    <section className="flex flex-col items-start">
      {BookingInfoTour.map((tour) => (
        <InfoRow key={tour.id} label={tour.label} value={tour.value} />
      ))}
    </section>
  );
}
