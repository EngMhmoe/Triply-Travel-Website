//import Component UI
import InputField from "../../../../UI/Checkout_Page/InputField";
import BookingHeader from "../../../../UI/Checkout_Page/BookingHeader";
import BtnConfirmBooking from "../../../../UI/Checkout_Page/BtnConfirmBooking";

//import React Icons
import {
  FaCheckCircle,
  FaCreditCard,
  FaUser,
  FaLock,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

const PaymentSection = ({
  paymentMethod,
  setPaymentMethod,
  cardData,
  handleCardChange,
  handleSubmit,
}) => {
  //methods PaymentSection
  const methods = [
    {
      id: "card",
      title: "Payment With Credit Card",
      img: (
        <section className="flex items-center gap-2">
          {["paypal", "mastercard", "visa", "discover"].map((Accept, index) => {
            return (
              <img
                key={index}
                src={`/public/Images/${Accept}.svg`}
                className="w-9 h-17"
              />
            );
          })}
        </section>
      ),
    },
    {
      id: "paypal",
      title: "Payment With PayPal",
      img: <img src="/public/Images/paypal-2.svg" />,
    },
    {
      id: "payoneer",
      title: "Payment With Payoneer",
      img: <img src="/public/Images/payoneer.svg" />,
    },
  ];

  return (
    <div className="bg-(--secondary-color) rounded-4xl shadow shadow-red-300 sm:p-6 p-4  space-y-7">
      {/* Header */}
      <BookingHeader
        title={"Payment Section"}
        mainTitle={"Payment Personal Info"}
        dec={"Choose your preferred payment option to complete the reservation"}
      />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Payment Methods */}
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-2 grid-cols-1  gap-4">
        {methods.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setPaymentMethod(item.id)}
            className={`relative  rounded-3xl border-2 border-black/80 p-5 flex flex-col items-center justify-between transition-all duration-1000
            ${
              paymentMethod === item.id
                ? "border-red-400 shadow-lg shadow-red-300 rounded-4xl rounded-bl-none duration-1000 text-(--primary-color)"
                : "border-orange-300 hover:border-(--primary-color) hover:scale-108 duration-1000 cursor-pointer"
            }`}
          >
            {/* Check */}
            {paymentMethod === item.id && (
              <FaCheckCircle className="absolute top-3 left-5 text-emerald-500 text-xl border border-dashed rounded-full" />
            )}

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            {/* Icon */}
            <div>{item.img}</div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            {/* Title */}
            <span className="font-bold">{item.title}</span>
          </button>
        ))}
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ================================== */}
      {/* CREDIT CARD FORM */}
      {/* ================================== */}
      {paymentMethod === "card" && (
        <div className="space-y-5">
          {/* Row 1 */}
          {/* Card Name + Card Number */}
          <div className="grid md:grid-cols-2 gap-3">
            {/* Card Name */}
            <InputField
              label="Card Holder Name"
              type="text"
              name="holderName"
              value={cardData.holderName || ""}
              onChange={handleCardChange}
              placeholder="John Smith"
              icon={<FaUser />}
            />

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            {/* Card Number */}
            <InputField
              label="Card Number"
              type="text"
              name="numberCard"
              value={cardData.numberCard || ""}
              onChange={handleCardChange}
              placeholder="1234 5678 9012 3456"
              icon={<FaCreditCard />}
            />
          </div>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          {/* Row 2 */}
          {/* Expiry Date + CVV Password */}
          <div className="grid md:grid-cols-2 gap-3">
            {/* Expiry Date */}
            <InputField
              label="Expiry Date"
              type="text"
              name="expiryDate"
              value={cardData.expiryDate || ""}
              onChange={handleCardChange}
              placeholder="MM/YY"
              icon={<FaCalendarAlt />}
            />

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            {/* CVV Password */}
            <InputField
              label="CVV Password"
              type="password"
              name="cvvPassword"
              value={cardData.cvvPassword || ""}
              onChange={handleCardChange}
              placeholder="12345"
              icon={<FaLock />}
            />
          </div>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          {/* Button */}
          <BtnConfirmBooking
            handleSubmit={handleSubmit}
            title={"Confirm Booking"}
          />
        </div>
      )}

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ================================== */}
      {/* PAYPAL */}
      {/* ================================== */}
      {paymentMethod === "paypal" && (
        <div className="space-y-5">
          {/* Row  */}
          {/* Email + Password */}
          <div className="grid md:grid-cols-2 gap-3">
            <InputField
              label="Email Address"
              type="email"
              name="paypalEmail"
              value={cardData.paypalEmail || ""}
              onChange={handleCardChange}
              placeholder="paypal@email.com"
              icon={<FaEnvelope />}
            />

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <InputField
              label="Password"
              type="password"
              name="paypalPassword"
              value={cardData.paypalPassword || ""}
              onChange={handleCardChange}
              placeholder="********"
              icon={<FaLock />}
            />
          </div>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          {/* Button */}
          <BtnConfirmBooking
            handleSubmit={handleSubmit}
            title={"Login Account"}
          />
        </div>
      )}

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ================================== */}
      {/* PAYONEER */}
      {/* ================================== */}
      {paymentMethod === "payoneer" && (
        <div className="space-y-5">
          {/* Row  */}
          {/* Email + Password */}
          <div className="grid md:grid-cols-2 gap-3">
            <InputField
              label="Email Address"
              type="email"
              name="payoneerEmail"
              value={cardData.payoneerEmail || ""}
              onChange={handleCardChange}
              placeholder="payoneer@email.com"
              icon={<FaEnvelope />}
            />

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <InputField
              label="Password"
              type="password"
              name="payoneerPassword"
              value={cardData.payoneerPassword || ""}
              onChange={handleCardChange}
              placeholder="********"
              icon={<FaLock />}
            />
          </div>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          {/* Button */}
          <BtnConfirmBooking
            handleSubmit={handleSubmit}
            title={"Login Account"}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentSection;
