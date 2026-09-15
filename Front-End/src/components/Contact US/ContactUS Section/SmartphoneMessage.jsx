//import Lottie animations
import Lottie from "lottie-react";
import message from "/public/animations/Smartphone message.json";

export default function SmartphoneMessage() {
  /*===========================================================================
    Start Styling SmartphoneMessage
    =============================================================================*/
  const SmartphoneMessage_Styling = "sm:w-100 w-80";

  return (
    <Lottie animationData={message} className={SmartphoneMessage_Styling} />
  );
}
