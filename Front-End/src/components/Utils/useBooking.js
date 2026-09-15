import { useState, useEffect } from "react";

const KEY = "booking_full";

const DEFAULT_BOOKING = {
  checkIn: "",
  checkOut: "",
  adults: 1,
  children: 0,
};

export default function useBooking() {
const [data, setData] = useState(() => {
  try {
    const saved =
      JSON.parse(
        localStorage.getItem(KEY)
      );

    return saved || DEFAULT_BOOKING;
  } catch {
    return DEFAULT_BOOKING;
  }
});

////////////////////////////////////////////////

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(data));
  }, [data]);

  ////////////////////////////////////////////////

  const update = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  ////////////////////////////////////////////////
  
  return { data, update };
}
