//import React Icon
import { GrSend } from "react-icons/gr";

//import Lottie React
import Lottie from "lottie-react";
import loadingAN from "/public/animations/loading.json";

const SignUPButton = ({ loading }) => {
  return (
    <button
      type="submit"
      className="w-full bg-(--primary-color) hover:bg-(--primary-pera) text-white py-3 rounded-2xl flex items-center justify-center gap-2 transition duration-1000 cursor-pointer"
    >
      {loading ? (
        <section className="flex items-center gap-4">
          <Lottie
            style={{ width: "40px", fontWeight: "bold" }}
            animationData={loadingAN}
          />
          Loading...
        </section>
      ) : (
        <>
          <GrSend />
          Create My Account
        </>
      )}
    </button>
  );
};

export default SignUPButton;
