import { FaUser } from "react-icons/fa";

export default function MyProfileFormButtonSubmit() {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 mt-5 w-fit bg-linear-to-r hover:bg-linear-to-tl from-(--primary-color2) to-(--primary-color) text-white hover:bg-(--primary-pera) p-4 rounded-br-4xl rounded-tl-4xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-4xl hover:rounded-bl-4xl duration-2000 shadow-md shadow-black/30 cursor-pointer text-xl font-bold"
    >
      Update Profile information
      <FaUser />
    </button>
  );
}
