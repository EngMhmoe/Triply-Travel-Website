import { create } from "zustand";

const useBookingTourStore = create((set) => ({
  booking: {
    type: "",
    typeCondition: "Tour",
    // checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    person: 1,
    nights: 0,
    total: 0,

    //orderInfo in Booking Checkout Page 
    orderInfo: {},
    billingInfo: {}
  }, // ← دي كانت ناقصة

  updateBooking: (newData) =>
    set((state) => ({
      booking: {
        ...state.booking,
        ...newData,
      },
    })), 

  resetBooking: () =>
    set({
      booking: {
        tour: "",
        typeCondition: "Tour",
        // checkIn: "",
        checkOut: "",
        adults: 1,
        children: 0,
        person: 1,
        nights: 0,
        total: 0,

        ////orderInfo in Booking Checkout Page 
        orderInfo: {},
        billingInfo: {}
      }
    }),
}));

export default useBookingTourStore;