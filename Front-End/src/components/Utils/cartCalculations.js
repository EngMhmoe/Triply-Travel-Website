export const cartCalculations = (carts) => {
//حساب إجمالي الكميات
  /*
  لو عندك:

  [
  { quantity: 2 },
  { quantity: 3 },
  { quantity: 1 }
  ]

  الحساب:

  2 + 3 + 1 = 6

  TotalQuantity = 6
   */
  let totalQuantity = carts.reduce((acc, item) => acc + item.quantity, 0);



// function is SubTotalCart
  const subTotal = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );



//الخصم
//في البداية مفيش خصم
  let discount = 0;


/* 
يعني:
من 1000 إلى أقل من 5000 → خصم 10%
5000 أو أكثر → خصم 20%
*/
  if (subTotal >= 5000) {
    discount = subTotal * 0.2;
  } else if (subTotal >= 1000) {
    discount = subTotal * 0.1;
  }


//بعد الخصم
  /*
  مثال:
  Subtotal = 1000
  Discount = 100

  يبقى:
  afterDisCount = 900
  */
  const afterDiscount = subTotal - discount;


//الضريبة
  /* 
  مثال:
  900 × 14% = 126
  */
  const tax = afterDiscount * 0.14;  //يعني 14%

//الإجمالي النهائي
  const total = afterDiscount + tax;

  return {
    totalQuantity,
    subTotal,
    discount,
    tax,
    total,
    afterDiscount,
  };
};