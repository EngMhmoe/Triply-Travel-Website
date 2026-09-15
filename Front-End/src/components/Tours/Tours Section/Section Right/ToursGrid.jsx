//import component NEW
import TourCard from "./TourCard";

export default function ToursGrid({
  GetALLFilteredDataCards,
  //
  AddToCart,
  AddToWishlist,
  AddToDetailsPage,
  t,
}) {
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-10">
      {GetALLFilteredDataCards?.map((tour) => (
        <TourCard
          key={tour?.documentId}
          Item={tour}
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
