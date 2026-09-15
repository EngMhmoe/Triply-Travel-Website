//import Component UI
import BtnConfirmBooking from "../../../../UI/Checkout_Page/BtnConfirmBooking";

//import react icon
import { FaArrowRight } from "react-icons/fa";

export default function CALCULATIONS({
  subtotal,
  discount,
  tax,
  total,
  handleSubmit,
}) {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="border-b border-black/40 pb-3 text-2xl font-bold text-(--primary-color)">
        <h1>Booking Payment</h1>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Rows */}
      <div className="space-y-4 pt-2 font-semibold">
        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <span>Subtotal :</span>

          <span className="font-bold">
            {/* ${subtotal.toFixed(2)} */}${subtotal}
          </span>
        </div>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        {/* Discount */}
        <div className="flex justify-between items-center">
          <span>Discount :</span>

          <span className="font-bold">
            {/* ${discount.toFixed(2)} */}${discount}
          </span>
        </div>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        {/* Tax */}
        <div className="flex justify-between items-center">
          <span>Tax / VAT :</span>

          <span className="font-bold">
            ${tax.toFixed(2)}
            {/* ${tax} */}
          </span>
        </div>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        {/* UBI */}
        <div className="flex justify-between items-center">
          <span>UBI Fees :</span>

          <span className="font-bold">Included</span>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Total Amount */}
      <div className="border-t border-(--primary-color) pt-5">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total Amount :</span>

          <span className="text-xl font-bold text-(--primary-color2)">
            {/* ${total.toFixed(2)} */}${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Button */}
      {/* Button */}
      <BtnConfirmBooking
        handleSubmit={handleSubmit}
        title={"Confirm Booking"}
      />
    </div>
  );
}
