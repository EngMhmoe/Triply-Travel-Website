//import Component UI
import InfoRow from "../../../../../../../UI/Booking Confirmation_Page/InfoRow";

//import format Date
import { formatDate } from "../../../../../../Utils/formatDateInData.js";

//import calculateNights
import { calculateNights } from "../../../../../../Utils/priceUtils";

export default function ContentBookingHotel({
  details,
  price,
  location,
  date,
  quantity,
}) {
  //Step 1 ==> Get formatDates
  const { checkIn, checkOut } = formatDate(date);

  //Step  ==> Get calculate Nights in format Date
  const clackNightsHotel = calculateNights(checkIn, checkOut);

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  //Step  ==> Get BookingInfo Hotel
  const BookingInfoHotel = [
    { label: "Hotel Type", value: details.hotelInfo.hotelType },

    { label: "Check In", value: checkIn },

    { label: "Check Out", value: checkOut },

    {
      label: "Location",
      value: `${location.address}, ${location.country}`,
    },

    {
      label: "Stay",
      value: `${clackNightsHotel} ${clackNightsHotel > 1 ? "Nights" : "Night"}`,
    },

    { label: "Hotel Price", value: `$${price} / Night` },

    {
      label: "Rooms",
      value: `${quantity} ${quantity > 1 ? "Rooms" : "Room"}`,
    },

    { label: "Total Price", value: `$${price * clackNightsHotel * quantity}` },
  ];

  return (
    <section className="flex flex-col items-start">
      {BookingInfoHotel.map((hotel) => (
        <InfoRow key={hotel.id} label={hotel.label} value={hotel.value} />
      ))}
    </section>
  );
}
