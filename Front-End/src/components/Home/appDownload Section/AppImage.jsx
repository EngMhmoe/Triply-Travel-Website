//import Lottie animations
import Lottie from "lottie-react";
import Isometric from "../../../../public/animations/Isometric animation for UIUX design landing page..json";

//import Components
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

export default function AppImage() {
  /*===========================================================================
  Start Classes
  =============================================================================*/
  const classes = {
    Wrapper: "flex justify-center",
  };

  return (
    <FadeUpMotion>
      <div className={classes.Wrapper}>
        <Lottie animationData={Isometric} />
      </div>
    </FadeUpMotion>
  );
}
