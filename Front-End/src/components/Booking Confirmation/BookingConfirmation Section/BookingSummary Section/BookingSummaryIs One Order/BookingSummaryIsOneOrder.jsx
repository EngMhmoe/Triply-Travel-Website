//import Component UI
import BillingInfo from "../../../../../UI/Booking Confirmation_Page/BillingInfo";
import OrderInfo from "../../../../../UI/Booking Confirmation_Page/OrderInfo";

//import Component NEW
import ALLTypesBookingInfo from "./ALLTypesBookingInfo";
import ALLTypesInfo from "./ALLTypesInfo";
import BookingDateANDTime from "./BookingDateANDTime";
import ALLTypesExtraServices from "./ALLTypesExtraServices";

export default function BookingSummaryIsOneOrder({
  bookingSummaryDataDetails,
  booking,
}) {
  return (
    <div className="grid md:grid-cols-2 lg:gap-10 gap-5">
      {/* Section Left ==> OK */}
      <div className="flex flex-col  gap-25">
        {/* ALLTypesBookingInfo ==> OK */}
        <ALLTypesBookingInfo
          booking={booking}
          Price={bookingSummaryDataDetails.price}
        />

        {/* ////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////// */}

        {/* BookingDateANDTime NAD BillingInfo ==> OK  */}
        <section className="flex flex-col gap-29">
          {/* BookingDateANDTime ==> OK */}
          <BookingDateANDTime
            bookingSummaryDataDetails={bookingSummaryDataDetails}
            booking={booking}
          />

          {/* BillingInfo ==> OK */}
          <BillingInfo billingInfoData={booking.billingInfo} />
        </section>
      </div>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      {/* Section Right ==> OK */}
      <div className="flex flex-col gap-25">
        {/* ALLTypesInfo ==> OK */}
        <ALLTypesInfo
          bookingSummaryDataDetails={bookingSummaryDataDetails}
          booking={booking}
        />

        {/* ////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////// */}

        {/* ALLTypesExtraServices AND  ALLTypesOrderInfo ==> OK*/}
        <div className="flex flex-col gap-25">
          {/* ExtraServices ==> OK */}
          <ALLTypesExtraServices
            services={bookingSummaryDataDetails.services}
          />

          {/* OrderInfo ==> OK */}
          <OrderInfo orderInfoData={booking.orderInfo} />
        </div>
      </div>
    </div>
  );
}
