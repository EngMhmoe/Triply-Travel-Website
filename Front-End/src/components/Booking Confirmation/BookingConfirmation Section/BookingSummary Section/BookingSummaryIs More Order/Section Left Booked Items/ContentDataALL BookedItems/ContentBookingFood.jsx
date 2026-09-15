import React from "react";
//import Component UI
import InfoRow from "../../../../../../../UI/Booking Confirmation_Page/InfoRow";

//import format Date
import { formatDate } from "../../../../../../Utils/formatDateInData.js";

//import calculateNights
import { calculateNights } from "../../../../../../Utils/priceUtils";

export default function ContentBookingFood({
  category,
  restaurantName,
  details,
  price,
  location,
  date,
  quantity,
  services,
}) {
  //Step 1 ==> Get formatDates
  const { checkIn, checkOut } = formatDate(date);

  //Step  ==> Get calculate Nights in format Date
  const clackNightsFood = calculateNights(checkIn, checkOut);

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // details.menuInfo.mealType
  //Step  ==> Get BookingInfo Food
  const BookingInfoFood = [
    { label: "Food Type", value: category },

    { label: "Check In", value: checkIn },

    { label: "Check Out", value: checkOut },

    {
      label: "Location",
      value: `${location.address}, ${location.country}`,
    },

    //NEW
    { label: "Restaurant Name", value: restaurantName },
    { label: "Preparation Time", value: details.menuInfo.preparationTime },

    //
    {
      label: "Quantities",
      value: `${quantity} ${quantity > 1 ? "Orders" : "Order"}`,
    },

    { label: "Tour Price", value: `$${price} / Night` },

    { label: "Total Price", value: `$${price * quantity}` },
  ];

  return (
    <section className="flex flex-col items-start">
      {BookingInfoFood.map((food) => (
        <InfoRow key={food.id} label={food.label} value={food.value} />
      ))}
    </section>
  );
}
