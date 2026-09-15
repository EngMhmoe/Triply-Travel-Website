//import react Hooks
import { useEffect, useState } from "react";

//import Component UI
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

//import Components NEW
import BookingForm from "./BookingForm/BookingForm";
import PaymentSection from "./PaymentSection/PaymentSection";
import BookingSummary from "./BookingSummary/BookingSummary";

//import framer-motion
import { motion } from "framer-motion";

//import Hook is useToast
import { useToast } from "../../../Hooks/useToast";

//import useNavigate
import { useNavigate } from "react-router-dom";

//import Toaster
import { Toaster } from "react-hot-toast";

const CheckoutPage = ({ bookingSummaryWithDetails }) => {
  //formData

  // ==> بدل ما اعمل كده
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   country: "",
  //   age: undefined,
  //   city: "",
  //   state: "",
  //   zipCode: undefined,
  //   comment: "",
  // });

  // input لكل name اعمل كده احسن ليه =>> عشان انا عامل
  // ==> تمام setFormData فى ال [e.target.name] ده هو الى هيكون المتغير تمام ليه بردو عشان انا عمل كده name ف ال
  const [formData, setFormData] = useState({});

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  //Condition paymentMethod is = [Card , PayPal , Payoneer]
  const [paymentMethod, setPaymentMethod] = useState("card");

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  //cardData
  const [cardData, setCardData] = useState({});

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  //toastError
  const { toastError } = useToast();

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  //Navigate
  const Navigate = useNavigate();

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  //function handleChange FormData
  const handleChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // ===> output ==> const [formData, setFormData] = useState({name: value, name: value});
    });
  };

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  //Function handleChange FormCardData
  const handleCardChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value, // ===> output ==> const [formData, setFormData] = useState({name: value, name: value});
    });
  };

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  //orderId
  const orderId = `#Trip-${new Date().getFullYear()}-${Math.floor(
    1000 + Math.random() * 9000,
  )}`;

  //create orderInfo
  const [orderInfo, setOrderInfo] = useState({
    orderId: orderId,

    bookingStatus: "Confirmed",

    paymentStatus: "Completed",

    paymentMethod: paymentMethod,

    ServiceFee: "Included",

    subtotal: undefined,

    discount: undefined,

    tax: undefined,

    total: undefined,
  });

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

  //Function handleSubmit in Data
  const handleSubmit = () => {
    event.stopPropagation();

    //Step ==> Not Successfully

    if (paymentMethod === "card") {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.address ||
        !formData.age ||
        !formData.city ||
        !formData.email ||
        !formData.state ||
        !formData.zipCode ||
        //
        !cardData.holderName ||
        !cardData.numberCard ||
        !cardData.expiryDate ||
        !cardData.cvvPassword
      ) {
        toastError("Please Fill Required Fields.");
        return;
      }
    }

    if (paymentMethod === "paypal") {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.address ||
        !formData.age ||
        !formData.city ||
        !formData.email ||
        !formData.state ||
        !formData.zipCode ||
        //
        !cardData.paypalEmail ||
        !cardData.paypalPassword
      ) {
        toastError("Please Fill Required Fields.");
        return;
      }
    }

    if (paymentMethod === "payoneer") {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.address ||
        !formData.age ||
        !formData.city ||
        !formData.email ||
        !formData.state ||
        !formData.zipCode ||
        //
        !cardData.payoneerEmail ||
        !cardData.payoneerPassword
      ) {
        toastError("Please Fill Required Fields.");
        return;
      }
    }

    //ADD NEWOrderInfo IN bookingSummary With Details
    const NEWOrderInfo = {
      ...bookingSummaryWithDetails,
      orderInfo: orderInfo,
      billingInfo: formData,
    };

    //NEW setItem in BookingSummaryCheckOut ()
    localStorage.setItem(
      "BookingSummaryCheckOut",
      JSON.stringify(NEWOrderInfo),
    );

    Navigate("/BookingConfirmation_page");
  };

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-5 text-(--primary-pera)">
      <Toaster />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* LEFT SIDE ==> OK */}
      <motion.form
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 20 }}
        transition={{ duration: 3 }}
        className="space-y-10 lg:col-span-2 w-full"
      >
        {/* BookingForm ==> OK */}

        <FadeUpMotion>
          <BookingForm
            formData={formData}
            handleChangeFormData={handleChangeFormData}
          />
        </FadeUpMotion>

        {/* /////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////// */}

        <FadeUpMotion>
          {/* PaymentSection ==> OK */}
          <PaymentSection
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            cardData={cardData}
            handleCardChange={handleCardChange}
            handleSubmit={handleSubmit}
          />
        </FadeUpMotion>
      </motion.form>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* RIGHT SIDE ==> OK */}
      <FadeUpMotion>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 20 }}
          transition={{ duration: 3 }}
          className="sticky top-50 w-full"
        >
          <BookingSummary
            handleSubmit={handleSubmit}
            orderInfo={orderInfo}
            setOrderInfo={setOrderInfo}
            bookingSummaryWithDetails={bookingSummaryWithDetails}
          />
        </motion.div>
      </FadeUpMotion>
    </div>
  );
};

export default CheckoutPage;
