import { BASE_URL } from "../../../../services/APIs/server_URL";

export default function HeroSection({ image, name }) {
  return (
    <img
      src={`${BASE_URL}${image?.url}`}
      alt={name}
      className="w-full h-80 md:h-100 object-cover rounded-2xl shadow-2xl shadow-red-100 mb-4"
    />
  );
}
