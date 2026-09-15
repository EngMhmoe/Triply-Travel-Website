//import Components NEW
import BookedItems from "./Section Left Booked Items/BookedItems";
import BillingInfoANDOrderInfo from "./Section Right Billing Info AND Order Info/BillingInfoANDOrderInfo";

export default function BookingSummaryIsMoreOrder({
  bookingSummaryDataALL,
  booking,
}) {
  return (
    <div className="flex flex-col gap-22">
      {/* Section Left IS BookedItems ==> NO */}
      <section>
        <BookedItems bookingSummaryDataALL={bookingSummaryDataALL} />
      </section>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      {/* Section Left IS BillingInfoANDOrderInfo ==> NO */}
      <section>
        <BillingInfoANDOrderInfo booking={booking} />
      </section>
    </div>
  );
}
