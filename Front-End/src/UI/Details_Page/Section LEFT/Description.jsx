const Description = ({ Descriptions }) => (
  <div>
    <h2 className="font-semibold text-2xl text-(--primary-color) text-shadow-lg text-shadow-black/10 mb-3">
      Description
    </h2>

    {/* //////////////////////////////////////////////////////////////// */}
    {/* //////////////////////////////////////////////////////////////// */}

    {/* <p className="text-(--primary-pera) leading-7">{text}</p> */}

    {/* //////////////////////////////////////////////////////////////// */}
    {/* //////////////////////////////////////////////////////////////// */}

    {Descriptions?.map((text, i) => (
      <p key={i} className="text-(--primary-pera) leading-7 mt-5">
        {text}
      </p>
    ))}
  </div>
);

export default Description;
