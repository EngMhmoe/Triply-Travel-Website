//import React
import { useEffect } from "react";

//import formatDateInBooking
import { formatDateInBooking } from "../../../Utils/formatDateInBooking";

export default function OrderInfoWithMore({ booking, item, setSubtotal }) {
  //Step 1 ==> Vars
  const isCarOrFood =
    booking.typeCondition === "Car" || booking.typeCondition === "Food";

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const isTourOrDestination =
    booking.typeCondition === "Tour" || booking.typeCondition === "Destination";

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const isCarOrTourOrDestination =
    booking.typeCondition === "Car" || isTourOrDestination;

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  //Step 2 ==> Convert checkIn AND checkOut AND time
  const { checkIn, checkOut, formatTime } = formatDateInBooking(booking);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  const subtotalDetails = booking.total;

  useEffect(() => {
    setSubtotal(subtotalDetails);
  }, []);

  return (
    <div className="space-y-4">
      {/* PickingUp Location ==> OK */}
      {isCarOrFood && (
        <div className="flex items-center justify-between">
          <span className="font-semibold">Pick-up Location:</span>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <span>{booking.PickingUp}</span>
        </div>
      )}

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Check In ==> OK */}
      <div className="flex items-center justify-between">
        <span className="font-semibold">Check In:</span>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <span>
          {checkIn} {isCarOrFood && `at ${formatTime(booking.PickUpTime)}`}
        </span>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Check Out ==> OK */}
      {booking.typeCondition !== "Food" && (
        <div className="flex items-center justify-between">
          <span className="font-semibold">Check Out:</span>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <span>
            {checkOut} {isCarOrFood && `at ${formatTime(booking.DropOffTime)}`}
          </span>
        </div>
      )}

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Type ==> Ok */}
      <div className="flex items-center justify-between">
        <span className="font-semibold">{booking.typeCondition} Type:</span>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <span className="capitalize">{`${booking.type}`}</span>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Price ==> OK */}
      <div className="flex items-center justify-between">
        <span className="font-semibold">{booking.typeCondition} Price:</span>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <span className="capitalize">{`$${item.price} Price`}</span>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Rooms Hotel ==> OK */}
      {booking.typeCondition === "Hotel" && (
        <div className="flex items-center justify-between">
          <span className="font-semibold">Rooms :</span>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <span className="capitalize">
            {`${booking.rooms} ${booking.rooms > 1 ? "Rooms" : "Room"}`}
          </span>
        </div>
      )}

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Person  ==> OK */}
      {isCarOrTourOrDestination && (
        <div className="flex items-center justify-between">
          <span className="font-semibold">
            {booking.typeCondition === "Car" ? "Passengers" : "Travelers"}:
          </span>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <span className="capitalize">
            {`${booking.person} ${booking.rooms > 1 ? "Persons" : "Person"}`}
          </span>
        </div>
      )}

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Quantity Orders ==> OK */}
      {booking.typeCondition == "Food" && (
        <div className="flex items-center justify-between">
          <span className="font-semibold">Quantity Orders :</span>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <span className="capitalize">
            {booking.Quantity}
            {/*  */}
            {booking.Quantity > 1 ? " Orders" : " Order"}
          </span>
        </div>
      )}

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Adults & guests ==> OK */}
      {!isCarOrFood && (
        <div className="flex items-center justify-between">
          <span className="font-semibold">
            {isTourOrDestination
              ? "Adults"
              : booking.typeCondition === "Hotel"
                ? "Guests"
                : ""}
            :
          </span>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <span className="capitalize">
            {`${isTourOrDestination ? booking.adults : booking.typeCondition === "Hotel" ? booking.guests : null} ${booking.adults > 1 || booking.guests > 1 ? "Adults" : "Adult"}`}
          </span>
        </div>
      )}

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Children ==> Ok */}
      {isTourOrDestination && (
        <div className="flex items-center justify-between">
          <span className="font-semibold">Children:</span>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <span className="capitalize">
            {`${booking.children} ${booking.children > 1 ? "Children" : "Child"}`}
          </span>
        </div>
      )}

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Nights ==> OK */}
      {booking.typeCondition !== "Food" && (
        <div className="flex items-center justify-between">
          <span className="font-semibold">{booking.typeCondition} Nights:</span>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <span className="capitalize">
            {booking.nights}
            {/*  */}
            {booking.nights > 1 ? " Nights" : " Night"}
          </span>
        </div>
      )}
      {/* ))} */}
    </div>
  );
}
