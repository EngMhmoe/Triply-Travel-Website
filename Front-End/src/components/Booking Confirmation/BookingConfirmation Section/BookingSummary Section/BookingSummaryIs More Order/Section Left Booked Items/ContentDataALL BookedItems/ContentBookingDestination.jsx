//import Component UI
import InfoRow from "../../../../../../../UI/Booking Confirmation_Page/InfoRow";

//import format Date
import { formatDate } from "../../../../../../Utils/formatDateInData.js";

//import calculateNights
import { calculateNights } from "../../../../../../Utils/priceUtils";

export default function ContentBookingDestination({
  category,
  tours,
  hotels,
  transports,
  price,
  location,
  date,
  quantity,
  services,
}) {
  //Step 1 ==> Get formatDates
  const { checkIn, checkOut } = formatDate(date);

  //Step  ==> Get calculate Nights in format Date
  const clackNightsTour = calculateNights(checkIn, checkOut);

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  //Step  ==> Get BookingInfo Destination
  const BookingInfoDestination = [
    { label: "Destination Type", value: category },
    { label: "Check In", value: checkIn },
    { label: "Check Out", value: checkOut },
    {
      label: "Location",
      value: `${location.city}, ${location.country}`,
    },

    //NEW
    { label: "Tours", value: tours },
    { label: "Hotels", value: hotels },
    { label: "Transports", value: transports },

    //
    {
      label: "Stay",
      value: `${clackNightsTour} ${clackNightsTour > 1 ? "Nights" : "Night"}`,
    },
    { label: "Destination Price", value: `$${price} / Night` },

    {
      label: "Travelers",
      value: `${quantity} ${quantity > 1 ? "Persons" : "Person"}`,
    },

    { label: "Total Price", value: `$${price * clackNightsTour * quantity}` },
  ];

  return (
    <section className="flex flex-col items-start">
      {BookingInfoDestination.map((Destination) => (
        <InfoRow
          key={Destination.id}
          label={Destination.label}
          value={Destination.value}
        />
      ))}
    </section>
  );
}
