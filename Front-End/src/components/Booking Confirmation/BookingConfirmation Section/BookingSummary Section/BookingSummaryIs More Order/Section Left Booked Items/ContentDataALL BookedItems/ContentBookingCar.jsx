import InfoRow from "../../../../../../../UI/Booking Confirmation_Page/InfoRow";
//import Component UI

//import format Date
import { formatDate } from "../../../../../../Utils/formatDateInData.js";

//import calculateNights
import { calculateNights } from "../../../../../../Utils/priceUtils";

export default function ContentBookingCar({
  transmission,
  price,
  location,
  date,
  brand,
  condition,
  engine,
  seats,
}) {
  //Step 1 ==> Get formatDates
  const { checkIn, checkOut } = formatDate(date);

  //Step  ==> Get calculate Nights in format Date
  const clackNightsCar = calculateNights(checkIn, checkOut);

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  //Step  ==> Get BookingInfo Car
  const BookingInfoCar = [
    { label: "Car Type", value: transmission },

    { label: "Check In", value: checkIn },

    { label: "Check Out", value: checkOut },

    {
      label: "Location",
      value: `${location.address}, ${location.country}`,
    },

    { label: "Car Brand", value: brand },

    { label: "Car Condition", value: condition },

    { label: "Car Engine", value: engine },

    {
      label: "Seats",
      value: `${seats} ${seats > 1 ? "Persons" : "Person"}`,
    },

    {
      label: "Stay",
      value: `${clackNightsCar} ${clackNightsCar > 1 ? "Nights" : "Night"}`,
    },

    { label: "Car Price", value: `$${price} / Night` },

    { label: "Total Price", value: `$${price * clackNightsCar}` },
  ];

  return (
    <section className="flex flex-col items-start">
      {BookingInfoCar.map((car) => (
        <InfoRow key={car.id} label={car.label} value={car.value} />
      ))}
    </section>
  );
}
