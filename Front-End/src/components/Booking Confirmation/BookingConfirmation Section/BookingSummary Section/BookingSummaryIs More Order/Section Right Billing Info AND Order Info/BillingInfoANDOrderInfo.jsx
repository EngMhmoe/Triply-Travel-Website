//import React
import { useEffect, useState } from "react";

//import Components UI
import BillingInfo from "../../../../../../UI/Booking Confirmation_Page/BillingInfo";
import OrderInfo from "../../../../../../UI/Booking Confirmation_Page/OrderInfo";

export default function BillingInfoANDOrderInfo({ booking }) {
  return (
    <section className="grid md:grid-cols-2 lg:gap-15 md:gap-10 gap-5">
      {/* BillingInfo ==> OK */}
      <BillingInfo billingInfoData={booking.billingInfo} />

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      {/* OrderInfo ==> OK */}
      <OrderInfo orderInfoData={booking.orderInfo} />
    </section>
  );
}
