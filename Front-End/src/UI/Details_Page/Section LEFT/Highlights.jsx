const Highlights = ({ Data, Title }) => {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-(--primary-color) text-shadow-lg text-shadow-black/10 mb-3">
        {Title}
      </h2>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Data?.map((item, i) => (
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-(--primary-color2) mt-1"></div>
            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}
            <p key={i} className="text-(--primary-pera)">
              {" "}
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
