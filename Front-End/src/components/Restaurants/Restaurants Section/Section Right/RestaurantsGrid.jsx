//import component NEW
import RestaurantsCard from "./RestaurantsCard";

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
      {GetALLFilteredDataCards.map((food) => (
        <RestaurantsCard
          key={food?.documentId}
          item={food}
          AddToCart={AddToCart}
          AddToWishlist={AddToWishlist}
          AddToDetailsPage={AddToDetailsPage}
          t={t}
        />
      ))}
    </div>
  );
}
