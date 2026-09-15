//import React
import { useEffect, useState } from "react";

//import Component UI
import ActionButtons from "../../../../UI/Booking Confirmation_Page/ActionButtons";

//import Component NEW
import BookingSummaryIsOneOrder from "./BookingSummaryIs One Order/BookingSummaryIsOneOrder";
import BookingSummaryIsMoreOrder from "./BookingSummaryIs More Order/BookingSummaryIsMoreOrder";

//import motion
import { motion } from "framer-motion";

const BookingSummary = ({ handlePrint }) => {
  //Step  ==> Booking Summary IS [Details Page] OR [More Page]
  const [ISDetailsOrMore, setISDetailsOrMore] = useState("Details");

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Step  ==> Booking Summary IS [Data ALL]
  const [bookingSummaryDataALL, setBookingSummaryDataALL] = useState([]);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Step  ==> Booking Summary IS Details
  const [bookingSummaryWithDetails, setBookingSummaryWithDetails] = useState(
    {},
  );

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Step  ==> updateOrderInfo is Payment Status AND sBooking Status
  const [updateOrderInfo, setUpdateOrderInfo] = useState(false);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  //Step  ==> Get Local Storage ISDetailsOrMore
  useEffect(() => {
    const getLocalStorageCondition = localStorage.getItem("ISDetailsOrMore");

    setISDetailsOrMore(getLocalStorageCondition);
  }, []);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Step 3 ==> Get Local Storage CheckoutData ALL
  useEffect(() => {
    const getStorageCheckoutData = JSON.parse(
      localStorage.getItem("CheckoutData"),
    );

    setBookingSummaryDataALL(getStorageCheckoutData);
  }, []);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Step  ==> Get Local Storage BookingSummaryCheckOut Details
  useEffect(() => {
    const getStorageBooking = JSON.parse(
      localStorage.getItem("BookingSummaryCheckOut"),
    );

    //+++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++

    setBookingSummaryWithDetails(getStorageBooking);
  }, [updateOrderInfo]);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 30, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="bg-(--secondary-color) sm:rounded-[80px] rounded-4xl shadow-xl shadow-orange-500/50 sm:p-10 py-8 px-4 text-center"
    >
      <h2 className="md:text-4xl sm:text-3xl lg:text-5xl text-3xl font-bold text-(--primary-color) text-center mb-15">
        Booking Summary ({bookingSummaryWithDetails?.orderInfo?.orderId})
      </h2>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      {/* BookingSummaryIsOneOrder == OK */}
      {ISDetailsOrMore === "Details" &&
        bookingSummaryDataALL.map((item) => (
          <BookingSummaryIsOneOrder
            key={item.id}
            bookingSummaryDataDetails={item}
            booking={bookingSummaryWithDetails}
          />
        ))}

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      {/* BookingSummaryIsMoreOrder == NO */}
      {ISDetailsOrMore === "IsMore" && (
        <BookingSummaryIsMoreOrder
          bookingSummaryDataALL={bookingSummaryDataALL}
          booking={bookingSummaryWithDetails}
        />
      )}

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      {/* ActionButtons == OK */}
      <ActionButtons
        handlePrint={handlePrint}
        booking={bookingSummaryWithDetails}
        setUpdateOrderInfo={setUpdateOrderInfo}
      />
    </motion.div>
  );
};

export default BookingSummary;
