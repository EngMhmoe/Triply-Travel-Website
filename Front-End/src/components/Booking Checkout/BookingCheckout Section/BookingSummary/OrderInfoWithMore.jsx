//import format Date
import { useEffect, useState } from "react";
import { formatDate } from "../../../Utils/formatDateInData.js";

//import calculateNights
import { calculateNights } from "../../../Utils/priceUtils";

export default function OrderInfoWithMore({
  item,
  bookingSummaryDataALL,
  setSubtotal,
}) {
  //Step 1 ==> Get formatDates
  const { checkIn, checkOut } = formatDate(item.date);

  //Step  ==> Get calculate Nights in format Date
  const clackNightsTour = calculateNights(checkIn, checkOut);

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const isTourORDestination =
    item.type === "Tour" || item.type === "Destination";

  const isALL = isTourORDestination || item.type === "Hotel";

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const totalPrice = isALL
    ? item.price * clackNightsTour * item.quantity
    : item.type === "Food"
      ? item.price * item.quantity
      : item.price * clackNightsTour;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const orderInfo = [
    { label: "Type", value: item.type },
    { label: "Check In", value: checkIn },
    { label: "Check Out", value: checkOut },

    {
      label: "Stay",
      value: `${clackNightsTour} ${clackNightsTour > 1 ? "Nights" : "Night"}`,
    },
    { label: "Price", value: `$${item.price}` },

    {
      label: isTourORDestination
        ? "Travelers"
        : item.type === "Hotel"
          ? "Rooms"
          : item.type === "Car"
            ? "Seats"
            : item.type === "Food"
              ? "Orders"
              : "",
      value: `${item.quantity}`,
    },

    {
      label: "Total Price",
      value: `$${totalPrice}`,
    },
  ];

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const subtotal = bookingSummaryDataALL.reduce((sum, item) => {
    const totalPrice = isALL
      ? item.price * clackNightsTour * item.quantity
      : item.type === "Food"
        ? item.price * item.quantity
        : item.price * clackNightsTour;

    return sum + totalPrice;
  }, 0);

  useEffect(() => {
    setSubtotal(subtotal);
  }, []);

  //Step ==> Get
  return (
    <div className="space-y-4">
      {orderInfo.map((item) => (
        <div className="flex items-center justify-between">
          <span className="font-semibold">{item.label}:</span>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
