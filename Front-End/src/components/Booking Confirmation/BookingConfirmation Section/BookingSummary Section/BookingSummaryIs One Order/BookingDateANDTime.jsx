//import Component UI
import Header from "../../../../../UI/Booking Confirmation_Page/Header";
import InfoRow from "../../../../../UI/Booking Confirmation_Page/InfoRow";

//import formatDateInBooking
import { formatDateInBooking } from "../../../../Utils/formatDateInBooking";

const BookingDateANDTime = ({ booking }) => {
  //Step 1 ==> Vars
  const isCarOrFood =
    booking.typeCondition === "Car" || booking.typeCondition === "Food";

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  //Step 2 ==> Convert checkIn AND checkOut AND time
  const { checkIn, checkOut, formatTime } = formatDateInBooking(booking);

  return (
    <div>
      <Header
        title={
          <h1>
            Booking Date <span className="text-(--primary-pera)">&</span> Time
          </h1>
        }
      />

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {!isCarOrFood && (
        <section>
          <InfoRow label="Check In" value={checkIn} />
          <InfoRow label="Check Out" value={checkOut} />
        </section>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {isCarOrFood && (
        <section>
          <InfoRow
            label="Check In"
            value={`${checkIn}, at ${formatTime(booking.PickUpTime)}`}
          />

          {booking.typeCondition === "Car" && (
            <InfoRow
              label="Check Out"
              value={`${checkOut}, at ${formatTime(booking.DropOffTime)}`}
            />
          )}
        </section>
      )}
    </div>
  );
};

export default BookingDateANDTime;
