//import ReactBits in FuzzyText
import FuzzyText from "../../../ReactBits/FuzzyText";

//import React Icons
import { IoHome } from "react-icons/io5";

export default function PageNotFoundSection() {
  return (
    <section className="flex flex-col justify-center gap-15 items-center">
      <FuzzyText
        baseIntensity={0.38}
        hoverIntensity={0.14}
        enableHover
        color={"#ff6200"}
        className="cursor-pointer"
      >
        404
      </FuzzyText>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      <div className="flex flex-col justify-center items-center gap-5 text-(--primary-pera)">
        <h2 className="text-4xl font-bold">Opos... Page Not Found!</h2>

        {/* ////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////// */}

        <p className="text-xl font-semibold">
          The page you looking for not found may be it not exist or removed.
        </p>
      </div>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      <a href="/">
        <button className="btn bg-(--primary-color2) text-white text-lg p-5 flex items-center gap-2">
          Go Back Home <IoHome />
        </button>
      </a>
    </section>
  );
}
