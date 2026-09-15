export default function DetailsInfo({ DataDetailsInfo }) {
  return (
    <section
      className={
        DataDetailsInfo?.length <= 4
          ? "flex flex-wrap items-center justify-between gap-y-10 gap-x-5"
          : "hotelInfo grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2   gap-y-10 gap-x-5"
      }
    >
      {DataDetailsInfo?.map((state, index) => (
        <div key={index} className="flex items-center gap-2">
          {/* icon */}
          <h1 className="bg-(--primary-color2) text-white p-2.5 rounded-full rounded-bl-none font-black text-lg">
            {state.icon}
          </h1>

          {/* ////////////////////////////////////////////////////////// */}
          {/* ////////////////////////////////////////////////////////// */}

          {/* Data */}
          <section className="flex flex-col gap-0.5 text-sm font-semibold">
            <h1 className="text-lg">{state?.name}</h1>
            <p className=" opacity-85">{state?.Data}</p>
          </section>
        </div>
      ))}
    </section>
  );
}
