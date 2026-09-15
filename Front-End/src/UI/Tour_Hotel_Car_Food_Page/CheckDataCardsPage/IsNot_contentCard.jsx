//import Lottie-React
import Lottie from "lottie-react";

//import animation No-Data
import No_Data from "/public/animations/Blockchain Analysis.json";

export default function IsNot_contentCard() {
  return (
    <section className="flex justify-center relative">
      <Lottie loop={true} style={{ width: "650px" }} animationData={No_Data} />
    </section>
  );
}
