//import React Icon
import { FiLogIn } from "react-icons/fi";

//import Lottie React
import Lottie from "lottie-react";
import loadingAN from "/public/animations/loading.json";

const LoginButton = ({ loading }) => {
  return (
    <button
      type="submit"
      className="w-full text-xl bg-(--primary-color) hover:bg-(--primary-pera) text-white py-3 rounded-2xl flex items-center justify-center gap-2 transition duration-1000 cursor-pointer"
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
          <FiLogIn />
          Access My Account
        </>
      )}
    </button>
  );
};

export default LoginButton;
