// ==========================================
// src/utils/calculateTotal.js
// ==========================================

export const calculateTotal = (items) => {
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return { subtotal, tax, total };
};
