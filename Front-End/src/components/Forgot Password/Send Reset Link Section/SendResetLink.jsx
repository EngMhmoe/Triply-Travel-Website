//import Component ForgotPasswordCard
import SendResetLinkCard from "./SendResetLinkCard";

const ForgotPasswordSection = () => {
  /*===========================================================================
    Start Styling ForgotPasswordSection
    =============================================================================*/
  const ForgotPasswordSection_Styling =
    "min-h-screen flex items-center justify-center";

  return (
    <section className={ForgotPasswordSection_Styling}>
      <SendResetLinkCard />
    </section>
  );
};

export default ForgotPasswordSection;
