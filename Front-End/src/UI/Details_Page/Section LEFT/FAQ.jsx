const FAQ = ({ faq }) => {
  return (
    <div>
      <h2 className="font-semibold text-4xl text-(--primary-color) text-shadow-lg text-shadow-black/10  mb-5">
        Faq’s
      </h2>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <div className="flex flex-col gap-7 text-white">
        {faq?.map((item, index) => (
          <div
            key={item.id}
            className="collapse collapse-plus bg-base-100 border-2 border-base-300 shadow-md"
          >
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked={item?.defaultChecked}
            />

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <div className="flex items-center gap-3 collapse-title  sm:text-xl text-lg text-shadow-lg font-bold">
              <div className="bg-(--primary-color) w-10 h-10 font-bold flex justify-center items-center rounded-full rounded-bl-none border-5 border-green-500 border-dashed text-white ">
                0{index + 1}
              </div>

              <h1>{item?.question}</h1>
            </div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <div className="collapse-content">{item?.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
