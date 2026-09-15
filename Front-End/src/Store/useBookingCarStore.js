import { create } from "zustand";

const useBookingCarStore = create((set) => ({
  booking: {
    //
    typeCondition: "Car",
    type: "",
    
    PickingUp: "",
    PickUpDate: "",
    PickUpTime: "",

    // 

    DropOff: "",
    DropOffDate: "",
    DropOffTime: "",


    //
    nights: 0,
    total: 0,
    person: 1,

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
        //
        typeCondition: "Car",
        type: "",


    PickingUp: "",
    PickUpDate: "",
    PickUpTime: "",

    // 

    DropOff: "",
    DropOffDate: "",
    DropOffTime: "",


    //
    nights: 0,
    total: 0,
    person: 1,

      //orderInfo in Booking Checkout Page 
            orderInfo: {},
        billingInfo: {}
      }, 
    }),
})); 

export default useBookingCarStore;