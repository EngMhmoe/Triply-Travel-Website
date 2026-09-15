//import Component UI
import Header from "../../../../../UI/Booking Confirmation_Page/Header";
import InfoRow from "../../../../../UI/Booking Confirmation_Page/InfoRow";

const ALLTypesBookingInfo = ({ booking, Price }) => {
  const isTour = booking.typeCondition === "Tour";
  const isHotel = booking.typeCondition === "Hotel";
  const isCar = booking.typeCondition === "Car";
  const isFood = booking.typeCondition === "Food";
  const isDestination = booking.typeCondition === "Destination";

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  // ALLTypesBookingInfoData ==> OK
  const ALLTypesBookingInfoData = {
    //BookingInfoTour ==> OK
    BookingInfoTour: [
      { label: "Tour Type", value: booking.type },
      { label: "Adults", value: booking.adults },
      { label: "Children", value: booking.children },
      { label: "Total Guests", value: booking.person },
      {
        label: "Nights",
        value: `${booking.nights} ${booking.nights > 1 ? "Nights" : "Night"}`,
      },
      { label: "Tour Price", value: `$${Price} / Night` },
      // { label: "Total Price", value: `$${booking.total}` },
    ],

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////

    //BookingInfoHotel ==> OK
    BookingInfoHotel: [
      { label: "Room Type", value: booking.type },
      { label: "Rooms", value: booking.rooms },
      { label: "Guests", value: booking.guests },
      {
        label: "Nights",
        value: `${booking.nights} ${booking.nights > 1 ? "Nights" : "Night"}`,
      },
      { label: "Room Price", value: `$${Price} / Night` },
      // { label: "Total Price", value: `$${booking.total}` },
    ],

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////

    //BookingInfoCar ==> OK
    BookingInfoCar: [
      { label: "Car Type", value: booking.type },
      { label: "Passengers", value: booking.person },
      { label: "Passengers", value: booking.person },
      { label: "DropOff Location", value: booking.DropOff },
      {
        label: "Rental Duration",
        value: `${booking.nights} ${booking.nights > 1 ? "Nights" : "Night"}`,
      },
      { label: "Car Price", value: `$${Price} / Night` },
      // { label: "Total Price", value: `$${booking.total}` },
    ],

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////

    //BookingInfoFood ==> OK
    BookingInfoFood: [
      { label: "Meal Type", value: booking.type },
      {
        label: "Quantity",
        value: `${booking.Quantity} ${booking.Quantity > 1 ? "Orders" : "Order"}`,
      },
      { label: "PickingUp Location", value: booking.PickingUp },
      { label: "Food Price", value: `$${Price}` },
      // { label: "Total Price", value: `$${booking.total}` },
    ],

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////

    //BookingInfoDestination ==> OK
    BookingInfoDestination: [
      { label: "Adults", value: booking.adults },
      {
        label: "Children",
        value: booking.children,
      },
      {
        label: "Total Travelers",
        value: booking.person,
      },
      {
        label: "Stay",
        value: `${booking.nights} ${booking.nights > 1 ? "Nights" : "Night"}`,
      },
      { label: "Price Per Person", value: `$${Price}` },
      // { label: "Total Price", value: `$${booking.total}` },
    ],
  };

  return (
    <div>
      <Header title={"Booking Info"} />

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {isTour && (
        <section>
          {ALLTypesBookingInfoData.BookingInfoTour.map((tour, index) => (
            <InfoRow key={index} label={tour.label} value={tour.value} />
          ))}
        </section>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {isHotel && (
        <section>
          {ALLTypesBookingInfoData.BookingInfoHotel.map((tour, index) => (
            <InfoRow key={index} label={tour.label} value={tour.value} />
          ))}
        </section>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {isCar && (
        <section>
          {ALLTypesBookingInfoData.BookingInfoCar.map((tour, index) => (
            <InfoRow key={index} label={tour.label} value={tour.value} />
          ))}
        </section>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {isFood && (
        <section>
          {ALLTypesBookingInfoData.BookingInfoFood.map((tour, index) => (
            <InfoRow key={index} label={tour.label} value={tour.value} />
          ))}
        </section>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {isDestination && (
        <section>
          {ALLTypesBookingInfoData.BookingInfoDestination.map((tour, index) => (
            <InfoRow key={index} label={tour.label} value={tour.value} />
          ))}
        </section>
      )}
    </div>
  );
};

export default ALLTypesBookingInfo;
