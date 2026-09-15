const ForgotPasswordHeader = () => {
  /*===========================================================================
    Start Styling ForgotPasswordHeader
    =============================================================================*/
  const ForgotPasswordHeader_Styling = {
    Styling1: "text-center mb-10",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "w-100 h-45 m-auto  brightness-130 saturate-1000",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "text-white text-xl font-semibold",
  };

  return (
    <section className={ForgotPasswordHeader_Styling.Styling1}>
      <h1>
        {/* Logo */}
        <img
          src={
            "/Images/ChatGPT_Image_Feb_9__2026__03_03_03_AM-removebg-preview.png"
          }
          className={ForgotPasswordHeader_Styling.Styling2}
        />
      </h1>

      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

      <p className={ForgotPasswordHeader_Styling.Styling3}>
        Reset your Tripelo account password
      </p>
    </section>
  );
};

export default ForgotPasswordHeader;
