export function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;

  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);

  const diff = (d2 - d1) / 86400000;

  return Math.max(Math.ceil(diff), 0);
}


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


export function calculateTotal(
  nights,
  price,
  adults,
  children
) {
  const adultTotal = Number(adults) * Number(price);

  const childrenTotal =
    Number(children) * (Number(price) * 0.5);

  return Number(nights) * (adultTotal + childrenTotal);
}



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////



