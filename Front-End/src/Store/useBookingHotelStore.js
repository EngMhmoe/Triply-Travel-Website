import { create } from "zustand";

const useBookingHotelStore = create((set) => ({
  booking: {
    type: "",
    typeCondition: "Hotel",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    guests: 1,
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
        type: "",
        typeCondition: "Hotel",
        checkIn: "",
        checkOut: "",
        rooms: 1,
        guests: 1,
        nights: 0,
        total: 0,

//orderInfo in Booking Checkout Page 
            orderInfo: {},
        billingInfo: {}
      }, 
    }),
}));

export default useBookingHotelStore;