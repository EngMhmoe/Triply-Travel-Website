//import React Icon
import { GoKey } from "react-icons/go";

const ForgotPasswordButton = ({ loading }) => {
  return (
    <button
      id="submit"
      type="submit"
      className="w-full bg-(--primary-color) hover:bg-(--primary-pera) text-white py-3 rounded-2xl flex items-center justify-center gap-2 transition duration-1000 cursor-pointer"
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          <GoKey />
          Send Reset Link
        </>
      )}
    </button>
  );
};

export default ForgotPasswordButton;
