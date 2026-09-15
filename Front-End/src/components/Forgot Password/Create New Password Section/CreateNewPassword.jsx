//import Component SignUPCard
import CreateNewPasswordCard from "./CreateNewPasswordCard";

const CreateNewPassword = () => {
  /*===========================================================================
    Start Styling LoginINSection
    =============================================================================*/
  const LoginINSection_Styling =
    "min-h-screen flex items-center justify-center";

  return (
    <section className={LoginINSection_Styling}>
      <CreateNewPasswordCard />
    </section>
  );
};

export default CreateNewPassword;
