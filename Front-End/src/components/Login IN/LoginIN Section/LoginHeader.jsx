const LoginHeader = () => {
  /*===========================================================================
    Start Styling LoginHeader
    =============================================================================*/
  const LoginCard_Styling = {
    Styling1: "text-center mb-10",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "w-100 h-45 m-auto  brightness-130 saturate-1000",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "text-white text-xl font-semibold",
  };

  return (
    <section className={LoginCard_Styling.Styling1}>
      <h1>
        {/* Logo */}
        <img
          src={
            "public/Images/ChatGPT_Image_Feb_9__2026__03_03_03_AM-removebg-preview.png"
          }
          className={LoginCard_Styling.Styling2}
        />
      </h1>

      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}
      {/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\//\/\/\/\/\/\ */}

      <p className={LoginCard_Styling.Styling3}>
        Login with your Tripelo account
      </p>
    </section>
  );
};

export default LoginHeader;
