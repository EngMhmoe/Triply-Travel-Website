//import Components
import BookingSidebar from "./BookingSidebar";

export default function SectionRight({
  ContainerDataDetails,
  NewSectionRightContent,
  handleBooking,
  isValid,
}) {
  return (
    <div className="lg:col-span-1 space-y-6 sticky top-24">
      <BookingSidebar
        ContainerDataDetails={ContainerDataDetails}
        NewSectionRightContent={NewSectionRightContent}
        handleBooking={handleBooking}
        isValid={isValid}
      />
    </div>
  );
}
