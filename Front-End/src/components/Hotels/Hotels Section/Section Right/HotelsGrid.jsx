//import Component NEW
import HotelsCard from "./HotelsCard";

export default function HotelsGrid({
  GetALLFilteredDataCards,
  //
  AddToCart,
  AddToWishlist,
  AddToDetailsPage,
  //
  t,
}) {
  return (
    // grid xl:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-10
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-10">
      {GetALLFilteredDataCards?.map((hotel) => (
        <HotelsCard
          key={hotel?.documentId}
          Item={hotel}
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
