//import component NEW
import TransportsCard from "./TransportsCard";

export default function TransportsGrid({
  GetALLFilteredDataCards,
  //
  AddToCart,
  AddToWishlist,
  AddToDetailsPage,
  t,
}) {
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-10">
      {GetALLFilteredDataCards.map((Car) => (
        <TransportsCard
          key={Car?.documentId}
          Item={Car}
          AddToCart={AddToCart}
          AddToWishlist={AddToWishlist}
          AddToDetailsPage={AddToDetailsPage}
          //
          t={t}
        />
      ))}
    </div>
  );
}
