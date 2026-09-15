//import Components NEW
import SuccessSection from "./Success Section/SuccessSection";
import BookingSummary from "./BookingSummary Section/BookingSummary";
import FadeUpMotion from "../../../UI/FreeMotions/FadeUpMotion";

//import react-to-print
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const BookingConfirmationSection = () => {
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
  });

  return (
    <div className="max-w-7xl mx-auto space-y-50 text-(--primary-pera)">
      {/* SuccessSection ==> OK */}
      <FadeUpMotion>
        <SuccessSection />
      </FadeUpMotion>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* BookingSummary ==> NO */}
      <section ref={printRef}>
        <FadeUpMotion>
          <BookingSummary handlePrint={handlePrint} />
        </FadeUpMotion>
      </section>
    </div>
  );
};

export default BookingConfirmationSection;
