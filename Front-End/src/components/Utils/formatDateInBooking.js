export  const formatDateInBooking = (booking) => {
//Step 1 ==> Vars
  const isCarOrFood =
    booking.typeCondition === "Car" || booking.typeCondition === "Food";

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  //Step 2 ==> Convert checkIn
  const checkIn = new Date(
    isCarOrFood ? booking.PickUpDate : booking.checkIn,
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const checkOut = new Date(
    isCarOrFood ? booking.DropOffDate : booking.checkOut,
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  //Step 3 ==> Convert Time TO time
  const formatTime = (time) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };
    return {
    checkIn: checkIn,
    checkOut:checkOut,
    formatTime: formatTime,
    };
  };
