//import motion
import { motion } from "framer-motion";
import { useState } from "react";

//import React Icons
import { FaPrint, FaTimesCircle } from "react-icons/fa";

//import Component UI
import ModakAddToCartAndDelete from "../ModelAddToCart&Delete";

//import React Hooks
import { useItemActions } from "../../Hooks/useItemActions";
import { useToast } from "../../Hooks/useToast";

//import Toaster
import { Toaster } from "react-hot-toast";

const ActionButtons = ({ handlePrint, booking, setUpdateOrderInfo }) => {
  //modal add || delete
  const [modal, setModal] = useState(null); // add | delete

  //Hook is useToast
  const { toastSuccess } = useToast();

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  // Hook is useCartActions
  const { ShowModelDelete } = useItemActions({
    //
    get: null,
    set: null,

    //
    setModal: setModal,

    //
    selectItemId: null,
    setSelectItemId: null,

    //
    textToast: null,
    conditionConfirmDelete: null,
  });

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  //confirmDelete
  const confirmDelete = () => {
    setUpdateOrderInfo(true);

    // toast Alert Error
    toastSuccess("Booking cancelled successfully.");

    // block model
    setModal(null);

    const NEWOrderInfoUpdate = {
      ...booking.orderInfo,
      bookingStatus: "Cancelled",
      paymentStatus: "Refunded",
    };

    const NEWBookingUpdate = { ...booking, orderInfo: NEWOrderInfoUpdate };

    localStorage.setItem(
      "BookingSummaryCheckOut",
      JSON.stringify(NEWBookingUpdate),
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-15">
      <Toaster />
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
        onClick={handlePrint}
        className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer"
      >
        <FaPrint /> Print Booking{" "}
      </motion.button>
      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}
      {booking?.orderInfo?.bookingStatus !== "Cancelled" && (
        <motion.button
          onClick={ShowModelDelete}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-(--primary-color2) text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer"
        >
          {" "}
          <FaTimesCircle /> Cancel Booking{" "}
        </motion.button>
      )}{" "}
      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}
      {/* 🧊 MODAL */}
      <ModakAddToCartAndDelete
        modal={modal}
        confirmDelete={confirmDelete}
        setModal={setModal}
        ContentConfirmDelete={"Are you sure you want to cancel this booking ?"}
      />
    </div>
  );
};
export default ActionButtons;
