//import Hook UseState
import { useState } from "react";

//import Components
import SendResetLinkButton from "./SendResetLinkButton";

//import React Icons
import { FiMail } from "react-icons/fi";

//import toast
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please fill all fields");

      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Login successful");

      setLoading(false);
    }, 1500);

    Navigate("/ResetYourPassword_Page");
  };

  /*===========================================================================
    Start Styling ForgotPasswordForm
    =============================================================================*/
  const ForgotPasswordForm_Styling = {
    Styling1: "flex flex-col gap-1",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "flex flex-col gap-2",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "text-(--primary-color) text-md font-semibold",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4: "relative mb-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5:
      "absolute left-3 top-1/2 -translate-y-1/2 text-(--primary-color2)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling6:
      "w-full border rounded-2xl py-3 pl-10 pr-10 outline-none focus:border-(--primary-color) bg-white",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={ForgotPasswordForm_Styling.Styling1}
    >
      {/* Component LoginInput */}
      <section className={ForgotPasswordForm_Styling.Styling2}>
        <label className={ForgotPasswordForm_Styling.Styling3}>
          Email Address
        </label>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

        <div className={ForgotPasswordForm_Styling.Styling4}>
          <span className={ForgotPasswordForm_Styling.Styling5}>
            <FiMail />
          </span>

          <input
            type="email"
            placeholder={"Enter your account email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={ForgotPasswordForm_Styling.Styling6}
            required
          />
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Component LoginButton */}
      <SendResetLinkButton loading={loading} />
    </form>
  );
};

export default ForgotPasswordForm;
