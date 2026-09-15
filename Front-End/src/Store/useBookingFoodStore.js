import { create } from "zustand";

const useBookingFoodStore = create((set) => ({
  booking: {
        //
    typeCondition: "Food",
    type: "",

    //
    PickingUp: "",
    PickUpDate: "",
    PickUpTime: "",
    Quantity: 1,
    CustomerNotes: "",

        //

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
              //
    typeCondition: "Food",
    type: "",

    //
    booking: {
    PickUpDate: "",
    PickUpTime: "",
    Quantity: 1,
    CustomerNotes: "",

        //
    total: 0,

      //orderInfo in Booking Checkout Page 
        orderInfo: {},
        billingInfo: {}
      },
    }),
}));

export default useBookingFoodStore; 