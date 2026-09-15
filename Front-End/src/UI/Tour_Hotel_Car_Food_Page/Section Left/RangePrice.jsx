//import React
import { useState } from "react";

//import Components UI
import Tour_Title from "./Tour_Title";
import Line_HR from "./Line_HR";
import FadeUpMotion from "../../FreeMotions/FadeUpMotion";

export default function RangePrice({
  title,
  FunctionFilterCardWithSearch,
  t = () => {},
}) {
  //step  ==> [Get value RangePrice]
  const [valueRangePrice, setValueRangePrice] = useState(0);

  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

  return (
    <FadeUpMotion>
      <section>
        {/* Title ==> OK */}
        <Tour_Title Title={title} t={t} />

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* HR ==> OK */}
        <Line_HR />

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* Value Price ==> OK */}
        <p>$ {valueRangePrice}</p>

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* Input Range Value Price ==> OK */}
        <input
          type="range"
          min={0}
          max={10000}
          step={1}
          value={valueRangePrice}
          ////////////////////////////////////
          ////////////////////////////////////

          onChange={(e) => {
            FunctionFilterCardWithSearch(
              //وكمان تأكد إن القيمة اللي بتيجي من الـ <input type="range"> رقم مش String.
              Number(e.target.value),
            );

            ////////////////////////////////////////////////////
            ////////////////////////////////////////////////////

            //وكمان تأكد إن القيمة اللي بتيجي من الـ <input type="range"> رقم مش String.
            setValueRangePrice(Number(e.target.value));
          }}
          className="w-full cursor-pointer accent-(--primary-color2)"
        />
      </section>
    </FadeUpMotion>
  );
}
