//import Components UI
import Header_Title_MainTitle from "../Header Title & MainTitle/Header_Title_MainTitle";

export default function BookingHeader({ title, mainTitle, dec }) {
  return (
    <div>
      {/* ===== Component Header_Title_MainTitle ===== */}
      <Header_Title_MainTitle title={title} mainTitle1={mainTitle} />

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      <p className="mt-2">{dec}.</p>
    </div>
  );
}
