//import Component UI
import BtnSendMassage from "../../../UI/BtnSendMassage";

//import Lottie animations
import Lottie from "lottie-react";
import doneMass from "../../../../public/animations/Check okey done.json";

//import React Icons
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from "react-icons/fa";

//import useForm
import { useForm, ValidationError } from "@formspree/react";

export default function FormContact() {
  const [state, handleSubmit] = useForm("xbdklzvd");

  /*===========================================================================
    Start Styling FormContact (2)
    =============================================================================*/
  const FormContact_Styling = {
    Styling1: "flex flex-col  gap-7 text-(--primary-pera)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "flex items-center gap-5",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3:
      "input w-full bg-transparent border border-black/10 outline outline-(--primary-color)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling4: "absolute mt-2.5 ms-3 text-(--primary-color)",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling5:
      "w-full h-38 textarea textarea-secondary border border-black/10 outline outline-(--primary-color) bg-transparent ps-9",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling6: "text-(--primary-pera) flex items-center mt-10",
  };

  // if (state.succeeded) {
  //   return <div>Thank you for signing up!</div>;
  // }

  return (
    <form onSubmit={handleSubmit} className={FormContact_Styling.Styling1}>
      <section className={FormContact_Styling.Styling2}>
        <label className={FormContact_Styling.Styling3}>
          <FaUser className="text-(--primary-color)" />
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          <input
            required
            type="text"
            name="Name"
            id="Name"
            className="grow"
            placeholder="Enter your full name"
          />
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          <ValidationError prefix="Name" field="Name" errors={state.errors} />
        </label>

        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

        <label className={FormContact_Styling.Styling3}>
          <FaEnvelope className="text-(--primary-color)" />
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          <input
            required
            id="email"
            type="email"
            name="email"
            className="grow"
            placeholder="Enter your email address"
          />
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
          <ValidationError prefix="email" field="email" errors={state.errors} />
        </label>
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <label className={FormContact_Styling.Styling3}>
        <FaTag className="text-(--primary-color)" />
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        <input
          required
          name="Subject"
          type="text"
          className="grow"
          placeholder="What is your inquiry about?"
        />
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        <ValidationError
          prefix="Subject"
          field="Subject"
          errors={state.errors}
        />
      </label>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div>
        <FaCommentDots className={FormContact_Styling.Styling4} />
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        <textarea
          required
          name="Massage"
          placeholder="Write your message here..."
          className={FormContact_Styling.Styling5}
        />
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
        <ValidationError
          prefix="Massage"
          field="Massage"
          errors={state.errors}
        />
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="w-fit">
        {/* Component BtnSendMassage */}
        <BtnSendMassage title="Send Massage" state={state.submitting} />
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {state.succeeded && (
        <div className={FormContact_Styling.Styling6}>
          <Lottie loop={false} animationData={doneMass} className="w-12" />

          <p className="text-xl">The message was sent successfully</p>
        </div>
      )}
    </form>
  );
}
