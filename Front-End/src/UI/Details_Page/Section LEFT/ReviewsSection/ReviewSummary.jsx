//import Components
import { FaStar } from "react-icons/fa";

export default function ReviewSummary({ initialReviews }) {
  const totalReviews = initialReviews?.length;

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  const averageRating =
    totalReviews > 0
      ? (
          initialReviews.reduce((acc, item) => acc + item.rating, 0) /
          totalReviews
        ).toFixed(1)
      : 0;

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  const starPercentages = [5, 4, 3, 2, 1].map((star) => {
    const count = initialReviews?.filter(
      (item) => Math.floor(item.rating) === star,
    ).length;

    return {
      star,
      percent: totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0,
    };
  });

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  return (
    <section>
      <h1 className="font-semibold text-2xl text-(--primary-color) text-shadow-lg text-shadow-black/10  mb-4">
        Reviews
      </h1>

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <div className="flex flex-wrap justify-center lg:gap-10 gap-5 items-center">
        <div className="flex flex-col  gap-2.5   bg-white p-6 rounded-3xl shadow text-center">
          <h2 className="text-5xl font-bold text-(--primary-color2) text-shadow-lg text-shadow-black/20">
            {averageRating}
          </h2>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={
                  star <= Math.round(averageRating)
                    ? "text-yellow-500 drop-shadow"
                    : "text-(--primary-pera) opacity-30 drop-shadow"
                }
              />
            ))}
          </div>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          <p className="text-md text-(--primary-pera) font-semibold">
            Base On {totalReviews} Review
          </p>
        </div>

        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}

        <div className="flex-1">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-6">
              <section className="flex items-center gap-2">
                {" "}
                {[1, 2, 3, 4, 5].map((target, i) =>
                  target === 0 ? (
                    <FaStar
                      key={i}
                      className="text-(--primary-pera) opacity-30 drop-shadow"
                    />
                  ) : (
                    <FaStar key={i} className="text-yellow-500 drop-shadow" />
                  ),
                )}
              </section>

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              <section className="flex items-center gap-2">
                {" "}
                {[1, 2, 3, 4, 0].map((target, i) =>
                  target === 0 ? (
                    <FaStar
                      key={i}
                      className="text-(--primary-pera) opacity-30 drop-shadow"
                    />
                  ) : (
                    <FaStar key={i} className="text-yellow-500 drop-shadow" />
                  ),
                )}
              </section>

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              <section className="flex items-center gap-2">
                {" "}
                {[1, 2, 3, 0, 0].map((target, i) =>
                  target === 0 ? (
                    <FaStar
                      key={i}
                      className="text-(--primary-pera) opacity-30 drop-shadow"
                    />
                  ) : (
                    <FaStar key={i} className="text-yellow-500 drop-shadow" />
                  ),
                )}
              </section>

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              <section className="flex items-center gap-2">
                {" "}
                {[1, 2, 0, 0, 0].map((target, i) =>
                  target === 0 ? (
                    <FaStar
                      key={i}
                      className="text-(--primary-pera) opacity-30 drop-shadow"
                    />
                  ) : (
                    <FaStar key={i} className="text-yellow-500 drop-shadow" />
                  ),
                )}
              </section>

              {/* //////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////// */}

              <section className="flex items-center gap-2">
                {" "}
                {[1, 0, 0, 0, 0].map((target, i) =>
                  target === 0 ? (
                    <FaStar
                      key={i}
                      className="text-(--primary-pera) opacity-30 drop-shadow"
                    />
                  ) : (
                    <FaStar key={i} className="text-yellow-500 drop-shadow" />
                  ),
                )}
              </section>
            </div>

            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}

            <section className="flex flex-col gap-4 w-full">
              {starPercentages.map((item) => (
                <section key={item.star} className="flex items-center gap-4">
                  <progress
                    className="progress progress-error w-full"
                    value={item.percent}
                    max="100"
                  />

                  <h1 className="text-(--primary-pera) font-semibold">
                    {item.percent}%
                  </h1>
                </section>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
