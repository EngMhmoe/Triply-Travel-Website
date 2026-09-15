//import React ICons
import { GoArrowSwitch } from "react-icons/go";

//import server_URL Strapi
import { BASE_URL } from "../../../services/APIs/server_URL";

const Itinerary = ({ title, Data }) => {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-(--primary-color) text-shadow-lg text-shadow-black/10 mb-10">
        {title}
      </h2>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <div className="relative border-l-2 border-(--primary-color) border-dashed pl-3 space-y-20">
        {Data?.map((item, index) => (
          <div key={item.id} className="relative pl-17">
            <div className="absolute -left-9.5 top-0 bg-green-200 shadow-lg shadow-black/70 p-1 rounded-full">
              <div className="w-12 h-12 bg-(--primary-color) text-white rounded-full rounded-bl-none  flex items-center justify-center text-lg font-bold">
                0{index + 1}
              </div>
            </div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <div className="flex flex-col gap-4 ">
              <img
                src={`${BASE_URL}${item.image.url}`}
                className="w-50 h-40 rounded-4xl rounded-bl-none object-cover"
              />

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              <div className="flex flex-col gap-2 text-(--primary-pera)">
                <p className="text-lg font-semibold text-(--primary-color)">
                  {title === "Itinerary" && item.time}
                </p>

                {/* //////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////// */}

                <h3
                  className={
                    title === "Itinerary"
                      ? "font-bold text-2xl text-shadow-md text-shadow-black/20"
                      : "flex sm:flex-row flex-col items- gap-3 font-bold text-2xl text-shadow-md text-shadow-black/20 text-(--primary-color2)"
                  }
                >
                  {title === "Itinerary" ? (
                    ` DAY ${item.day} - `
                  ) : (
                    <div className="flex  items-end gap-3">
                      <h3>
                        {" "}
                        {`${item.duration} ${item.duration === 1 ? "Hour" : "Hours"}`}
                      </h3>

                      {/* //////////////////////////////////////////////////////////////// */}
                      {/* //////////////////////////////////////////////////////////////// */}

                      <GoArrowSwitch className="text-(--primary-pera) font-bold" />
                    </div>
                  )}
                  {item.title}
                </h3>

                {/* //////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////// */}

                <div>
                  {title === "Itinerary" ? null : (
                    <div className="flex items-center gap-7">
                      {/* Price */}
                      <section className={"flex items-center gap-1"}>
                        <h1
                          className={"text-(--primary-pera) text-xl font-bold"}
                        >
                          Start
                        </h1>

                        {/* //////////////////////////////////////////////////////////////// */}
                        {/* //////////////////////////////////////////////////////////////// */}

                        <h2
                          className={
                            "text-2xl font-bold text-(--primary-color)"
                          }
                        >
                          ${item.price === 0 ? "Free" : item.price}
                        </h2>
                      </section>

                      {/* //////////////////////////////////////////////////////////////// */}
                      {/* //////////////////////////////////////////////////////////////// */}

                      {/* Rating */}
                      {title === "Top Attractions" && (
                        <section
                          className={
                            "flex flex-wrap  items-center gap-2 text-md font-semibold text-(--primary-pera) my-3"
                          }
                        >
                          <div
                            className={
                              "flex items-center gap-1 rounded-full rounded-bl-none bg-(--primary-color) font-bold text-[#ffffff] w-fit py-[0.5px] px-2.5  text-sm"
                            }
                          >
                            ☆ {item.rating}
                          </div>
                        </section>
                      )}
                    </div>
                  )}
                </div>

                {/* //////////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////////// */}

                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
