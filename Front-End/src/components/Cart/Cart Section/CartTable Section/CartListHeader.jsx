export default function CartListHeader() {
  /*===========================================================================
    Start Styling CartListHeader
    =============================================================================*/
  const CartListHeader_Styling = {
    Styling1:
      "hidden md:grid grid-cols-8 gap-4 p-4 border-b-2 border-black/10 text-(--primary-pera) uppercase font-semibold",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling2: "col-span-4",

    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    Styling3: "col-span-4 flex items-center justify-between",
  };

  return (
    <section className={CartListHeader_Styling.Styling1}>
      <span className={CartListHeader_Styling.Styling2}>Product</span>
      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}
      <div className={CartListHeader_Styling.Styling3}>
        <span>Price</span>
        <span>Quantity</span>
        <span>Sub Total</span>
        <span>Action</span>
      </div>
    </section>
  );
}
