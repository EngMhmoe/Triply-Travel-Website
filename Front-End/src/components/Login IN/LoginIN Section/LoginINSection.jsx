//import Component LoginCard
import LoginCard from "./LoginCard";

//import Lottie React
import Lottie from "lottie-react";
import loginLeady from "/public/animations/Login Leady.json";

const LoginINSection = () => {
  /*===========================================================================
    Start Styling LoginINSection
    =============================================================================*/
  const LoginINSection_Styling =
    "min-h-screen flex items-center  justify-center";

  return (
    <section
      className={
        "min-h-screen flex items-center flex-wrap gap-y-25 justify-around"
      }
    >
      <section>
        <Lottie style={{ height: "500px" }} animationData={loginLeady} />
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <LoginCard />
    </section>
  );
};

export default LoginINSection;
