//import React
import { useEffect, useState } from "react";

//import Component UI
import BookingHeader from "../../../../UI/Checkout_Page/BookingHeader";

//import Component NEW
import BookingSummaryWithDetailsANDMore from "./BookingSummaryWithDetailsANDMore";
import CALCULATIONS from "./CALCULATIONS";

//==>
const BookingSummary = ({
  handleSubmit,
  orderInfo,
  setOrderInfo,
  bookingSummaryWithDetails,
}) => {
  //Step  ==> Booking Summary IS [Details Page] OR [More Page]
  const [ISDetailsOrMore, setISDetailsOrMore] = useState("Details");

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Step ==> Booking Summary IS [Data ALL]
  const [bookingSummaryDataALL, setBookingSummaryDataALL] = useState([]);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  // ==========================
  // Step  ==> CALCULATIONS
  // ==========================
  const [subtotal, setSubtotal] = useState();

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  let discount = 100;

  if (subtotal >= 60000) {
    discount = 7500;
  } else if (subtotal >= 40000) {
    discount = 5500;
  } else if (subtotal >= 20000) {
    discount = 3500;
  } else if (subtotal >= 10000) {
    discount = 2500;
  } else if (subtotal >= 5000) {
    discount = 1000;
  } else if (subtotal >= 2000) {
    discount = 300;
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const tax = subtotal * 0.1;

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const total = subtotal - discount + tax;

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  //Step 3 ==> Get Local Storage CheckoutData ALL
  useEffect(() => {
    const getStorageCheckoutData = JSON.parse(
      localStorage.getItem("CheckoutData"),
    );

    setBookingSummaryDataALL(getStorageCheckoutData);
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  //Step  ==> Get Local Storage ISDetailsOrMore
  useEffect(() => {
    const getLocalStorageCondition = localStorage.getItem("ISDetailsOrMore");

    setISDetailsOrMore(getLocalStorageCondition);
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  //Step  ==> setOrderInfo in  Local Storage
  useEffect(() => {
    setOrderInfo({
      ...orderInfo,
      subtotal: subtotal,
      discount: discount,
      tax: tax,
      total: total,
    });
  }, [subtotal, discount, tax, total]);

  return (
    <div className="sticky top-30 bg-(--secondary-color) rounded-4xl shadow shadow-red-300 sm:p-6 p-4 space-y-7">
      {/* Booking Summary Header ==> OK */}
      <BookingHeader
        title={"Reservation Summary"}
        mainTitle={"Booking Summary"}
        dec={"Review all selected services before completing payment"}
      />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* All Items ==> OK */}
      <BookingSummaryWithDetailsANDMore
        ISDetailsOrMore={ISDetailsOrMore}
        bookingSummaryDataALL={bookingSummaryDataALL}
        bookingSummaryWithDetails={bookingSummaryWithDetails}
        setSubtotal={setSubtotal}
      />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* CALCULATIONS OUT PUT ==> OK */}
      <CALCULATIONS
        subtotal={subtotal}
        discount={discount}
        tax={tax}
        total={total}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default BookingSummary;
