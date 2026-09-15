//import Component ForgotPasswordCard
import ResetYourPasswordCard from "./ResetYourPasswordCard";

const ForgotPasswordSection = () => {
  /*===========================================================================
    Start Styling ForgotPasswordSection
    =============================================================================*/
  const ForgotPasswordSection_Styling =
    "min-h-screen flex items-center justify-center";

  return (
    <section className={ForgotPasswordSection_Styling}>
      <ResetYourPasswordCard />
    </section>
  );
};

export default ForgotPasswordSection;
