//import Component NEwW
import BookingSummaryTOPWithDetailsANDMore from "./BookingSummaryTOPWithDetailsANDMore";
import OrderInfoWithDetails from "./OrderInfoWithDetails";
import OrderInfoWithMore from "./OrderInfoWithMore";

export default function BookingSummaryWithDetailsANDMore({
  ISDetailsOrMore,
  bookingSummaryDataALL,
  bookingSummaryWithDetails,
  setSubtotal,
}) {
  return (
    <div className="space-y-15">
      {bookingSummaryDataALL.map((item) => (
        <div
          key={item?.documentId}
          className="border-b-2 border-(--primary-color) pb-15 last:border-0 last:pb-5"
        >
          {/* TOP ==> OK */}
          <BookingSummaryTOPWithDetailsANDMore item={item} />

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* Order Info ==> OK */}
          <div className="mt-7">
            <h4 className="font-bold text-(--primary-color2) text-2xl text-shadow-sm text-shadow-black/35 mb-4 border-b border-black/40 pb-3">
              Order Info
            </h4>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            {ISDetailsOrMore === "Details" ? (
              <OrderInfoWithDetails
                booking={bookingSummaryWithDetails}
                item={item}
                setSubtotal={setSubtotal}
              />
            ) : (
              <OrderInfoWithMore
                item={item}
                bookingSummaryDataALL={bookingSummaryDataALL}
                setSubtotal={setSubtotal}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
