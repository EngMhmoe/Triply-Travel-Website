//import lottie-react
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../public/animations/Check okey done.json";
import { Link } from "react-router-dom";

export default function PasswordSuccessful() {
  return (
    <section>
      <div className="flex justify-center items-center h-dvh text-center bg-black">
        <div className="flex flex-col bg-white  border border-gray-200 shadow-md shadow-white  rounded-2xl pt-15 pb-10 sm:w-fit w-full mx-5">
          <Lottie
            className="w-25 m-auto"
            loop="false"
            animationData={groovyWalkAnimation}
          />
          {/* //////////////////////////////////// */}
          {/* //////////////////////////////////// */}
          {/* //////////////////////////////////// */}
          <div className="flex flex-col gap-10">
            {" "}
            <div className="sm:px-35 flex flex-col gap-1">
              <h1 className="font-bold text-[24px] text-(--primary-color)">
                Password changed
              </h1>

              <p className="text-[15px] text-(--primary-pera)">
                Your password has been changed successfully
              </p>
            </div>
            {/* //////////////////////////////////// */}
            {/* //////////////////////////////////// */}
            {/* //////////////////////////////////// */}
            <div className="sm:mx-15 mx-10">
              <Link to={"/login_Page"}>
                {" "}
                <button className="w-full bg-(--primary-color) hover:bg-(--primary-pera) text-white py-3 rounded-2xl flex items-center justify-center gap-2 transition duration-1000 cursor-pointer text-2xl font-bold">
                  Finish
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
