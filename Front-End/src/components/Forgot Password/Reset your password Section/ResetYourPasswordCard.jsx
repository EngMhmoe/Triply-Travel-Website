//import Components
import ResetYourPasswordHeader from "./ResetYourPasswordHeader";
import ResetYourPasswordForm from "./ResetYourPasswordForm";
import LinkAccountANDcode from "./LinkAccountANDcode";

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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={ForgotPasswordCard_Styling.Styling2}
      >
        {/* Component ForgotPasswordHeader */}
        <ResetYourPasswordHeader />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Component ForgotPasswordForm */}
        <ResetYourPasswordForm />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Component Link Account AND code */}
        <LinkAccountANDcode
          des={"Didn’t receive a code"}
          NameLink={"Send again"}
          link={"/SendResetLink_Page"}
        />
      </motion.div>
    </section>
  );
};

export default ForgotPasswordCard;
