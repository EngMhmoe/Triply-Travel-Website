//import Component SignUPCard
import SignUPCard from "./SignUPCard";

//import Lottie React
import Lottie from "lottie-react";
import loginLeady from "/public/animations/Login Leady.json";

const SignUPSection = () => {
  /*===========================================================================
    Start Styling LoginINSection
    =============================================================================*/
  const LoginINSection_Styling =
    "min-h-screen flex items-center justify-center";

  return (
    <section
      className={
        "min-h-screen flex items-center flex-wrap gap-y-25 justify-around"
      }
    >
      <section>
        <Lottie style={{ height: "600px" }} animationData={loginLeady} />
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <SignUPCard />
    </section>
  );
};

export default SignUPSection;
