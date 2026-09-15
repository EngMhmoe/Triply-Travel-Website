//import Component UI
import Header from "../../../../../UI/Booking Confirmation_Page/Header";
import InfoRow from "../../../../../UI/Booking Confirmation_Page/InfoRow";

export default function ALLTypesInfo({ bookingSummaryDataDetails, booking }) {
  const isTour = booking.typeCondition === "Tour" && "Tour";
  const isHotel = booking.typeCondition === "Hotel" && "Hotel";
  const isCar = booking.typeCondition === "Car" && "Car";
  const isFood = booking.typeCondition === "Food" && "Food";
  const isDestination =
    booking.typeCondition === "Destination" && "Destination";

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  // ALLTypesInfoData ==> ALLTypesInfoData
  const ALLTypesInfoData = {
    //InfoTour ==> OK
    InfoTour: [
      { label: "Tour Name", value: bookingSummaryDataDetails.title },

      {
        label: "Location",
        value: `${bookingSummaryDataDetails.location.city}, ${bookingSummaryDataDetails.location.country}`,
      },

      { label: "Category", value: bookingSummaryDataDetails.category },

      { label: "Language", value: bookingSummaryDataDetails.language },
    ],

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////

    //InfoHotel ==> OK
    InfoHotel: [
      { label: "Hotel Name", value: bookingSummaryDataDetails.title },

      {
        label: "Location",
        value: `${bookingSummaryDataDetails.location.city}, ${bookingSummaryDataDetails.location.address}`,
      },

      { label: "Category", value: bookingSummaryDataDetails.category },

      {
        label: "Hotel Type",
        value: `${isHotel && bookingSummaryDataDetails.details.hotelInfo.hotelStars} Star`,
      },
    ],

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////

    //InfoCar ==> OK
    InfoCar: [
      { label: "Car Name", value: bookingSummaryDataDetails.title },

      {
        label: "Location",
        value: `${bookingSummaryDataDetails.location.city}, ${bookingSummaryDataDetails.location.address}`,
      },

      { label: "Brand", value: bookingSummaryDataDetails.brand },

      { label: "Model", value: bookingSummaryDataDetails.model },

      { label: "Fuel Type", value: bookingSummaryDataDetails.fuel },

      { label: "Seats", value: bookingSummaryDataDetails.seats },

      { label: "Doors", value: bookingSummaryDataDetails.doors },

      { label: "Engine", value: bookingSummaryDataDetails.engine },
    ],

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////

    //InfoFood ==> OK
    InfoFood: [
      { label: "Food Name", value: bookingSummaryDataDetails.title },

      {
        label: "Location",
        value: `${bookingSummaryDataDetails.location.city}, ${bookingSummaryDataDetails.location.address}`,
      },

      { label: "Restaurant", value: bookingSummaryDataDetails.restaurantName },

      { label: "Cuisine", value: bookingSummaryDataDetails.cuisine },

      { label: "Category", value: bookingSummaryDataDetails.category },
    ],

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////

    //BookingInfoDestination ==> OK
    InfoDestination: [
      { label: "Destination  Name", value: bookingSummaryDataDetails.title },

      {
        label: "Location",
        value: `${bookingSummaryDataDetails.location.city}, ${bookingSummaryDataDetails.location.country}`,
      },

      { label: "Continent", value: bookingSummaryDataDetails.continent },

      { label: "Category", value: bookingSummaryDataDetails.category },

      {
        label: "Available Tours",
        value: bookingSummaryDataDetails.tours + " Tours",
      },

      {
        label: "Available Hotels",
        value: bookingSummaryDataDetails.hotels + " Hotels",
      },

      {
        label: "Available Transports",
        value: bookingSummaryDataDetails.transports + " Transports",
      },
    ],
  };

  return (
    <div>
      <Header
        title={`${isTour || isHotel || isCar || isFood || isDestination} Info`}
      />

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {isTour && (
        <section>
          <section>
            {ALLTypesInfoData.InfoTour.map((tour, index) => (
              <InfoRow key={index} label={tour.label} value={tour.value} />
            ))}
          </section>
        </section>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {isHotel && (
        <section>
          <section>
            {ALLTypesInfoData.InfoHotel.map((tour, index) => (
              <InfoRow key={index} label={tour.label} value={tour.value} />
            ))}
          </section>
        </section>
      )}
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {isCar && (
        <section>
          {ALLTypesInfoData.InfoCar.map((tour, index) => (
            <InfoRow key={index} label={tour.label} value={tour.value} />
          ))}
        </section>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {isFood && (
        <section>
          {ALLTypesInfoData.InfoFood.map((tour, index) => (
            <InfoRow key={index} label={tour.label} value={tour.value} />
          ))}
        </section>
      )}

      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {isDestination && (
        <section>
          {ALLTypesInfoData.InfoDestination.map((tour, index) => (
            <InfoRow key={index} label={tour.label} value={tour.value} />
          ))}
        </section>
      )}
    </div>
  );
}
