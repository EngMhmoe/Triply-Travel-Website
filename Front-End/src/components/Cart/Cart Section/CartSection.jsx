//import Components
import CartTable from "./CartTable Section/CartTable";
import CartSummary from "./CartSummary Section/CartSummary";

export default function CartSection() {
  /*===========================================================================
    Start Styling CartSection
    =============================================================================*/
  const CartSection_Styling = "xl:container xl:mx-auto flex flex-col gap-y-35";

  return (
    <section className={CartSection_Styling}>
      <CartTable />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <CartSummary />
    </section>
  );
}
