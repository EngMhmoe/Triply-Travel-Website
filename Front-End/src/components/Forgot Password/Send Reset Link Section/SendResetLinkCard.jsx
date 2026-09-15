//import Components
import SendResetLinkHeader from "./SendResetLinkHeader";
import SendResetLinkForm from "./SendResetLinkForm";

//import Toaster
import { Toaster } from "react-hot-toast";

//import framer-motion
import { motion } from "framer-motion";

const ForgotPasswordCard = () => {
  /*===========================================================================
    Start Styling ForgotPasswordCard
    =============================================================================*/
  const ForgotPasswordCard_Styling = {
    Styling1: "min-h-screen flex items-center justify-center",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2:
      "bg-black sm:px-7 px-5 pb-10 rounded-4xl shadow-xl shadow-black sm:w-125",
  };

  return (
    <section className={ForgotPasswordCard_Styling.Styling1}>
      {/* Toaster */}
      <Toaster position="top-center" />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={ForgotPasswordCard_Styling.Styling2}
      >
        {/* Component ForgotPasswordHeader */}
        <SendResetLinkHeader />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Component ForgotPasswordForm */}
        <SendResetLinkForm />
      </motion.div>
    </section>
  );
};

export default ForgotPasswordCard;
