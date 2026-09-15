//import React Icons
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SocialLogin = () => {
  /*===========================================================================
    Start Styling SocialLogin
    =============================================================================*/
  const SocialLogin_Styling = {
    Styling1: "flex items-center gap-4 my-6",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "flex-1 h-px bg-gray-200",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "text-gray-400 text-sm",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4:
      "w-full border border-(--primary-color) cursor-pointer hover:text-black hover:border-white hover:rounded-tr-4xl hover:rounded-bl-4xl hover:rounded-none duration-1500 py-3 rounded-2xl flex items-center justify-center gap-3 mb-4 hover:bg-white text-white",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5: "text-blue-600",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling6:
      "w-full border border-(--primary-color) cursor-pointer hover:text-black hover:border-white hover:rounded-br-4xl hover:rounded-tl-4xl hover:rounded-none duration-1500 py-3 rounded-2xl flex items-center justify-center gap-3 mb-4 hover:bg-white text-white",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling7: "text-center text-sm mt-6 text-gray-400",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling8:
      "text-(--primary-color2) hover:text-(--primary-color) duration-1000 ml-1 cursor-pointer",
  };

  return (
    <section>
      <div className={SocialLogin_Styling.Styling1}>
        <div className={SocialLogin_Styling.Styling2}></div>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

        <span className={SocialLogin_Styling.Styling3}>Or continue with</span>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

        <div className={SocialLogin_Styling.Styling2}></div>
      </div>

      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

      <button className={SocialLogin_Styling.Styling4}>
        <FaFacebookF className={SocialLogin_Styling.Styling5} />
        Continue with Facebook
      </button>

      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

      <button className={SocialLogin_Styling.Styling6}>
        <FcGoogle />
        Continue with Google
      </button>

      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

      <p className={SocialLogin_Styling.Styling7}>
        Don't have an account?
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        <Link to="/signUp_Page">
          <span className={SocialLogin_Styling.Styling8}>Sign Up</span>
        </Link>
      </p>
    </section>
  );
};

export default SocialLogin;
