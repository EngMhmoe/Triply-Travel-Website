export default function Header({ DataDetails }) {
  return (
    <div>
      <span className="text-(--primary-color) text-2xl font-bold">
        {DataDetails.badge}
      </span>

      <div className="flex gap-2 items-center mt-2">
        <h2 className="text-xl font-semibold">
          From{" "}
          <span className="text-(--primary-color2) font-bold">
            ${DataDetails.price}
          </span>
        </h2>
        {/* ////////////////////////////// */}
        {DataDetails.oldPrice > 0 && (
          <span className="line-through opacity-70">
            ${DataDetails.oldPrice}
          </span>
        )}
      </div>
    </div>
  );
}
