//import useGetWishlistStore
import { useWishlistStore } from "../../../Store/useWishlistStore";

export default function SkeletonLoading({ loading }) {
  //getWishlist
  const { getWishlist } = useWishlistStore();

  return (
    <section>
      {loading && (
        <div className="flex flex-col gap-6">
          {getWishlist.map((i) => (
            <div
              key={i}
              className="bg-(--secondary-color) animate-pulse h-60 rounded-2xl"
            ></div>
          ))}
        </div>
      )}
    </section>
  );
}
